import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware triggered for:', request.nextUrl.pathname)

  const publicPaths = ['/', '/login', '/about', '/favicon.ico']

  const isPublicPath = publicPaths.includes(request.nextUrl.pathname)
  const isApiPath = request.nextUrl.pathname.startsWith('/api')

  if (isPublicPath || isApiPath) {
    return NextResponse.next()
  }

  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
