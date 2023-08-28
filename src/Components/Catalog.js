import React from 'react'
import {useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MOVIE_COST } from '.././Constants/MainConstants';
import START_LIST_USERS from '.././Constants/ListUsers';
import UserInfo from './UserInfo'
import Movies from './Movies'
import getPopular from '.././TMDB_API/getPopular' 
import searchMovie from '.././TMDB_API/searchMovie'

export default function Catalog({callbackSetUserid}) {
  let {userid} = useParams();

  //set current user
  if (userid > 0) {
    callbackSetUserid(userid);
  }

  const [users, setUsers] = useState(START_LIST_USERS)
  const [currUser, setCurrUser] = useState({userid: 0})
  const [searchQuery, setSearchQuery] = useState("");
  const [listMovies, setListMovies] = useState([]);
 



  useEffect(() => {
    let newCurrUser = {...users.find(e => e.userid == userid)} ;
    setCurrUser(newCurrUser);
  },[])



  //get trending movie
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      getPopular()
        .then((movies) => {
          setListMovies(movies);
              })
              .catch((error) => {
                  console.error("Error get movies: ", error);
              });
            }
    else {
      searchMovie(searchQuery)
      .then((movies) => {
        setListMovies(movies);
            })
            .catch((error) => {
                console.error("Error get movies: ", error);
            });
    }
  }, [userid,searchQuery]);

  function searchHandler(event) {
    setSearchQuery(event.target.value);
  }

  const rentMovie = function (movieid) {
    if (userid > 0) {
      currUser.rented.push(movieid)
      currUser.budget -= MOVIE_COST
      let mov = listMovies.find((mov) => mov.id ===movieid);
      mov.rented = true
      setListMovies([...listMovies])
    }
  }

  const unrentMovie = function(movieid) {
    if (userid > 0) {
      const movieIndex = currUser.rented.findIndex((id) => id === movieid);
      currUser.rented.splice(movieIndex, 1);

      currUser.budget += MOVIE_COST
      let mov = listMovies.find((mov) => mov.id ===movieid);
      mov.rented = false
      setListMovies([...listMovies])
    }
  }


  return (
      <div>
          <div className="search-bar">
          <input placeholder="Search" value={searchQuery} onChange={searchHandler} />
          <UserInfo currUser={currUser} />
          </div>
            {listMovies.length !== 0 ? 
            (<Movies partHeader = {"Rented"} listMovies={listMovies.filter(mov => mov.rented !== false)} action={unrentMovie} userid={userid}/>) : (<></>)}
            {listMovies.length !== 0 ? 
            (<Movies partHeader = {"Collection"} listMovies={listMovies.filter(mov => mov.rented === false)} action={rentMovie}  userid={userid}/>) : (<></>)}
        </div>
  );
}
