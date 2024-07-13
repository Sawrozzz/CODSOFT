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
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={25} />
        </a>
        <a
          className="social-icon"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} />
        </a>
        <a
          className="social-icon"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} />
        </a>{" "}
        <a
          className="social-icon"
          href="https://www.instagram.com"
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