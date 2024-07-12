import { Link } from "react-scroll";
const Header = () => {
  return (
    <>
      <header className="header">
        <section className="logo-section">
          <Link to="home" smooth={true} duration={1000}>
            <h2>My Portfolio</h2>
          </Link>
        </section>
        <section className="nav-section">
          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <Link to="home" smooth={true} duration={1000}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="project" smooth={true} duration={1000}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={1000}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
