import { API_BASE_URL } from "src/constants/api";


export const getProduct = async (id:string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/product/${id}`)
        const data = await response.json();
        return data.product;
    } catch(error) {
        throw error
    }
}
