const api_Key = '533d02fb4d8cb252d86cd6418fe51e84';

const api = {
    trending:`/trending/all/week?api_key=${api_Key}&language=en-US`,
    netflixOriginals:`/discover/tv?api_key=${api_Key}&with_networks=213`,
    topRated:`/movie/top_rated?api_key=${api_Key}&language=en-US`,
    actionMovies:`/discover/movie?api_key=${api_Key}&with_genres=28`,
    comedyMovies:`/discover/movie?api_key=${api_Key}&with_genres=35`,
    HorrorMovies:`/discover/movie?api_key=${api_Key}&with_genres=27`,
    romanceMovies:`/discover/movie?api_key=${api_Key}&with_genres=10749`,
    documentaries:`/discover/movie?api_key=${api_Key}&with_genres=99`,
}

export default api;