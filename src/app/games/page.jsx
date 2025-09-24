import GamesPage from '@/components/Pages/GamesPage/GamesPage';
import GamesGridSection from '@/components/GamesInEcosystem/GamesGridSection/GamesGridSection';
import GameGridCard from '@/components/GamesInEcosystem/GameGridCard/GameGridCard';
import games from '@/components/GamesInEcosystem/data.json';
import Glow from '@/components/Common/Glow/Glow';

export default function GamesInJavesEcosystem() {
  return (
    <GamesPage>
      <main>
        <GamesGridSection>
          {games.map((game) => (
            <GameGridCard 
              key={game.id}
              logo={game.logo}
              image={game.image}
              name={game.name}
            />
          ))}
        </GamesGridSection>
        <Glow className='rightGamesWrapper' glowLink='/assets/glow/right-bottom-glow.svg' />
      </main>
    </GamesPage>
  );
}