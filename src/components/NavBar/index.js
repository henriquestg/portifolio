import { FaBars } from "react-icons/fa";
import './styles.scss'

export function NavBar () { 
	return (
		<nav className='nav-container'>
			<p>
				 Henrique.env
			</p>
			 <div className="nav-list">
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Tech Stack</a>
					</li>
					<li>
						<a href='#'>Projects</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
		
	)
}