import mongoose, { Schema, Model } from 'mongoose'
import { CompanyData } from '@/types/testimonial'

const ReviewSchema = new Schema(
  {
    id: { type: Number, required: true },
    avatar: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
)

const CompanySchema = new Schema<CompanyData>(
  {
    companyName: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    totalReviews: { type: Number, required: true },
    score: { type: Number, required: true },
    reviews: { type: [ReviewSchema], required: true },
    phone: { type: String, required: true },
    displayPhone: { type: String, required: true },
    googleMapUrl: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
  },
  { collection: 'company' }
)

export const Company: Model<CompanyData> =
  mongoose.models.Company || mongoose.model<CompanyData>('Company', CompanySchema)
