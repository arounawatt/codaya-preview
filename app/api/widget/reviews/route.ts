import { NextRequest, NextResponse } from 'next/server'
import { getCompanyBySlug } from '@/lib/services/reviews'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')

  if (!slug) {
    return NextResponse.json(
      { error: 'Missing slug parameter' },
      { status: 400, headers: corsHeaders }
    )
  }

  const company = await getCompanyBySlug(slug)

  if (!company) {
    return NextResponse.json(
      { error: 'Unknown company' },
      { status: 404, headers: corsHeaders }
    )
  }

  const limit = Math.min(
    parseInt(request.nextUrl.searchParams.get('limit') ?? '10', 10),
    20
  )

  // Shuffle reviews (Fisher-Yates) and limit
  const shuffled = [...company.reviews]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return NextResponse.json(
    {
      company: {
        name: company.companyName,
        slug: company.slug,
        score: company.score,
        totalReviews: company.totalReviews,
      },
      reviews: shuffled.slice(0, limit),
    },
    {
      headers: {
        ...corsHeaders,
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    }
  )
}
