import districts from "@/data/quan_huyen.json";
export function GET() {
  const data = Object.values(districts).sort((a, b) => {
    return a.code - b.code;
  });
  return Response.json(data);
}
