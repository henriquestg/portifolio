import './styles.scss'
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import photoProfile from "../../../public/profile-pic-redondo.png"


export function Profile () {
  return (
    <section id='profile' className="profile-container">
      <div className="profile">
      <h1>Hi👋, </h1>
      <h1> My name is </h1>
      <h1 id='text-color'> Henrique Rigoni </h1>
      <h1> I build things for web</h1>
      <a href='https://github.com/henriquestg' target="_blank"><FaGithub /></a> 
      <a href='https://www.linkedin.com/in/henrique-rigoni/' target="_blank"><FaLinkedin /></a> 
      <a href='https://www.instagram.com/henriquerigoni/' target="_blank"><FaInstagramSquare /></a> 
      </div>
      <div className="pic-profile">
      <Image id='photo' src={photoProfile} alt="Table Imagem"  />
      </div>
    </section>
  );
}