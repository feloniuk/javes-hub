import GameCard from '@/components/Main/Games/GameCard/GameCard';
import GamesSectionButton from '@/components/Main/Games/GamesSectionButton/GamesSectionButton';
import { getGames } from '@/actions/gamesAction';

export default async function GamesLoader() {
  const games = await getGames();
  
  // Fallback на статические данные если API недоступен
  const fallbackGames = [
    {
      id: "1",
      name: "World of Warcraft",
      icon: "/assets/home/games/wow-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    // ... остальные статические игры из data.json
  ];

  const gamesToDisplay = games.length > 0 ? games : fallbackGames;
  const displayedGames = gamesToDisplay.slice(0, 8);

  return (
    <>
      {displayedGames.map((game) => (
        <GameCard
          key={game.id}
          icon={typeof game.icon === 'string' ? game.icon : game.icon?.url || null}
          name={game.name}
          isOnSale={game.isOnSale}
        />
      ))}

    </>
  );
}