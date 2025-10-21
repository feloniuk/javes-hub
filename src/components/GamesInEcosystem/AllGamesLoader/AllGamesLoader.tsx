import GameGridCard from '@/components/GamesInEcosystem/GameGridCard/GameGridCard';
import { getGames } from '@/actions/gamesAction';
import fallbackGamesData from '@/components/GamesInEcosystem/data.json';

interface Game {
  id: string | number;
  name: string;
  logo: string | null;
  image: string | null;
  icon?: {
    url: string;
  } | string | null;
}

export default async function AllGamesLoader() {
  let games: Game[] = [];
  
  try {
    console.log('[AllGamesLoader] Fetching games from API...');
    const apiGames = await getGames();
    
    if (apiGames && apiGames.length > 0) {
      console.log(`[AllGamesLoader] Successfully loaded ${apiGames.length} games from API`);
      games = apiGames.map((game: any) => ({
        id: game.id,
        name: game.name,
        logo: game.logo || null,
        image: game.image || null,
        icon: game.icon || null,
      }));
    } else {
      console.warn('[AllGamesLoader] API returned empty array, using fallback data');
      games = fallbackGamesData;
    }
  } catch (error) {
    console.error('[AllGamesLoader] Error loading games from API:', error);
    console.log('[AllGamesLoader] Using fallback static data');
    games = fallbackGamesData;
  }

  // Преобразуем данные к единому формату
  const normalizedGames = games.map((game) => {
    let logoUrl = '';
    
    // Обработка разных форматов icon/logo
    if (game.logo) {
      logoUrl = game.logo;
    } else if (game.icon) {
      if (typeof game.icon === 'string') {
        logoUrl = game.icon.startsWith('http') 
          ? game.icon 
          : `https://dev2-store.mmonster.co${game.icon}`;
      } else if (game.icon?.url) {
        logoUrl = game.icon.url.startsWith('http')
          ? game.icon.url
          : `https://dev2-store.mmonster.co${game.icon.url}`;
      }
    }

    return {
      id: game.id,
      name: game.name,
      logo: logoUrl || '/assets/games-in-ecosystem/default-game-logo.svg',
      image: game.image || '/assets/games-in-ecosystem/default-game-image.webp',
    };
  });

  console.log(`[AllGamesLoader] Rendering ${normalizedGames.length} game cards`);

  return (
    <>
      {normalizedGames.map((game) => (
        <GameGridCard
          key={game.id}
          logo={game.logo}
          image={game.image}
          name={game.name}
        />
      ))}
    </>
  );
}