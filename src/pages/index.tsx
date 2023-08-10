import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';
import {useEffect, useState} from 'react'
import { getAllProducts } from 'src/services/productsServices'
import { Product } from 'src/interface/product'
import ProductCard from 'src/components/ProductCard'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  products: Product[]
}

export default function Home({products}: Props) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-8"
    >
      <h1 className="text-4xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const productsData = await getAllProducts();
    return { props: { products: productsData } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
};






