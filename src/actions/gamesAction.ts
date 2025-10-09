'use server';

interface GameIcon {
  url: string;
  thumbnail?: {
    url: string;
  };
}

interface Game {
  id: string;
  name: string;
  icon: GameIcon | null;
  image: GameIcon | null;
  isOnSale: boolean;
  url: string | null;
}

interface Category {
  id: string;
  name: string;
  icon: GameIcon | null;
  image: GameIcon | null;
  isOnSale: boolean;
  url: string | null;
  children: Game[];
}

interface GamesResponse {
  success: boolean;
  data: Category[];
}

export async function getGames(): Promise<Game[]> {
  try {
    const apiUrl = process.env.GAMES_API_URL || 'https://dev2-store.mmonster.co/api/categories/navigation';
    
    console.log('Fetching games from API...');
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      next: {
        revalidate: 86400 // 24 часа в секундах
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch games:', response.status, response.statusText);
      throw new Error(`Failed to fetch games: ${response.status}`);
    }

    const result: GamesResponse = await response.json();
    
    if (!result.success || !result.data) {
      throw new Error('Invalid API response');
    }

    // Находим категорию "Games" и возвращаем её children
    const gamesCategory = result.data.find(
      (category) => category.name === 'Choose Game'
    );

    if (!gamesCategory || !gamesCategory.children) {
      console.warn('Games category not found in API response');
      return [];
    }

    console.log(`Games fetched successfully: ${gamesCategory.children.length} games`);
    
    return gamesCategory.children;
  } catch (error) {
    console.error('Error fetching games:', error);
    // Возвращаем пустой массив в случае ошибки
    // чтобы не ломать UI
    return [];
  }
}