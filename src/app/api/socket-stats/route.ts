import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const socketUrl = process.env.SOCKET_URL || 'https://adm.mmonster.co';
    
    // Здесь вы можете получать данные из сокета на сервере
    // или использовать REST API вместо сокетов
    
    const response = await fetch(`${socketUrl}/api/stats`, {
      headers: {
        'Authorization': `Bearer ${process.env.JAVES_API_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch socket stats' },
      { status: 500 }
    );
  }
}