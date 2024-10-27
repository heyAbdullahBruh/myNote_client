// middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('token');
  if (!token) {
    return NextResponse.redirect(new URL('/mrpie/auth/login', request.url));
  }
  return NextResponse.next();
}

// Protect only routes under /dashboard
export const config = {
  matcher: ['/mrpie/personalinfo/:path*'],
};
