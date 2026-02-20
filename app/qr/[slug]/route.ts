import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.replace(/\.png$/, '');

  const wallOfLoveUrl = `https://${slug}.codaya.fr/wall-of-love`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(wallOfLoveUrl)}`;

  const response = await fetch(qrUrl);

  if (!response.ok) {
    return new NextResponse('Error generating QR code', { status: 500 });
  }

  const imageBuffer = await response.arrayBuffer();

  return new NextResponse(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
