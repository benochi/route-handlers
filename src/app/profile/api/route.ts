import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
   // console.log(requestHeaders.get("Authorization"))
  const headersList = headers()
  console.log(headersList.get("Authorization"))

  // const theme = request.cookies.get("theme")
  // console.log(theme)

  cookies().set("ResultsPerPage", "20")
  console.log(cookies().get("ResultsPerPage"))
  console.log(cookies().has("ResultsPerPage"))

  return new Response("<h1>Profile API DATA</h1>",{ 
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  });
}

