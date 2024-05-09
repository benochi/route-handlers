export async function GET(){
  //if using npm run build / npm run start it will CACHE by default, so segment section
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}