import { headers } from 'next/headers';
import { getHomeReviews } from '@/lib/services/reviews';
import TrustlyLandingPage from './TrustlyLandingPage';

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get('host') ?? 'localhost:3000';
  const demoReviews = await getHomeReviews();

  return (
    <TrustlyLandingPage
      demoReviews={demoReviews}
      host={host}
    />
  );
}
