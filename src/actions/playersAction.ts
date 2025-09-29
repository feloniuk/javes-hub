'use server';

import { unstable_cache } from 'next/cache';

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
  const url = new URL('https://adm.mmonster.co/api/javes/providers?orderDir=desc&pageSize=4');
  
  const params = { 
    orderBy: 'completedDealsCount', 
    page: 1 
  };

  Object.keys(params).forEach(key => {
    url.searchParams.append(key, String(params[key as keyof typeof params]));
  });

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JAVES_API_KEY}`
    },
    next: {
      revalidate: 86400
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch top players');
  }

  return await response.json();
}

// Кэшируем результат на 24 часа
export const getTopPlayers = unstable_cache(
  async () => fetchTopPlayers(),
  ['top-players'],
  {
    revalidate: 86400,
    tags: ['top-players'] // тег для ручной инвалидации кэша при необходимости
  }
);