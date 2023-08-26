//import React from 'react'
import {useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MOVIE_COST } from '.././Constants/MainConstants';
import START_LIST_USERS from '.././Constants/ListUsers';
import UserInfo from './UserInfo'
import Movies from './Movies'
import getPopular from '.././TMDB_API/getPopular' 

export default function Catalog({callbackSetUserid}) {
  let {userid} = useParams();

  const [users, setUsers] = useState(START_LIST_USERS)
  const [currUser, setCurrUser] = useState({userid: 0})

  const [listMovies, setListMovies] = useState([]);
  const [rentedMovies, setRentedMovies] = useState([]);

  //set corrent user
  const localSetCurrUser = function() {
    if (userid > 0) {
      callbackSetUserid(userid);
    }
  }

  localSetCurrUser()

  useEffect(() => {
    let newCurrUser = {...users.find(e => e.userid == userid)} ;
    setCurrUser(newCurrUser);
  },[])

  //get trending movie
  useEffect(() => {
      getPopular()
        .then((movies) => {

          setListMovies(movies);
              })
              .catch((error) => {
                  console.error("Error get movies: ", error);
              });
  }, [userid]);

  const getMovieById = function(movieid) {
    return(
        listMovies.find((movie) => {movie.movieid = movieid })
    )
  } 

  const logCurrUser = function() {
    console.log(currUser);
  }

  const rentMovie = function (movieid) {
      logCurrUser()
  //   if (currUser !== null) {
  //     let newCurrUser = {...currUser}
  //     newCurrUser.rented.push(movieid)
  //     newCurrUser.budget = - MOVIE_COST
  //     setCurrUser(newCurrUser)
  //   }
  }

  const unrentMovie = function(movieid) {
      logCurrUser()
  //   if (currUser !== null) {
  //     let newCurrUser = {...currUser}
  //     newCurrUser.rented.push(movieid)
  //     newCurrUser.budget =- MOVIE_COST 
  //     setCurrUser(newCurrUser)
  //   }
  }


  return (
      <div>
          <div className="search-bar">
            {/* <Search searchSubmit={searchSubmit} /> */}
            <UserInfo currUser={currUser} />
          </div>
            {listMovies.length !== 0 ? 
            (<Movies partHeader = {"Rented"} listMovies={rentedMovies} action={unrentMovie} />) : (<></>)}
            {listMovies.length !== 0 ? 
            (<Movies partHeader = {"Collection"} listMovies={listMovies} action={rentMovie} rentedMovies={rentedMovies}  />) : (<></>)}
        </div>
  );
}
