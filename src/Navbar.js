import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <span id="brand">
        <Link to="/">clemritz</Link>
      </span>

      <ul id="menu" className={isNavOpen ? 'active' : ''}>
        <li onClick={toggleNav}><Link to="/">home<span>.</span></Link></li>
        <li onClick={toggleNav}><Link to="/work">work<span>.</span></Link></li>
        <li onClick={toggleNav}><Link to="/about">about me<span>.</span></Link></li>
      </ul>

      <div id="toggle" onClick={toggleNav}>
        <div className={`span ${isNavOpen ? 'on' : ''}`}>menu</div>
      </div>
    </nav>
  );
}

export default Navbar;
