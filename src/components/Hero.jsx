function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Tejesh Remuduru</span>
        </h1>
        <h2 className="hero-subtitle">Computer Networks Systems Student</h2>
        <p className="hero-description">
          Second Year San Jose State University Student passionate about 
          building innovative solutions and learning new technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;