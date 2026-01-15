import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const role = req.cookies.get("role")?.value;

  // proteksi inventory
  if (pathname.startsWith("/projects/inventory/admin")) {
    if (!role) {
      // kalau belum pilih role → BALIK KE ROLE SELECTOR
      return NextResponse.redirect(
        new URL("/projects/inventory", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/inventory/:path*"],
};
