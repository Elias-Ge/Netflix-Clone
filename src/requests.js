const API_KEY = "3350e1888f0eb7975575b6f291f524ee";

const requests = {
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTrendingNow: `/trending/all/day?api_key=${API_KEY}`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests