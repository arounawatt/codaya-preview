// apps/[subdomain]/page.tsx
import MrLeroyUrgences from '@/components/prospects/MrLeroyUrgences'
import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation'

const clients = {
  'mrleroyurgences': MrLeroyUrgences,
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