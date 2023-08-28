import {options, img_uri,  search_movie} from "./URI";

export const searchMovie = (search_word) => {
    let uri = `${search_movie}${search_word}`
    return fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            const firstTopMovies = data.results.slice(0, 20);

            return firstTopMovies.map((movie) => ({
                id: movie.id,
                title: movie.title,
                img: img_uri + movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date,
                rented: false
            }));
        })
        .catch((error) => {
            console.error("Get data error:", error);
            return [];
        });
};

export default searchMovie;

