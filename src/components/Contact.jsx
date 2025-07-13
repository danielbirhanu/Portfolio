import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>danielbirhant@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+251 95 435 5685</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>Mon-Sat: 7AM - 12AM</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="#" className="social-icon" id='social-icon'>
                  <FaGithub />
                </a>
                <a href="#" className="social-icon" id='social-icon'>
                  <FaLinkedin />
                </a>
                <a href="#" className="social-icon" id='social-icon'>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;