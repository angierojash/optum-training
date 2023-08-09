// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import products from '../../../assets/products.json'


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {category} = req.query;
  const product = products.filter(item => item.categories.includes(category))
  if (product.length === 0) {
    return res.status(404).json({message: "Product not found"})
  }
  res.status(200).json(product)
}
