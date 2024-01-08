//HTTP METHOD
/*
GET
POST
PUT
PATCH
DELETE
*/
export function GET(request) {
  const apiKey = request.headers.get("x-api-key");
  console.log(apiKey);
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
  ];
  return Response.json(users);
}
//Endpoint: GET /api/users

export async function POST(request) {
  const body = await request.json();
  return Response.json(
    { body },
    {
      status: 401,
    },
  );
}
//Endpoint: POST /api/users
