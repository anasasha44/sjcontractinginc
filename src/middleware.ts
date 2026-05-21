import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Redirect non-www to www
  if (host === "aquavior.com") {
    url.host = "www.aquavior.com";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}