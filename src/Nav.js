import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Nav() {
  
  const navStyle = {
    color: 'white'
  };
  
  return(
    <nav>
      <h3>The simplest multi page React App!</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Nav;
