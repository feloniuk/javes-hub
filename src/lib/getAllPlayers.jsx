export default async function getAllPlayers(page = 1, orderBy = "lastDealDate") {
  const url = new URL('/api/players', window.location.origin);
  url.searchParams.append('page', page);
  url.searchParams.append('orderBy', orderBy);

  const response = await fetch(url.toString());

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch data');
  }

  return await response.json();
}