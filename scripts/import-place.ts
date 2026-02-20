import 'dotenv/config'
import mongoose from 'mongoose'
import type { CompanyData, TestimonialItem } from '../types/testimonial'

// dotenv/config charge .env par défaut, on charge aussi .env.local
import { config } from 'dotenv'
config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI!
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY!

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

async function fetchPlace(placeId: string) {
  const url = `https://places.googleapis.com/v1/places/${placeId}`
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
      'X-Goog-FieldMask':
        'displayName,formattedAddress,internationalPhoneNumber,nationalPhoneNumber,rating,userRatingCount,reviews,websiteUri,googleMapsUri,addressComponents',
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Google Places API error ${res.status}: ${body}`)
  }

  return res.json()
}

function extractCity(addressComponents: any[]): string {
  const locality = addressComponents?.find((c: any) =>
    c.types?.includes('locality')
  )
  return locality?.longText ?? locality?.shortText ?? ''
}

function mapReviews(reviews: any[] | undefined): TestimonialItem[] {
  if (!reviews?.length) return []
  return reviews.map((r: any, i: number) => ({
    id: i + 1,
    avatar: getInitials(r.authorAttribution?.displayName ?? ''),
    author: r.authorAttribution?.displayName ?? '',
    rating: r.rating ?? 5,
    date: r.relativePublishTimeDescription ?? '',
    text: r.originalText?.text ?? r.text?.text ?? '',
  }))
}

async function main() {
  const [placeId, email, category] = process.argv.slice(2)

  if (!placeId || !email || !category) {
    console.error('Usage: npx tsx scripts/import-place.ts <placeId> <email> <category>')
    process.exit(1)
  }

  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in environment variables')
    process.exit(1)
  }
  if (!GOOGLE_PLACES_API_KEY) {
    console.error('GOOGLE_PLACES_API_KEY is not defined in environment variables')
    process.exit(1)
  }

  console.log(`Fetching place ${placeId}...`)
  const place = await fetchPlace(placeId)

  const companyName = place.displayName?.text ?? ''
  const slug = slugify(companyName)

  const companyData: CompanyData = {
    companyName,
    slug,
    category,
    totalReviews: place.userRatingCount ?? 0,
    score: place.rating ?? 0,
    reviews: mapReviews(place.reviews),
    phone: place.internationalPhoneNumber ?? '',
    displayPhone: place.nationalPhoneNumber ?? '',
    googleMapUrl: place.googleMapsUri ?? '',
    city: extractCity(place.addressComponents),
    address: place.formattedAddress ?? '',
    email,
    website: place.websiteUri,
  }

  console.log(`\nCompany: ${companyData.companyName}`)
  console.log(`Slug: ${companyData.slug}`)
  console.log(`City: ${companyData.city}`)
  console.log(`Score: ${companyData.score} (${companyData.totalReviews} reviews)`)
  console.log(`Reviews imported: ${companyData.reviews.length}`)

  await mongoose.connect(MONGODB_URI)
  console.log('\nConnected to MongoDB')

  const db = mongoose.connection.db!
  const collection = db.collection('company')

  await collection.updateOne(
    { slug },
    { $set: companyData },
    { upsert: true }
  )

  console.log(`Upserted: ${companyData.companyName} (${slug})`)
  await mongoose.disconnect()
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
