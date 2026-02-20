import mongoose from 'mongoose'
import { companiesBySlug } from '../mocks/reviews'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables')
  process.exit(1)
}

async function seed() {
  await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB')

  const db = mongoose.connection.db!
  const collection = db.collection('company')

  const companies = Object.values(companiesBySlug)

  for (const company of companies) {
    await collection.updateOne(
      { slug: company.slug },
      { $set: company },
      { upsert: true }
    )
    console.log(`Upserted: ${company.companyName} (${company.slug})`)
  }

  console.log(`\nDone — ${companies.length} companies seeded.`)
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
