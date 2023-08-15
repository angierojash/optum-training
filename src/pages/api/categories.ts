// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import categories from '../../assets/categories.json'
import { Category } from '../../models/Category';
import { getDataSource } from '../../database/index'


type Data = {
  categories: Category[] | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const AppDataSource = await getDataSource();
  const categories = await AppDataSource.getRepository(Category).find()
  res.status(200).json({categories})
}
