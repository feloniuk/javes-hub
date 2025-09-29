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
  const apiKey = process.env.JAVES_API_KEY;

  if (!apiKey) {
    throw new Error('JAVES_API_KEY is not defined');
  }

  const url = new URL('https://adm.mmonster.co/api/javes/providers');
  url.searchParams.append('orderBy', 'completedDealsCount');
  url.searchParams.append('orderDir', 'desc');
  url.searchParams.append('pageSize', '4');
  url.searchParams.append('page', '1');

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    next: {
      revalidate: 86400 // 24 часа
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch top players');
  }

  return await response.json();
}

export const getTopPlayers = unstable_cache(
  async () => fetchTopPlayers(),
  ['top-players'],
  {
    revalidate: 86400,
    tags: ['top-players']
  }
);