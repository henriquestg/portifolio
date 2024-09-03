"use client"
import styles from "./navBar.module.scss";
import { useState } from "react";
import { Link } from "react-scroll";

export function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.menu}>
      <p>Henrique.env</p>
      <div>
        <div className={styles.navbar}>
          <div className={`${styles.icon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <ul className={`${styles.list} ${menuOpen ? styles.open : ''}`}>
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
