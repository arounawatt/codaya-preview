import { NextResponse } from 'next/server'
import { getHomeReviews } from '@/lib/services/reviews'

export async function GET() {
  const reviews = await getHomeReviews()
  return NextResponse.json({ reviews })
}
