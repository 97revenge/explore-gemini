import { NextRequest, NextResponse } from "next/server"
import { approvedRoute } from "./route";



export default async function middleware(request: NextRequest) {

  const { nextUrl } = request

  const path = nextUrl.pathname

  switch (true) {
    case path.startsWith(approvedRoute[0]):

      return NextResponse.next();

    case path.startsWith(approvedRoute[1]):

      return NextResponse.next();

    default:
      return NextResponse.redirect(new URL("/", nextUrl));

  }





}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/chat/:path*',
}

