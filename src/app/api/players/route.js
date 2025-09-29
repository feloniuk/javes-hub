import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const orderBy = searchParams.get('orderBy') || 'lastDealDate';
    
    // API ключ берется ТОЛЬКО из серверных переменных
    const apiKey = process.env.JAVES_API_KEY || process.env.NEXT_PUBLIC_JAVES_API_KEY;
    
    if (!apiKey) {
      console.error('API Key is missing!');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }
    
    const url = `https://adm.mmonster.co/api/javes/providers?orderDir=desc&pageSize=15&orderBy=${orderBy}&page=${page}`;
    
    console.log('Fetching from:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    console.log('External API Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch players', status: response.status, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Data fetched successfully, items:', data.items?.length || 0);
    
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}