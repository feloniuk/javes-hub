export default async function getAllPlayers(page = 1, orderBy = "lastDealDate") {
  const url = new URL('/api/players', window.location.origin);
  
  url.searchParams.append('page', page.toString());
  url.searchParams.append('orderBy', orderBy);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to fetch data: ${response.status}`);
  }

  return await response.json();
}