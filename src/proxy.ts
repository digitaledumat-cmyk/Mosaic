import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Specific paths to match exactly
const SPECIFIC_OLD_PATHS = [
  "/team",
  "/contact-3",
  "/2016/01",
  "/property-type/anonnce-villa-maroc",
  "/complete-order",
];

// 2. Structural URL patterns to catch everything under these sections
const OLD_PREFIXES = [
  "/author/",
  "/category/",
  "/tag/",
  "/city/",
  "/feature/",
  "/status/",
];

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === "www.mozaic.ma") {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://mozaic.ma");
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;

  // Legacy /fr locale URLs → clean URLs
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const path = pathname.replace(/^\/fr/, "") || "/";
    return NextResponse.redirect(new URL(path, request.url), 308);
  }

  // Check for exact path matches
  const isSpecificOldPath = SPECIFIC_OLD_PATHS.includes(pathname);

  // Check for structural prefix matches
  const hasOldPrefix = OLD_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isSpecificOldPath || hasOldPrefix) {
    return new NextResponse(
      JSON.stringify({
        status: 410,
        message: "Gone. This page is permanently removed.",
      }),
      {
        status: 410,
        headers: { "content-type": "application/json" },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except internal Next.js assets, images, and static files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
