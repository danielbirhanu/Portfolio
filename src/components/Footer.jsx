import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Portfolio</a>
            <p>Creating digital experiences that matter.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/danielbirhanu" target='_blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/danielbirhanu/" target='_blank'><FaLinkedin /></a>
              <a href="https://x.com/Daniel_birhanu1" target='_blank'><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;