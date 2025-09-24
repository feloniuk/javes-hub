export default async function getAllPlayers(page = 1, orderBy = "lastDealDate") {
  const url = new URL('https://adm.mmonster.co/api/javes/providers?orderDir=desc&pageSize=15');

  const params = { orderBy, page };

  Object.keys(params).forEach(key => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JAVES_API_KEY}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch data');
  }

  const playersData = await response.json();

  return playersData;
}
