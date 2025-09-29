// src/app/api/players/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const orderBy = searchParams.get('orderBy') || 'lastDealDate';

    const apiKey = process.env.JAVES_API_KEY;

    if (!apiKey) {
      console.error('API Key is missing!');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    const url = `https://adm.mmonster.co/api/javes/providers?orderDir=desc&pageSize=15&orderBy=${orderBy}&page=${page}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      next: { revalidate: 3600 } // Кеш на 1 час
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch players', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': 'https://javes.dev',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}