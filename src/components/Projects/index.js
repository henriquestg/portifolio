import Image from "next/image"
import { FaLink, FaGithub} from "react-icons/fa";
import Ecommerce from "../../../public/site-ecommerce.png"
import todoList from "../../../public/site-todo-list.png"
import siteRelogio from "../../../public/site-relogio.png"
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
        <p>Tech stack: Next.js, React, Sass, JavaScript</p>
        <div className="teck-links"> 
        <div className="link"> 
        <FaLink />
          <a href="https://my-ecommerce-navy.vercel.app/" target="_blank">Live preview</a>
        </div>
        <div className="link"> 
        <FaGithub />
        <a href="https://github.com/henriquestg/my-ecommerce" target="_blank">View code</a>
        </div>
        </div>
    </div>
    </div>

    <div className="projects-preview">
        <Image id="project-photo" src={todoList} alt="foto projeto" />
        <div className="projects">
        <h2>Todo List</h2>
        <p>Um site criado para ser usado no meu dia a dia no trabalho para eventuais tarefas</p>
        <p>Tech stack: html, css, JavaScript</p>
        <div className="teck-links"> 
        <div className="link"> 
        <FaLink />
          <a href="https://todo-list-wine-eight-62.vercel.app/" target="_blank">Live preview</a>
        </div>
        <div className="link"> 
        <FaGithub />
        <a href="https://github.com/henriquestg/todo-list" target="_blank">View code</a>
        </div>
        </div>
    </div>
    </div>

    <div className="projects-preview">
        <Image id="project-photo" src={siteRelogio} alt="foto projeto" />
        <div className="projects">
        <h2>Todo List</h2>
        <p>Site das horas do dia</p>
        <p>Tech stack: html, css, JavaScript</p>
        <div className="teck-links"> 
        <div className="link"> 
        <FaLink />
          <a href="https://relogio-murex.vercel.app/" target="_blank">Live preview</a>
        </div>
        <div className="link"> 
        <FaGithub />
        <a href="https://github.com/henriquestg/relogio" target="_blank">View code</a>
        </div>
        </div>
    </div>
    </div>

    </div>
    </section>
  )
}