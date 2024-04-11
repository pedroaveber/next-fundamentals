import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import { zinc } from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'About Acme'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })
  const product = await response.json()
  return product
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function OgImage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)
  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* eslint-disable-next-line */}
        <img
          src={productImageURL}
          alt=""
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
