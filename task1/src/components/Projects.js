import React from "react";



const Projects = () => {
  const projectData = [
    {
      image: "blog.png",
      title: "Blog Website",
      description: "This is a blog website built with React and Node.js.",
      languages: ["React", "Node.js", "MongoDB"],
      githubRepo: "https://github.com/Sawrozzz/Blog",
    },
    {
      image: "e-com.png",
      title: "E-commerce Website",
      description:
        "This is an E-commerce website built with Mongodb and Node.js.",
      languages: ["Node.js", "MongoDB"],
      githubRepo: "https://github.com/Sawrozzz/Ecommerce_NODE",
    },
    {
      image: "tictactoe.png",

      title: "Tic Tac Toe Game",
      description: "This is a tic tac toe game that is build using react js.",
      languages: ["React.js", "CSS"],
      githubRepo: "https://github.com/Sawrozzz/TicTacToe_React",
    },
    {
      image: "ui.png",
      title: "UI Design",
      description: "A simple UI design created using HTML and CSS.",
      languages: ["Html", "css"],
      githubRepo: "https://github.com/Sawrozzz/Login-Interface",
    },
  ];
  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <section key={index} className="project-section">
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </a>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="project-languages">
            {project.languages.map((language, i) => (
              <button key={i} className="language-button">
                {language}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
