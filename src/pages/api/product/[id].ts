// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from 'src/interface/product';
import products from '../../../assets/products.json'
import { Product as ProductModel} from 'src/models/Product';
import { getDataSource } from 'src/database/index'
import { ObjectId } from 'mongodb';


type Data = {
  product: ProductModel
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const {id} = req.query;
  const AppDataSource = await getDataSource();
  const product = await AppDataSource.getRepository(ProductModel).findOneBy({
    _id: new ObjectId(id?.toString())
  })
  // const product = products.filter(item => item._id === id)
  if (!product) {
    return res.status(404).json({message: "Product not found"})
  }
  res.status(200).json({product})
}
