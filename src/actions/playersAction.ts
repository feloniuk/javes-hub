'use server';

interface Player {
  id: number;
  name: string;
  avatar: {
    thumbnail: {
      url: string;
    };
  } | null;
  totalCompletedPrice: number;
  completedDealsCount: number;
  assignedDealsCount: number;
  lastDealDate: string;
}

interface PlayersResponse {
  data: Player[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

async function fetchTopPlayers(): Promise<PlayersResponse> {
  const apiKey = process.env.JAVES_API_KEY;
  
  if (!apiKey) {
    console.error('JAVES_API_KEY is missing');
    throw new Error('API configuration error');
  }

  const url = new URL('https://adm.mmonster.co/api/javes/providers');
  url.searchParams.append('orderBy', 'completedDealsCount');
  url.searchParams.append('orderDir', 'desc');
  url.searchParams.append('pageSize', '4');
  url.searchParams.append('page', '1');

  console.log('Fetching top players from:', url.toString());

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      next: {
        revalidate: 3600 // 1 час вместо 24
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch top players:', response.status, errorText);
      throw new Error(`Failed to fetch top players: ${response.status}`);
    }

    const data = await response.json();
    console.log('Top players fetched successfully:', data.data?.length || 0);
    
    return data;
  } catch (error) {
    console.error('Error in fetchTopPlayers:', error);
    throw error;
  }
}

export async function getTopPlayers(): Promise<PlayersResponse> {
  return fetchTopPlayers();
}