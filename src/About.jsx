import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>Vivere Café</h1>

      <div className="contact-info">
        <div className="contact-item card">
          <h3>Address</h3>
          <p>45 Espresso Street,</p>
          <p>Cafféville, Aroma District, 98765</p>
          <p>(Located near the Green Park)</p>
        </div>

        <div className="contact-item card">
          <h3>Phone Number</h3>
          <p>+1 (555) 987-6543</p>
        </div>

        <div className="contact-item card">
          <h3>Email</h3>
          <p><a href="mailto:info@viverecafe.com">info@viverecafe.com</a></p>
        </div>

        <div className="contact-item card">
          <h3>Website</h3>
          <p><a href="http://www.viverecafe.com" target="_blank" rel="noopener noreferrer">www.viverecafe.com</a></p>
        </div>

        <div className="contact-item card">
          <h3>Social Media</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/viverecafe" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/viverecafe" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/viverecafe" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

        <div className="contact-item card">
          <h3>Opening Hours</h3>
          <p><strong>Monday - Friday:</strong> 7:30 AM - 8:00 PM</p>
          <p><strong>Saturday:</strong> 8:00 AM - 10:00 PM</p>
          <p><strong>Sunday:</strong> 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default About;
