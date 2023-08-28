import {options, img_uri,  movie_detail} from "./URI";

export const getMoviebyID = (movieid) => {
    let uri = movie_detail.replace("{##}",movieid) 
    return fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            const movie = data
            return movie
        })
        .catch((error) => {
            console.error("Get data error:", error);
            return [];
        });
};

export default getMoviebyID;

