import "./Movies.css";
import Movie from "./Movie";

function Movies({partHeader,listMovies, action,userid}) {
    return (
        <div className = "movies">
            <h4 className = "part-header">{partHeader}</h4>
            <div className = "movies-container">
                {listMovies.map((movie) => (
                    <Movie movie = {movie} action = {action} userid={userid} />
                ))}
            </div>
        </div>
    );
}

export default Movies;