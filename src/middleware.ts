//set up middleware in src dir
import { NextResponse, type NextRequest } from "next/server"
import { headers, cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const userTheme = request.cookies.get("theme")
  if(!userTheme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("customer-header", "custom Value")

  return response;
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.url)) //rewrite redirects without changing url. 
  // }
  // return NextResponse.redirect(new URL("/", request.url))
}


//this will match and redirect using matcher approach. 
// export const config = {
//   matcher: "/profile",
// }