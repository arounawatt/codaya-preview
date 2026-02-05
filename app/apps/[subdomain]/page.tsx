// apps/[subdomain]/page.tsx
import MrLeroyUrgences from '@/components/prospects/MrLeroyUrgences'
import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation'
import Radical3D from '@/components/prospects/radical3d';
import SelviSerrurier from '@/components/prospects/selviserrurier';
import ArtisanDuvalCouvreur from '@/components/prospects/artisanduval';
import AGEElectricien from '@/components/prospects/age-electricien';

const clients = {
  'mrleroyurgences': MrLeroyUrgences,
  'radical3d': Radical3D,
  'selviserrurier': SelviSerrurier,
  'artisanduval': ArtisanDuvalCouvreur,
  'age-electricien': AGEElectricien,
}

interface PageProps {
  params: Promise<{
    subdomain: keyof typeof clients;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { subdomain } = await params;
  const cleanedSubdomain =subdomain.replace('-preview', '') as keyof typeof clients;
  
  const Component = clients[cleanedSubdomain];
  if (!Component) return notFound();

  return <Component />;
}