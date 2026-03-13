export async function POST(request: Request) {

  const data = await request.json()

  return Response.json({
    message: "create user success",
    name: data.name,
    email: data.email
  })

}