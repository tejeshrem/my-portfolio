function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a second-year student at San Jose State University studying 
              Computer Networks Systems. I'm passionate about technology, 
              problem-solving, and creating impactful solutions.
            </p>
            <p>
              When I'm not studying, I enjoy working on personal projects, 
              learning new programming languages, and contributing to open-source 
              projects. I'm always eager to take on new challenges and expand 
              my skill set.
            </p>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Networking</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;