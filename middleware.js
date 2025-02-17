import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/assets/')) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/assets/:path*',
}; 