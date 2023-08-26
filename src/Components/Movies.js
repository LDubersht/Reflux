import "./Movies.css";
import Movie from "./Movie";

function Movies({partHeader,listMovies, action, rented,}) {
console.log('movies'+ listMovies)

    return (
        <div className = "movies">
            <h4 className = "part-header">{partHeader}</h4>
            <div className = "movies-container">
                {listMovies.map((movie) => (
                    <Movie movie = {movie} action = {action}  />
                ))}
            </div>
        </div>
    );
}

export default Movies;