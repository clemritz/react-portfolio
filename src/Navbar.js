import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
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

      <div id="resize" className={isNavOpen ? 'active' : ''}>
        <div className="close-btn" onClick={closeNav}>close</div>

        <ul id="menu">
          <li onClick={handleLinkClick}><Link to="/">home<span>.</span></Link></li>
          <li onClick={handleLinkClick}><Link to="/work">work<span>.</span></Link></li>
          <li onClick={handleLinkClick}><Link to="/about">about me<span>.</span></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
