function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of your project and what it does.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another project description showcasing your skills.",
      technologies: ["Python", "Flask", "SQL"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Describe your third project here.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;