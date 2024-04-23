import Image from "next/image"
import { FaLink, FaGithub} from "react-icons/fa";
import Ecommerce from "../../../public/site-ecommerce.png"
import "./styles.scss"


export function Projects () {
  return (
    <section id="project" className="project-container">
      <div className="title">
        <h1>Projects</h1>
        <p>Things I’ve built so far</p>
      </div>

        <div className="projects-container">
        <div className="projects-preview">
        <Image id="project-photo" src={Ecommerce} alt="foto projeto" />
        <div className="projects">
        <h2>My ecommerce</h2>
        <p>Um site criado para ter conceito ecommerce para venda de móveis</p>
        <p>Tech stack: Next.js React, Sass, JavaScript</p>
        <div className="teck-links"> 
        <div className="link"> 
        <FaLink />
          <a href="https://my-ecommerce-navy.vercel.app/" target="_blank">Live preview</a>
        </div>
        <div className="link"> 
        <FaGithub />
        <a href="https://github.com/henriquestg/my-ecommerce/tree/master" target="_blank">View code</a>
        </div>
        </div>
    </div>
    </div>
    
    </div>
    </section>
  )
}