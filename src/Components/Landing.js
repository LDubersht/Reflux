import './Landing.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import START_LIST_USERS from '.././Constants/ListUsers';


export default function Landing({callbackSetUserid}) {
  callbackSetUserid(0)
    return (
      <div>
        <h1 id="landing ">Landing</h1>
        <div className = "users">
          {START_LIST_USERS.map((user, i) => (
           <Link key={user.userid}  to = {"/catalog/" + user.userid}>
              <div key={user.userid} className = "user" style={{backgroundColor: user.color }} >
                  {/* <span key={user.userid} >  */}
                  {user.name} $: {user.budget} 
                  {/* </span> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }