// Opt out of caching 
export const dynamic = "force-dynamic"
//can also opt out employing dynamic functions like headers()/cookies() or methods other than GET
export async function GET(){
  //if using npm run build / npm run start it will CACHE by default, so segment section
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}