function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tejesh Remuduru. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;