import { API_BASE_URL } from "src/constants/api";


export const getCategories = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`)
        const data = await response.json();
        console.log(`[🚀] categoryService.ts → getCategories -> data ::`, data);
        return data.categories;
    } catch(error) {
        throw error
    }
}
