
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Catalog from './Components/Catalog';
import RefluxNavbar from './Navbar/RefluxNavbar';
import Landing from './Components/Landing';
import MovieDetail from './Components/MovieDetail';



function App() {

  const [currUserid, setCurrUserid] = useState(0);

  useEffect(() => {
    setCurrUserid(0)
  },[])
  
  const CallbackSetUserid = function(currUserid) {

    useEffect((currUserid) => {
          if (currUserid === undefined) {
            setCurrUserid(0)
          }
          else {
            setCurrUserid(currUserid)
          }
    })
  }


  function Page404() {
    return <div className="page404">404: Page Not Found</div>;
  }
  return (

    <Router>
      <div>
        <div className="nav">
          <RefluxNavbar currUserid={currUserid}/>
        </div>
        <Routes>
          <Route path="/" element={<Landing   callbackSetUserid = {CallbackSetUserid}  />} />
          <Route path="/catalog/" element={<Catalog callbackSetUserid = {CallbackSetUserid}/>} />
          <Route path="/catalog/:userid" element={<Catalog  callbackSetUserid = {CallbackSetUserid} />} />
          <Route path="/movies/:movieid" element={<MovieDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* add routes and route here */}
      </div>
    </Router>
  );
}

export default App;
