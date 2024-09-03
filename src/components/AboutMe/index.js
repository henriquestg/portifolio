import Image from "next/image"
import photoAbout from "../../../public/HenriqueDev.jpeg"
import styles from "./about.module.scss"

export function AboutMe () {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.about}> 
        <h1>About Henry</h1>
        <p>My name is Henrique Rigoni, I'm in the 3rd semester of the computer science course, I'm a technology enthusiast and I always want to be up to date on everything,
          I'm also taking a React Native (ignite) course through rocketseat to improve my knowledge even further.
        </p>
        <p>    
          I have solid knowledge in <strong>Typescript and Javascript</strong> as well as frameworks such as <strong>React.js and React Native</strong> for mobile apps.
          I've already done other projects using other css libraries, such as: <strong>Styled-components, Sass and Native Base.</strong>
        </p>
        <p>  
        I am currently developing skills in technologies such as <strong>Node.js, Angular, Tailwind, MySql and Figma</strong>
        </p>
        </div>
        <div className={styles.profile}>
      <Image src={photoAbout} alt="photo Imagem"  />
      </div>
    </section>
  )
} 