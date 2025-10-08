// src/app/page.jsx
import { Suspense } from 'react';
import HomePage from '@/components/Pages/HomePage/HomePage';
import Hero from '@/components/Main/Hero/Hero';
import ActivitySection from '@/components/Main/Activity/ActivitySection/ActivitySection';
import SolutionsSection from '@/components/Main/Solutions/SolutionsSection/SolutionsSection';
import Profile from '@/components/Main/Profile/Profile';
import DatabaseSection from '@/components/Main/PlayersDatabase/DatabaseSection/DatabaseSection';
import GamesSection from '@/components/Main/Games/GamesSection/GamesSection';
import VisionHeading from '@/components/Main/VisionHeading/VisionHeading';
import JAuth from '@/components/Main/JAuth/JAuth';
import PainSolve from '@/components/Main/PainSolve/PainSolve';
import WalletSection from '@/components/Main/Wallet/WalletSection/WalletSection';
import Glow from '@/components/Common/Glow/Glow';
import SectionButton from '@/components/Common/SectionButton/SectionButton';
import GamesSectionButton from '@/components/Main/Games/GamesSectionButton/GamesSectionButton';
import GamesLoader from '@/components/Main/Games/GamesLoader/GamesLoader';
import TopPlayersLoader from '@/components/Main/PlayersDatabase/TopPlayersLoader/TopPlayersLoader';
import PlayerCardSkeleton from '@/components/Main/PlayersDatabase/PlayerCardSkeleton/PlayerCardSkeleton';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

function TopPlayersLoading() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <PlayerCardSkeleton key={i} />
      ))}
      <SectionButton href='/pro-players'>
        <span>Explore all <br /> <span className='bold'>Pro-Players</span></span>
      </SectionButton>
    </>
  );
}

function GamesLoading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div 
          key={i} 
          className="bg-white-10 rounded-xl h-20 animate-pulse"
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <HomePage>
      <header>
        <Hero />
      </header>

      <main>
        <ActivitySection />
        <PainSolve />
        <Glow
          className='rtGlowWrapper'
          glowLink='/assets/glow/right-top-glow.svg'
        />

        <Suspense fallback={<div>Loading...</div>}>
          <SolutionsSection />
        </Suspense>

        <Glow
          className='ltGlowWrapper'
          glowLink='/assets/glow/left-glow.svg'
        />

        <Profile />
        
        <DatabaseSection>
          <Suspense fallback={<TopPlayersLoading />}>
            <TopPlayersLoader />
          </Suspense>
        </DatabaseSection>

        <GamesSection>
          <Suspense fallback={<GamesLoading />}>
            <GamesLoader />
          </Suspense>
          
          <GamesSectionButton href='/games'>
            More <span className='bold'>Games</span>
          </GamesSectionButton>
        </GamesSection>

        <VisionHeading />
        <Glow
          className='rbGlowWrapper'
          glowLink='/assets/glow/right-bottom-glow.svg'
        />

        <JAuth>
          <SectionButton href='/'>
            Sign-up
          </SectionButton>
        </JAuth>

        <WalletSection />
        <Glow
          className='lbGlowWrapper'
          glowLink='/assets/glow/left-glow.svg'
        />
      </main>
    </HomePage>
  );
}