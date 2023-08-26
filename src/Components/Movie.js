import React from 'react'
import {Link, useLocation} from "react-router-dom";
import './Movie.css'


export default function Movie({movie,action}) {
  const location = useLocation();

  // const localAction = function() {
  //   callbackSetMovieid(movie.id)
  // }
    return (
      <div class="one-movie" onClick={action}>
        <Link to = {`../../movies/${movie.id}`}>
         <img class="poster" src={movie.img}></img>
        </Link>
        <div>Released: {new Date(movie.release_date).getFullYear()}</div>
      </div>
    )
  }