const API_KEY = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
    if (!API_KEY) {
        throw new Error("API Key not found!");
    }
    const baseURL = 'https://api.spoonacular.com/recipes/complexSearch'
    const url = new URL(baseURL);

    const queryParams = {
        apiKey: API_KEY,
        query: searchTerm
    }
    url.search = new URLSearchParams(queryParams).toString();
    try{
        const searchResponse = await fetch(url.toString());
        const resultsJson = searchResponse.json();
        return resultsJson;
    } catch (error) {
        console.error(error);
    }
}