import './styles.scss'

export function NavBar () {
	
	return (
		<nav className='menu'>
			<p>
				 Henrique.env
			</p>
			 <div className="nav-list">
				<ul>
					<li>
						<a href='#' id='home' >Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#mytech'>Tech Stack</a>
					</li>
					<li>
						<a href='#project'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
		
	)
}