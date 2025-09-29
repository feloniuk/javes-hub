import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const orderBy = searchParams.get('orderBy') || 'lastDealDate';
    
    const url = `https://adm.mmonster.co/api/javes/providers?orderDir=desc&pageSize=15&orderBy=${orderBy}&page=${page}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JAVES_API_KEY}`
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch players' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}