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
import GameCard from '@/components/Main/Games/GameCard/GameCard';
import TopPlayersLoader from '@/components/Main/PlayersDatabase/TopPlayersLoader/TopPlayersLoader';
import PlayerCardSkeleton from '@/components/Main/PlayersDatabase/PlayerCardSkeleton/PlayerCardSkeleton';
import games from '@/components/Main/Games/data.json';

// Компонент-скелетон для всех 4 карточек + кнопка
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
          {games.map((game) => (
            <GameCard
              key={game.id}
              logo={game.logo}
              image={game.image}
              name={game.name}
            />
          ))}

          <SectionButton href='/games'>
            More <span className='bold'>Games</span>
          </SectionButton>
        </GamesSection>

        <VisionHeading />
        <Glow
          className='rbGlowWrapper'
          glowLink='/assets/glow/right-bottom-glow.svg'
        />

        <JAuth>
          <SectionButton href='/'>
            {/* Sign-up <span className='bold'>Now</span> */}
            Sign-up
          </SectionButton>
        </JAuth>

        <WalletSection />
        <Glow
          className='lbGlowWrapper'
          glowLink='/assets/glow/left-glow.svg'
        />

        {/* <BlockchainSection />
        <NewsSection>
          {[...news].reverse().map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </NewsSection> */}
      </main>
      {/* <SEOJsonLd
        description='Welcome to Javes - trading solution for millions of players worldwide,
        who want to buy and sell items, currencies and services in online computer games.'
        id='https://javes.co/'
      /> */}
    </HomePage>
  );
}