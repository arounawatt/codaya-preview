export interface TestimonialItem {
  id: number
  avatar: string
  author: string
  rating: number
  date: string
  text: string
}

export interface CompanyData {
  companyName: string
  slug: string 
  category: string
  totalReviews: number
  score: number
  reviews: TestimonialItem[]
  phone: string
  displayPhone: string
  googleMapUrl: string
  city: string
  website?: string
}

export interface HomeReview extends TestimonialItem {
  slug: string
  companyName: string
  companyCategory: string
  companyScore: number
  companyTotalReviews: number
}
