'use client'

import { useCart } from '@/contexts/cart-context'

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="mt-8 flex h-12 font-semibold text-white items-center justify-center rounded-full bg-emerald-600"
    >
      Adicionar ao carrinho
    </button>
  )
}
