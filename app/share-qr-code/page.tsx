import { notFound } from 'next/navigation';
import { getCompanyBySlug } from '@/lib/services/reviews';
import ShareQrCodePage from './ShareQrCodePage';

interface ShareQrCodePageProps {
  searchParams: Promise<{ subdomain?: string }>;
}

export default async function ShareQrCode({ searchParams }: ShareQrCodePageProps) {
  const { subdomain } = await searchParams;

  if (!subdomain) return notFound();

  const company = await getCompanyBySlug(subdomain);
  if (!company) return notFound();

  return (
    <ShareQrCodePage
      slug={company.slug}
      companyName={company.companyName}
      category={company.category}
      score={company.score}
      totalReviews={company.totalReviews}
    />
  );
}
