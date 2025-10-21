import { Suspense } from 'react';
import GamesPage from '@/components/Pages/GamesPage/GamesPage';
import GamesGridSection from '@/components/GamesInEcosystem/GamesGridSection/GamesGridSection';
import AllGamesLoader from '@/components/GamesInEcosystem/AllGamesLoader/AllGamesLoader';
// import GameGridCard from '@/components/GamesInEcosystem/GameGridCard/GameGridCard';
import Glow from '@/components/Common/Glow/Glow';

export const revalidate = 86400;

function GamesLoadingSkeleton() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="bg-white/10 rounded-xl animate-pulse"
          style={{ 
            minHeight: '248px',
            aspectRatio: '1 / 1'
          }}
        />
      ))}
    </>
  );
}

export default function Games() {
  return (
    <GamesPage>
      <main>
        <GamesGridSection>
          <Suspense fallback={<GamesLoadingSkeleton />}>
            <AllGamesLoader />
          </Suspense>
        </GamesGridSection>
        <Glow className='rightGamesWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
      </main>
    </GamesPage>
  );
}