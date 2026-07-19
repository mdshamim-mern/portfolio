import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get('admin_token')?.value || '';

  if (path.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (path === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login'
  ],
};