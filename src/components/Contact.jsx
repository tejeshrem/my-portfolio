import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat. Feel free to reach out!
            </p>
            <div className="social-links">
              <a href="mailto:your.email@example.com" className="social-link">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                💻 GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;