import React from 'react'
import {  FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="main-footer">
        <p className="footer-rights">
          {" "}
          © 2024 Saroj Adhikari. All rights reserved.
        </p>
        <a
          className="social-icon"
          href="https://x.com/IamSaroj123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={25} />
        </a>
        <a
          className="social-icon"
          href="https://www.instagram.com/saw_rose001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} />
        </a>
        <a
          className="social-icon"
          href="https://github.com/Sawrozzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} />
        </a>{" "}
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/saroj-adhikari-512235239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
      </footer>
    </React.Fragment>
  );
}

export default Footer