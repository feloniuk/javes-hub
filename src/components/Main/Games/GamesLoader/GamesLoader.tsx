import GameCard from '@/components/Main/Games/GameCard/GameCard';
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
    {
      id: "2",
      name: "Diablo IV",
      icon: "/assets/home/games/diablo-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "3",
      name: "EA FC 24",
      icon: "/assets/home/games/fc24-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "4",
      name: "Call of Duty MWIII",
      icon: "/assets/home/games/mw-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "5",
      name: "Fortnite",
      icon: "/assets/home/games/fortnite-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "6",
      name: "Last Epoch",
      icon: "/assets/home/games/last-epoch-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "7",
      name: "The Division 2",
      icon: "/assets/home/games/division-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    },
    {
      id: "8",
      name: "Helldivers 2",
      icon: "/assets/home/games/helldivers-icon.svg",
      image: null,
      isOnSale: false,
      url: null
    }
  ];

  const gamesToDisplay = games.length > 0 ? games : fallbackGames;
  const displayedGames = gamesToDisplay.slice(0, 8);

  return (
    <>
      {displayedGames.map((game) => (
        <GameCard
          key={game.id}
          icon={game.icon?.url || game.icon as unknown as string || null}
          name={game.name}
          isOnSale={game.isOnSale}
          url={game.url}
        />
      ))}
    </>
  );
}