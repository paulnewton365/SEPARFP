import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE = 'sepa-preview-auth';
const AUTH_VALUE = 'antennagroup-verified';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths: login page, auth API, static assets
  if (
    pathname === '/login' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(AUTH_COOKIE);
  if (cookie?.value === AUTH_VALUE) {
    return NextResponse.next();
  }

  // Not authed: redirect to login, preserving the path they were trying to hit
  const loginUrl = new URL('/login', request.url);
  if (pathname !== '/') {
    loginUrl.searchParams.set('from', pathname);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Run on everything except obvious static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
