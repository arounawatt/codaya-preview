import dbConnect from '@/lib/mongoose'
import { Company } from '@/lib/models/Company'
import { CompanyData, HomeReview } from '@/types/testimonial'

export async function getHomeReviews(): Promise<HomeReview[]> {
  await dbConnect()
  const companies = await Company.find().lean<CompanyData[]>()

  return companies.map((company) => ({
    ...company.reviews[0],
    slug: company.slug,
    companyName: company.companyName,
    companyCategory: company.category,
    companyScore: company.score,
    companyTotalReviews: company.totalReviews,
  }))
}

export async function getCompanyBySlug(slug: string): Promise<CompanyData | null> {
  await dbConnect()
  return Company.findOne({ slug }).lean<CompanyData | null>()
}

export async function updateReviewsBySlug(
  slug: string,
  reviews: CompanyData['reviews']
): Promise<boolean> {
  await dbConnect()
  const result = await Company.updateOne({ slug }, { $set: { reviews } })
  return result.matchedCount > 0
}

export async function getReviewsBySlug(
  slug: string,
  offset = 0,
  limit?: number
): Promise<{ reviews: CompanyData['reviews']; total: number } | null> {
  await dbConnect()
  const company = await Company.findOne({ slug }).lean<CompanyData | null>()
  if (!company) return null

  const end = limit ? offset + limit : undefined
  return {
    reviews: company.reviews.slice(offset, end),
    total: company.reviews.length,
  }
}
