// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from 'src/interface/product'
import products from '../../../assets/products.json'


type Data = {
  product: Product[]
}

type Error = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const {category} = req.query;
  if (!category) {
    return res.status(404).json({message: "Category required"})
  }

  const product = products.filter(item => item.categories.includes(category.toString()))

  if (product.length === 0) {
    return res.status(404).json({message: "Product not found"})
  }
  res.status(200).json({product})
}
