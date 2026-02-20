import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getCompanyBySlug } from '@/lib/services/reviews';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  const { companySlug } = await request.json();

  if (!companySlug) {
    return NextResponse.json({ error: 'companySlug is required' }, { status: 400 });
  }

  const company = await getCompanyBySlug(companySlug);
  if (!company) {
    return NextResponse.json({ error: 'Company not found' }, { status: 404 });
  }

  const qrCodeImgUrl = `https://codaya.fr/qr/${companySlug}.png`;
  const qrCodePageUrl = `https://${companySlug}.codaya.fr/share-qr-code`;

  const { error } = await resend.emails.send({
    from: 'Trustly by Codaya <contact@codaya.agency>',
    to: company.email,
    template: {
      id: '6a29f32b-fc27-4152-99df-387be3e7037d',
      variables: {
        qrCodeImgUrl,
        companyName: company.companyName,
        qrCodePageUrl,
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
