function Navbar() {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Your Name
            </a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;