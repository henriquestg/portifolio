"use client"
import styles from'./page.module.scss'
import { NavBar } from '@/components/NavBar'
import { Profile } from '@/components/Profile'
import { Mytech } from '@/components/MyTech'
import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'

import { FaGithub, FaLinkedin, FaInstagramSquare, FaRegEnvelope, FaAngleUp } from "react-icons/fa";

import { Link } from 'react-scroll'

export default function Home() {
  
  return (
    <main id='home' className={styles.home}>
      <div className={styles.container}>
      <div className={styles.page}>
        <NavBar />
        <Profile />
        <Mytech />
        <AboutMe />
        <Projects />
        <footer>
          <footer>
            <div>
            <p className={styles.logoFooter}>Henrique.env</p>
            </div>
            <div className={styles.footerLinks}>
              <FaRegEnvelope />
              <p>rigoni1912@gmail.com</p>
              <div className={styles.footerLinks}>
              <a href='https://github.com/henriquestg' target="_blank"><FaGithub /></a> 
              <a href='https://www.linkedin.com/in/henrique-rigoni/' target="_blank"><FaLinkedin /></a> 
              <a href='https://www.instagram.com/henriquerigoni/' target="_blank"><FaInstagramSquare /></a> 
              </div>
            </div>
          </footer>
        </footer>
        <div className={styles.affter}>
        <p className={styles.textFooter}> Copyright (c) 2023 created by <span> Henrique Rigoni </span></p>
        </div>
        </div>
        </div>
      

      <section id='contact' className={styles.btnScroll}>
      <Link to='home' smooth={true} duration={500} className={styles.homeScroll}><FaAngleUp /></Link>
      </section>
    </main>
  )
}
