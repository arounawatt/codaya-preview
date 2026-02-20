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

  const siteUrl = `https://${company.slug}.codaya.fr`;
  const deadline = new Date(Date.now() + 72 * 60 * 60 * 1000);
  const deadlineDate = `${String(deadline.getDate()).padStart(2, '0')}/${String(deadline.getMonth() + 1).padStart(2, '0')}/${deadline.getFullYear()}`;

  const { error } = await resend.emails.send({
    from: 'Trustly by Codaya <contact@codaya.agency>',
    to: company.email,
    template: {
      id: '6b04299c-01f8-4174-a375-434bcd4b80ce',
      variables: {
        siteUrl,
        companyName: company.companyName,
        deadlineDate
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
