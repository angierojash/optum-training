// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDataSource } from 'src/database'
import { Product as ProductModel} from 'src/models/Product';
import { ArrayContains } from 'typeorm';


type Data = {
  products: ProductModel[]
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const {category} = req.query;
  if (!category) {
    return res.status(404).json({message: "Category required"})
  }

  // const product = products.filter(item => item.categories.includes(category.toString()))

  const AppDataSource = await getDataSource();
  const products = await AppDataSource.getRepository(ProductModel).find({
    where: {
      categories: category.toString()
    }
  })

  if (products.length === 0) {
    return res.status(404).json({message: "Product not found"})
  }
  res.status(200).json({products})
}
