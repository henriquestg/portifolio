"use client"
import { useState } from "react";
import { Link } from "react-scroll";
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
            <li><Link to="mytech" smooth={true} duration={500} onClick={toggleMenu}>My Tech</Link></li>
            <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="style-link">About</Link></li>
            <li><Link to="project" smooth={true} duration={500} onClick={toggleMenu} className="style-link">Project</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="style-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
