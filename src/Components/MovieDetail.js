import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect, useState } from "react";
import './Movie.css'
import getMoviebyID from '.././TMDB_API/getMoviebyID'
import {options, img_uri,  popular_movie} from ".././TMDB_API/URI";


export default function Movie() {
  let {movieid} = useParams();
  const [movie,setMovie] = useState({})

  useEffect(() => {
    getMoviebyID(movieid)
      .then((mov) => {
        setMovie(mov)

            })
            .catch((error) => {
                console.error("Error get movies: ", error);
            });
}, []);

    return (
      <div class="movie-detail">
        <h2> {movie.title}</h2>
        <img class="big-poster" src={img_uri + movie.poster_path}></img>
        <div>Released: {movie.release_date}</div>
        <div>Overview: {movie.overview}</div>
      </div>
    )
  }