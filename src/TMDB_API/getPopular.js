import {options, img_uri,  popular_movie} from "./URI";

const getPopular = () => {
    return fetch(popular_movie, options)
        .then((response) => response.json())
        .then((data) => {
            const firstTopMovies = data.results.slice(0, 12);

            return firstTopMovies.map((movie) => ({
                id: movie.id,
                title: movie.title,
                img: img_uri + movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date
            }));
        })
        .catch((error) => {
            console.error("Get data error:", error);
            return [];
        });
};

export default getPopular;

