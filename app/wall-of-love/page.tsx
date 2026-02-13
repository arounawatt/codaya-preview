import { notFound } from 'next/navigation';
import { getCompanyBySlug } from '@/lib/services/reviews';
import WallOfLoveCarousel from './WallOfLoveCarousel';

interface WallOfLovePageProps {
  searchParams: Promise<{ subdomain?: string }>;
}

export default async function WallOfLovePage({ searchParams }: WallOfLovePageProps) {
  const { subdomain } = await searchParams;

  if (!subdomain) return notFound();

  const company = await getCompanyBySlug(subdomain);
  if (!company) return notFound();

  return (
    <WallOfLoveCarousel
      companyName={company.companyName}
      companyPhone={company.phone}
      companyDisplayPhone={company.displayPhone}
      googleMapUrl={company.googleMapUrl}
      category={company.category}
      score={company.score}
      totalReviews={company.totalReviews}
      reviews={company.reviews}
    />
  );
}
