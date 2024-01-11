import provinces from "@/data/tinh_tp.json";
export function GET() {
  const data = Object.values(provinces).sort((a, b) => {
    return a.code - b.code;
  });
  return Response.json(data);
}
