
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Catalog from './Components/Catalog';
import RefluxNavbar from './Navbar/RefluxNavbar';
import Landing from './Components/Landing';
import MovieDetail from './Components/MovieDetail';



function App() {

  const [currUserid, setCurrUserid] = useState(0);
  const [currMovieid, setCurrMovieid] = useState(0);

  const CallbackSetUserid = function(currUserid) {
    useEffect((currUserid) => {
    setCurrUserid(currUserid)
    })
  }

  const CallbackSetMovieiid = function(currMovieid) {
    useEffect((currMovieid) => {
      setCurrMovieid(currMovieid)
    })
  }

  function Page404() {
    return <div className="page404">404: Page Not Found</div>;
  }
  return (

    <Router>
      <div>
        <div className="nav">
          <RefluxNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Landing/>} />
          {/* <Route path="/catalog/" element={<Catalog />} /> */}
          <Route path="/catalog/:userid" element={<Catalog  callbackSetUserid = {CallbackSetUserid} callbackSetMovieid = {CallbackSetMovieiid}/>} />
          <Route path="/movies/:movieid" element={<MovieDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* add routes and route here */}
      </div>
    </Router>
  );
}

export default App;
