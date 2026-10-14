import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/session";
export async function middleware(request: NextRequest) {
  const authenticated = await verifySession(
    request.cookies.get(SESSION_COOKIE)?.value,
  );
  if (request.nextUrl.pathname.startsWith("/dashboard") && !authenticated) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  if (request.nextUrl.pathname === "/login" && authenticated)
    return NextResponse.redirect(new URL("/dashboard", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*", "/login"] };
