import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/'],
};

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  const url = request.nextUrl.clone();

  if (url.pathname === '/' && isMobile) {
    url.pathname = '/portfolio';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}