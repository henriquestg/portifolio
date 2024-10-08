import styles from "./profile.module.scss"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import photoProfile from "../../../public/profile-pic-redondo.png"


export function Profile () {
  return (
    <section id='profile' className={styles.container}>
      <div className={styles.profile}>
      <h1>Hi👋, </h1>
      <h1> My name is </h1>
      <h1> <span>Henrique Rigoni</span>  </h1>
      <h1> I'm a developer Front-End</h1>
      <div className={styles.socialMidia}>
      <a href='https://github.com/henriquestg' target="_blank"><FaGithub /></a> 
      <a href='https://www.linkedin.com/in/henrique-rigoni/' target="_blank"><FaLinkedin /></a> 
      <a href='https://www.instagram.com/henriquerigoni/' target="_blank"><FaInstagramSquare /></a>
      <a href='curriculum.pdf' download className={styles.curriculum}>download CV</a>
      </div>
      </div>
      <div className={styles.picture}>
      <Image id={styles.photo} src={photoProfile} alt="Table Imagem"  />
      </div>
      
    </section>
  );
}