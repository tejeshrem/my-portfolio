import { useState, useEffect } from 'react';
import image from '../assets/image.png';

function Hero() {
  // Typewriter effect for name (types once and stays)
  const [nameText, setNameText] = useState('');
  const fullName = "I'm ";
  const name = "Tejesh Remuduru";
  const [nameComplete, setNameComplete] = useState(false);

  // Typewriter effect for description (rotates through 4 sentences)
  const descriptions = [
    "Second Year San Jose State University Student passionate about AI, Sales Engineering, and Cybersecurity",
    "Aspiring developer with a passion for innovative and impactful solutions",
    "Constantly learning and exploring new technologies to solve real-world problems and create impactful solutions.",
    "Dedicated to continuous growth in engineering and interpersonal skills."
  ];
  
  const [descText, setDescText] = useState('');
  const [currentDescIndex, setCurrentDescIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [descTypingSpeed, setDescTypingSpeed] = useState(50);

  // Effect for name typewriter (types once and stays)
  useEffect(() => {
    if (nameComplete) return;

    let timer;
    const fullText = fullName + name;
    if (nameText.length < fullText.length) {
      timer = setTimeout(() => {
        setNameText(fullText.substring(0, nameText.length + 1));
      }, 100); // Typing speed for name
    } else {
      setNameComplete(true);
      // Start description typewriter after name is complete
      setTimeout(() => {
        setDescText('');
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [nameText, nameComplete, fullName, name]);

  // Effect for description typewriter (rotates through sentences)
  useEffect(() => {
    if (!nameComplete) return; // Wait for name to finish first

    let timer;
    const currentDescription = descriptions[currentDescIndex];

    const handleTyping = () => {
      if (!isDeleting && descText === currentDescription) {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait 2 seconds before deleting
      } else if (isDeleting && descText === '') {
        // Move to next description
        setIsDeleting(false);
        setCurrentDescIndex((prev) => (prev + 1) % descriptions.length);
        setDescTypingSpeed(50);
      } else {
        // Type or delete
        setDescTypingSpeed(isDeleting ? 30 : 50);
        const nextText = isDeleting
          ? currentDescription.substring(0, descText.length - 1)
          : currentDescription.substring(0, descText.length + 1);
        setDescText(nextText);
        timer = setTimeout(handleTyping, descTypingSpeed);
      }
    };

    timer = setTimeout(handleTyping, descTypingSpeed);
    return () => clearTimeout(timer);
  }, [descText, isDeleting, currentDescIndex, descTypingSpeed, descriptions, nameComplete]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {nameText}
            {!nameComplete && <span className="cursor">|</span>}
          </h1>
          <h2 className="hero-subtitle">Computer Networks Systems Student</h2>
          <p className="hero-description">
            {descText}
            <span className="cursor">|</span>
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={image} alt="Tejesh Remuduru" className="profile-picture" />
        </div>
      </div>
    </section>
  );
}

export default Hero;