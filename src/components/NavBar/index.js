"use client"
import { useState } from "react";
import "./styles.scss";

export function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="menu">
      <p>Henrique.env</p>
    <div className="navbar-container">
    <div className="navbar">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#" id="home">Home</a></li>
        <li><a href="#mytech">My Tech</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </div>
    </nav>
  );
}

