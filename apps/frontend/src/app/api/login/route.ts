import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === 'admin' && password === 'secret') {
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'token',
      value: 'your-jwt-or-session-token',
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
