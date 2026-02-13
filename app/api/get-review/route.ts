import { NextRequest, NextResponse } from 'next/server'
import { getReviewsBySlug } from '@/lib/services/reviews'

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 })
  }

  const offset = parseInt(request.nextUrl.searchParams.get('offset') ?? '0', 10)
  const limit = request.nextUrl.searchParams.get('limit')
  const parsedLimit = limit ? parseInt(limit, 10) : undefined

  const result = await getReviewsBySlug(slug, offset, parsedLimit)

  if (!result) {
    return NextResponse.json({ error: 'Unknown slug' }, { status: 404 })
  }

  return NextResponse.json(result)
}
