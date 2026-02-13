import { companiesBySlug } from '@/mocks/reviews'
import { CompanyData, HomeReview } from '@/types/testimonial'

// Demain : remplacer les imports mocks par des appels MongoDB ici.
// Toutes les pages et API routes consomment ces fonctions — rien d'autre à changer.

export async function getHomeReviews(): Promise<HomeReview[]> {
  return Object.values(companiesBySlug).map((company) => ({
    ...company.reviews[0],
    slug: company.slug,
    companyName: company.companyName,
    companyCategory: company.category,
    companyScore: company.score,
    companyTotalReviews: company.totalReviews,
  }))
}

export async function getCompanyBySlug(slug: string): Promise<CompanyData | null> {
  return companiesBySlug[slug] ?? null
}

export async function getReviewsBySlug(
  slug: string,
  offset = 0,
  limit?: number
): Promise<{ reviews: CompanyData['reviews']; total: number } | null> {
  const company = companiesBySlug[slug]
  if (!company) return null

  const end = limit ? offset + limit : undefined
  return {
    reviews: company.reviews.slice(offset, end),
    total: company.reviews.length,
  }
}
