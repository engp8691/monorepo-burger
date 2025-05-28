import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Example: Only protect /secret routes
  const token = request.cookies.get('token')
  console.log(99996, token, request.url)

  if (request.nextUrl.pathname.startsWith('/secret')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  // matcher controls where middleware runs
  matcher: [
    '/mysecret/:path*',
    '/secret/:path*',
  ],
}
