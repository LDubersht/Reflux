import React from 'react'
import { useParams } from 'react-router-dom';
import './Movie.css'

export default function Movie() {
  let {movieid} = useParams();
    return (
      <div class="movie-detail">
        <h2> {movie.title}</h2>
        <img class="big-poster" src={movie.img}></img>
        <div>Released: {movie.release_date}</div>
        <div>Overview: {movie.overview}</div>
      </div>
    )
  }