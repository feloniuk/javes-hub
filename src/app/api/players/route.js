import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const orderBy = searchParams.get('orderBy') || 'lastDealDate';

  const url = new URL('https://adm.mmonster.co/api/javes/providers');
  url.searchParams.append('orderDir', 'desc');
  url.searchParams.append('pageSize', '15');
  url.searchParams.append('orderBy', orderBy);
  url.searchParams.append('page', page);

  try {
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
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch data' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}