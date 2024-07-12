import React from "react";



const Projects = () => {
  const projectData = [
    {
      image: "blog.png",
      title: "Blog Website",
      description: "This is a blog website built with React and Node.js.",
      languages: ["React", "Node.js", "MongoDB"],
    },
    {
      image: "e-com.png",
      title: "E-commerce Website",
      description:
        "This is an E-commerce website built with Mongodb and Node.js.",
      languages: ["Node.js", "MongoDB"],
    },
    {
      image: "e-com.png",
      title: "E-commerce Website",
      description:
        "This is an E-commerce website built with Mongodb and Node.js.",
      languages: ["Node.js", "MongoDB"],
    },
    {
      image: "e-com.png",
      title: "E-commerce Website",
      description:
        "This is an E-commerce website built with Mongodb and Node.js.",
      languages: ["Node.js", "MongoDB"],
    },
    {
      image: "e-com.png",
      title: "E-commerce Website",
      description:
        "This is an E-commerce website built with Mongodb and Node.js.",
      languages: ["Node.js", "MongoDB"],
    },
    // Add more projects as needed...
  ];
  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <section key={index} className="project-section">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
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
