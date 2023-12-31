import React from 'react'
import {Link, useLocation} from "react-router-dom";
import './Movie.css'


export default function Movie({movie,action,userid}) {
  const location = useLocation();

    return (
      <div className ="one-movie" >
        <div>
          {movie.rented ? (
              userid !== undefined ?
                (<button onClick = {() => action(movie.id)} className = "action">
                unrent
                </button>) : (<></>)
            ) : (
              userid !== undefined ?
              (<button onClick = {() => action(movie.id)} className = "action">
                rent
                </button>) : (<></>)
            )}
            </div>
        <Link to = {`../../movies/${movie.id}`}>
         <img className="poster" src={movie.img}></img>
        </Link>

        <div>Released: {new Date(movie.release_date).getFullYear()}</div>
      </div>
    )
  }