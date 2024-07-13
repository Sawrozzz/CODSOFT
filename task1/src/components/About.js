import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hello! I'm Saroj Adhikari, a full-stack web developer. I have a passion
        for coding and love to learn new technologies.
      </p>
      <p>
        I have expertise in JavaScript, React, Next.js, Node.js, and MongoDB.
        I'm also familiar with Ruby and Ruby on Rails. I love the logic and
        structure of coding and always strive to write elegant and efficient
        code.
      </p>
      <h3>Skills</h3>
      <div className="skills">
        <button className="skill-button">JavaScript</button>
        <button className="skill-button">React</button>
        <button className="skill-button">Node.js</button>
        <button className="skill-button">MongoDB</button>
        <button className="skill-button">Ruby</button>
        <button className="skill-button">Ruby on Rails</button>
      </div>
    </div>
  );
};

export default About;
