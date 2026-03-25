// apps/[subdomain]/page.tsx
import MrLeroyUrgences from '@/components/prospects/MrLeroyUrgences'
import { notFound } from 'next/navigation'
import Radical3D from '@/components/prospects/radical3d';
import SelviSerrurier from '@/components/prospects/selviserrurier';
import ArtisanDuvalCouvreur from '@/components/prospects/artisanduval';
import AGEElectricien from '@/components/prospects/age-electricien';
import MTRMacon from '@/components/prospects/mtr-construction';
import Dasto from '@/components/prospects/dasto';
import { getCompanyBySlug } from '@/lib/services/reviews';

const clients = {
  'mrleroyurgences': MrLeroyUrgences,
  'radical3d': Radical3D,
  'selviserrurier': SelviSerrurier,
  'artisanduval': ArtisanDuvalCouvreur,
  'age-electricien': AGEElectricien,
  'mtr-construction': MTRMacon,
  'dasto': Dasto,
}

const clientWithNoScore = [Dasto];

interface PageProps {
  params: Promise<{
    subdomain: keyof typeof clients;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { subdomain } = await params;
  const cleanedSubdomain = subdomain.replace('-preview', '') as keyof typeof clients;

  const Component = clients[cleanedSubdomain];
  
  const company = await getCompanyBySlug(cleanedSubdomain);

  return (
    company ? 
    <Component
      testimonials={company.reviews}
      companyName={company.companyName}
      totalReviews={company.totalReviews}
      score={company.score}
    /> : 
    <Component /> 
  );
}
