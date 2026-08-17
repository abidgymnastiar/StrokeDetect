import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import { authConfig } from '@/auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = req.auth?.user?.role;

  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/user');

  if (!req.auth) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/user', req.nextUrl.origin));
  }

  if (isUserRoute && role !== 'USER') {
    return NextResponse.redirect(new URL('/admin/dashboards', req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
