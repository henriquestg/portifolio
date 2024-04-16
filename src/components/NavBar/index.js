"use client"
import { useState } from "react";
import "./styles.scss";

export function NavBar() {

 const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };;

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
        <li><a href="#mytech" onClick={handleSmoothScroll}>My Tech</a></li>
        <li><a href="#about"onClick={handleSmoothScroll}>About</a></li>
        <li><a href="#project" onClick={handleSmoothScroll}>Project</a></li>
        <li><a href="#contact"onClick={handleSmoothScroll}>Contact</a></li>
      </ul>
    </div>
    </div>
    </nav>
  );
}

