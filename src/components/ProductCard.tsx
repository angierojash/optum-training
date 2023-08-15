import Link from 'next/link'
import React from 'react'
import { Product } from 'src/interface/product'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product._id}`}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-50 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel=""
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      <h3 className="mt-4 text-sm"> {product.name}</h3>
      <p className="mt-1 text-lg font-medium "> {product.price}</p>
    </Link>
  )
}

export default ProductCard
