const API_BASE_URL = '/api'

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`)
        const data = await response.json();
        return data;
    } catch(error) {
        throw error
    }
}
