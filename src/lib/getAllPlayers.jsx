export default async function getAllPlayers(page = 1, orderBy = "lastDealDate") {
  const url = new URL('/api/players', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
  
  url.searchParams.append('page', page);
  url.searchParams.append('orderBy', orderBy);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // Добавь кеш для оптимизации
    next: { revalidate: 60 } // кеш на 60 секунд
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch data');
  }

  const playersData = await response.json();
  return playersData;
}