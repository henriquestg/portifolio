"use client"
import { NavBar } from '@/components/NavBar'
import { Profile } from '@/components/Profile'
import { Mytech } from '@/components/MyTech'
import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'


import { FaGithub, FaLinkedin, FaInstagramSquare, FaRegEnvelope, FaAngleUp } from "react-icons/fa";

import './page.scss'
import { Link } from 'react-scroll'

export default function Home() {
  
  return (
    <main id='home'>
      <div className="full-container">
      <div className='container'>
        <NavBar />
        <Profile />
        <Mytech />
        <AboutMe />
        <Projects />
        <footer>
          <section id='contact' className='footer-container'>
            <div className='text-color'>
            <p id='text-color'>Henrique.env</p>
            </div>
            <div className='footer'>
              <FaRegEnvelope />
              <p>rigoni1912@gmail.com</p>
              <div className='footer-links'>
              <a href='https://github.com/henriquestg' target="_blank"><FaGithub /></a> 
              <a href='https://www.linkedin.com/in/henrique-rigoni/' target="_blank"><FaLinkedin /></a> 
              <a href='https://www.instagram.com/henriquerigoni/' target="_blank"><FaInstagramSquare /></a> 
              </div>
            </div>
          </section>
        </footer>
        <div className='affter'></div>
        </div>
      <p id='text-footer'> Copyright (c) 2023 created by <span> Henrique Rigoni </span></p>
      </div>

      <section className='btn-scroll'>
      <Link to='home' smooth={true} duration={500} className='home-scroll'><FaAngleUp /></Link>
      </section>
    </main>
  )
}
