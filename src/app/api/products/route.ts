import data from '@/app/api/data.json'

export async function GET() {
  return Response.json(data.products)
}
