import { ObjectId } from "typeorm";

export interface Product {
    _id: ObjectId,
    id: string,
    name: string,
    price: number,
    stock: number,
    description: string,
    categories: Array<String>,
    available: boolean
}
