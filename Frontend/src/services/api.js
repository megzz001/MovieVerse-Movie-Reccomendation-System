const API_KEY = "682505b64dmsh4caf60b2078a14dp18b8b2jsnb771e37544a6"
const Base_URL = "https://rapidapi.com/hub"

export const getPopularMovies = async() =>{
    const response = await fetch(`${Base_URL}/movie/popular?api_key${API_KEY}`);
    const data = response.json()
    return data.results
};
export const searchMovies = async(query) =>{
    const response = await fetch(`${Base_URL}/search/movie?api_key${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = response.json()
    return data.results
};

