import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Saroj Adhikari, a full-stack web developer. I have a
          passion for coding and love to learn new technologies.
        </p>
        <p>
          I have expertise in JavaScript, React, Next.js, Node.js, and MongoDB.
          I'm also familiar with Ruby and Ruby on Rails. I love the logic and
          structure of coding and always strive to write elegant and efficient
          code.
        </p>
        <button className="btn">Download Resume</button>
      </div>
      <div className="skill">
        <h1>Skill</h1>
        <li>
          <h3>React Js</h3>
          <span className="bar">
            <span className="react"></span>
          </span>
        </li>
        <li>
          <h3>Next Js</h3>
          <span className="bar">
            <span className="next"></span>
          </span>
        </li>
        <li>
          <h3>Node Js</h3>
          <span className="bar">
            <span className="node"></span>
          </span>
        </li>
        <li>
          <h3>MongoDB</h3>
          <span className="bar">
            <span className="mongodb"></span>
          </span>
        </li>
      </div>
    </>
  );
};

export default About;
