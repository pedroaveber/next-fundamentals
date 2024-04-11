import { z } from 'zod'
import data from '@/app/api/data.json'

interface RouteParams {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: RouteParams) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}
