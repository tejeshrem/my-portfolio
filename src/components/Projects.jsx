function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mind Valet",
      description: "Built Mind Valet, a Meditaiton AI mobile app using React Native to deliver a performant, cross-platform iOS and Android experience with modular components and efficient state management. ",
      technologies: ["ReactNative", "TypeScript", "JavaScript", "React Navigation", "Firebase"]
    },
    {
      id: 2,
      title: "Server Log Analysis API",
      description: "Built a Python backend using FastAPI to support a secure log analysis service. The API includes JWT-based authentication with bcrypt password hashing and automatic OpenAPI documentation for easy testing and iteration. The project is designed incrementally, starting with core service reliability and security before adding persistent storage and detection logic.",
      technologies: ["FastAPI", "Python ", "JWT Auth", "bcrypt", "OpenAPI", "Git"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Describe your third project here.",
      technologies: ["Node.js", "Express", "MongoDB"]
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;