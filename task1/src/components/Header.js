import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <section className="logo-section">
          <h2>My Portfolio</h2>
        </section>
        <section className="nav-section">
          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/project">Projects</a>
              </li>
              <li>
                <a href="/about">About Me</a>
              </li>
              <li>
                <a href="/contact">Contact </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
