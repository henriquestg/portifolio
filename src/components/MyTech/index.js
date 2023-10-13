import "./styles.scss"
import { FaReact, FaJsSquare, FaNode, FaSass, FaFigma, FaAngular, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiStyledcomponents, SiTailwindcss} from "react-icons/si";

export function Mytech () {
  return (
      <section id="mytech" className="tech-container">
        <h1>My tech Stack</h1>
        <p>Technologies I’ve been working with recently</p>
        <div className="my-tech">
        <p>Technologies developed</p>
        <div className="container-skill">
        <a  title="react"><FaReact /></a>
        <a  title="JavaScript"><FaJsSquare /></a>
        <a  title="TypeScript"><BiLogoTypescript /></a>
        <a  title="Sass"><FaSass /></a>
        <a  title="CSS"><FaCss3Alt /></a>
        <a  title="styled-components"><SiStyledcomponents /></a>
        <a  title="React-Native"><FaReact /></a>
        <a  title="Git"><FaGitAlt /></a>
        </div>
        <p>Technologies in development</p>
        <div className="container-skill">
        <a  title="Node"><FaNode /></a>
        <a  title="Angular"><FaAngular /></a>
        <a  title="Tailwind"><SiTailwindcss /></a>
        <a  title="Mysql"><SiMysql /></a>
        <a  title="Figma"><FaFigma /></a>
        </div>
        </div>
      </section>
  )
}