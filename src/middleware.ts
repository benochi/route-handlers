//set up middleware in src dir
import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url))
}

//this will match and redirect using matcher approach. 
// export const config = {
//   matcher: "/profile",
// }