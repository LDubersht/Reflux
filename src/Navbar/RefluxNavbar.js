import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './RefluxNavbar.css';

const RefluxNavbar = ({currUserid}) => {
  return (
    <nav className="navbar">
        <Link to="/">Landing</Link>
        <Link to= {`/catalog/${currUserid}`}>Catalog</Link>
    </nav>
  );
}


export default RefluxNavbar;
