export const options = {method: 'GET', headers: {accept: 'application/json'}};
const api_key_part = "api_key=a5dac2f7003b89724ad346eb31651e4d"
const lang = "language=en-US"
export const movie_detail = `https://api.themoviedb.org/3/movie/{##}?${lang}&${api_key_part}`;
export const img_uri = `https://image.tmdb.org/t/p/w500`;
export const popular_movie = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&${api_key_part}`;

