import { GetServerSideProps } from 'next'
import ProductCard from 'src/components/ProductCard'
import { Product } from 'src/interface/product'
import { getProductsByCategory } from 'src/services/productsCategory'



type Props = {
  products: Product[]
}

export default function Category({products}: Props) {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-y-8"
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

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  try {
    const { page } = context.query
    if (!page) {
        return { props: { products: [] } };
    }
    const productsData = await getProductsByCategory(page.toString());
    console.log(`[🚀] [page].tsx → constgetServerSideProps:GetServerSideProps<Props>= -> productsData ::`, productsData);
    return { props: { products: productsData } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
};
