import { API_BASE_URL } from "src/constants/api";


export const getAllProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`)
        const data = await response.json();
        return data.products;
    } catch(error) {
        throw error
    }
}
