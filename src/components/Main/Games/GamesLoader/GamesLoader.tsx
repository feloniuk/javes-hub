import GameCard from '@/components/Main/Games/GameCard/GameCard';
import { getGames } from '@/actions/gamesAction';
import fallbackGamesData from '@/components/Main/Games/data.json';

export default async function GamesLoader() {
  let games = [];
  
  try {
    console.log('[GamesLoader] Fetching games from API for home page...');
    const apiGames = await getGames();
    
    if (apiGames && apiGames.length > 0) {
      console.log(`[GamesLoader] Successfully loaded ${apiGames.length} games from API`);
      games = apiGames;
    } else {
      console.warn('[GamesLoader] API returned empty array, using fallback data');
      games = fallbackGamesData;
    }
  } catch (error) {
    console.error('[GamesLoader] Error loading games from API:', error);
    console.log('[GamesLoader] Using fallback static data');
    games = fallbackGamesData;
  }

  // Показываем только первые 8 игр на главной
  const displayedGames = games.slice(0, 8);
  
  console.log(`[GamesLoader] Rendering ${displayedGames.length} games on home page`);

  return (
    <>
      {displayedGames.map((game) => (
        <GameCard
          key={game.id}
          icon={typeof game.icon === 'string' ? game.icon : game.icon?.url || null}
          name={game.name}
          isOnSale={'isOnSale' in game ? game.isOnSale : false}
        />
      ))}
    </>
  );
}