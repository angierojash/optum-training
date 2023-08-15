// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { Product } from 'src/interface/product'
// import products from '../../assets/products.json'
import { Product as ProductModel} from '../../models/Product';
import { getDataSource } from '../../database/index'


type Data = {
  products: ProductModel[] | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const AppDataSource = await getDataSource();
  const products = await AppDataSource.getRepository(ProductModel).find()
  res.status(200).json({products})
}
