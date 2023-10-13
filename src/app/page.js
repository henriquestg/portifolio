import { NavBar } from '@/components/NavBar'
import { Profile } from '@/components/Profile'
import { Mytech } from '@/components/MyTech'
import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'

import { FaGithub, FaLinkedin, FaInstagramSquare, FaRegEnvelope } from "react-icons/fa";

import './page.scss'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <NavBar />
        <Profile />
        <Mytech />
        <AboutMe />
        <Projects />
        <footer>
          <div className='footer-container'>
            <p id='text-color'>Henrique.env</p>
            <div className='footer'>
              <FaRegEnvelope />
              <p>rigoni1912@gmail.com</p>
              <div className='footer-links'>
              <a href='https://github.com/henriquestg' target="_blank"><FaGithub /></a> 
              <a href='https://www.linkedin.com/in/henrique-rigoni/' target="_blank"><FaLinkedin /></a> 
              <a href='https://www.instagram.com/henriquerigoni/' target="_blank"><FaInstagramSquare /></a> 
              </div>
            </div>
          </div>
        </footer>
        <div className='affter'></div>
        </div>
      <p id='text-footer'> Created by <span> Henrique Rigoni </span></p>
    </main>
  )
}
