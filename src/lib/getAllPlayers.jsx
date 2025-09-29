// src/lib/getAllPlayers.jsx
export default async function getAllPlayers(page = 1, orderBy = "lastDealDate") {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = new URL('/api/players', baseUrl);

  url.searchParams.append('page', page);
  url.searchParams.append('orderBy', orderBy);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    cache: 'no-store' // временно отключи кеш для теста
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to fetch data: ${response.status}`);
  }

  const playersData = await response.json();
  return playersData;
}