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
import NewsSection from '@/components/Main/News/NewsSection/NewsSection';
import Glow from '@/components/Common/Glow/Glow';
import BlockchainSection from '@/components/Main/Blockchain/BlockchainSection/BlockchainSection';
import NewsCard from '@/components/Main/News/NewsCard/NewsCard';
import SectionButton from '@/components/Common/SectionButton/SectionButton';
import PlayerCard from '@/components/Main/PlayersDatabase/PlayerCard/PlayerCard';
import GameCard from '@/components/Main/Games/GameCard/GameCard';
import news from '@/components/Main/News/data.json';
import players from '@/components/Main/PlayersDatabase/data.json';
import games from '@/components/Main/Games/data.json';
// import SEOJsonLd from '@/components/Common/SEOJsonLd/SEOJsonLd';

// export const metadata = {
//   title: 'Trading Ecosystem for Gamers | Javes',
//   description: 'Welcome to Javes - trading solution for millions of players worldwide, who want to buy and sell items, currencies and services in online computer games.',
//   referrer: 'origin-when-cross-origin',
//   publisher: 'Javes',
//   keywords: ['online games', 'trading solution'],
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     title: 'Javes - Trading Ecosystem for Gamers',
//     description: 'Welcome to Javes - trading solution for millions of players worldwide, who want to buy and sell items, currencies and services in online computer games.',
//     images: [
//       {
//         url: 'https://javes.co/og.jpeg',
//         width: 900,
//         height: 900,
//         type: 'image/jpeg',
//         alt: "Javes",
//       },
//     ],
//     url: 'https://javes.co/',
//     type: 'website',
//     siteName: 'Javes',
//     locale: 'en_US',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Javes - Trading Ecosystem for Gamers',
//     description: 'Welcome to Javes - trading solution for millions of players worldwide, who want to buy and sell items, currencies and services in online computer games.',
//     images: ['https://javes.co/og.jpeg'],
//   },
// };

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
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              deals={player.deals}
            />
          ))}

          <SectionButton href='/pro-players'>
            <span>Explore all <br /> <span className='bold'>Pro-Players</span></span>
          </SectionButton>
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

        <BlockchainSection />
        <NewsSection>
          {[...news].reverse().map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </NewsSection>
      </main>
      {/* <SEOJsonLd
        description='Welcome to Javes - trading solution for millions of players worldwide,
        who want to buy and sell items, currencies and services in online computer games.'
        id='https://javes.co/'
      /> */}
    </HomePage>
  );
}