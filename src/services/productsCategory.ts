import { API_BASE_URL } from "src/constants/api";


export const getProductsByCategory = async (category:string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/category/${category}`)
        const data = await response.json();
        return data.products || [];
    } catch(error) {
        throw error
    }
}
