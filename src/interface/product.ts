export interface Product {
    id: string,
    name: string,
    price: number,
    stock: number,
    description: string,
    categories: Array<String>,
    available: boolean
}
