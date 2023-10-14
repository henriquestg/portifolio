import Document from "next/document";
import "./styles.scss";

export function NavBar() {
  let show = true;

  const menuSection = Document.querySelector(".menu-section");
  const menuToggle = menuSection.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", () => {
    Document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show);
    show = !show;
  });

  return (
    <nav className="menu">
      <p>Henrique.env</p>

      <div className="menu-section">
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>

        <div className="nav-list">
          <ul>
            <li>
              <a href="#" id="home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#mytech">Tech Stack</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <script src="menu.js"></script>
    </nav>
  );
}
