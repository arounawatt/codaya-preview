import { NextRequest, NextResponse } from 'next/server'
import { generateWidgetScript } from '@/lib/widget/widget-template'

const SLUG_RE = /^[a-z0-9-]+$/

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  let { slug } = await params

  // Strip trailing .js if present
  if (slug.endsWith('.js')) {
    slug = slug.slice(0, -3)
  }

  if (!SLUG_RE.test(slug)) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  // Determine API base from request headers
  const proto = _request.headers.get('x-forwarded-proto') ?? 'http'
  const host = _request.headers.get('host') ?? 'localhost:3000'
  const apiBase = `${proto}://${host}`

  const js = generateWidgetScript(slug, apiBase)

  return new NextResponse(js, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
