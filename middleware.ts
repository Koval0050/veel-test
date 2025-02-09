import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const url = new URL(request.url);

  if (token) {
    if (url.pathname === "/login" || url.pathname === "/register") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (url.pathname !== "/login" && url.pathname !== "/register") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/"],
};
