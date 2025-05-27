import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Example: Only protect /secret routes
  if (request.nextUrl.pathname.startsWith('/secret')) {
    const token = request.cookies.get('token')
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  // matcher controls where middleware runs
  matcher: [
    '/secret/:path*',
  ],
}
