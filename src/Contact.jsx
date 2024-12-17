import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Vivere Café</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Owner: Vigna</h3>
          <p>Vigna is the owner and founder of Vivere Café. With a passion for coffee and a love for hospitality, Vigna started Vivere Café to bring a unique café experience to the community.</p>
        </div>

        <div className="contact-card">
          <h3>Address</h3>
          <p>45 Espresso Street,</p>
          <p>Cafféville, Aroma District, 98765</p>
          <p>(Next to the Green Park)</p>
        </div>

        <div className="contact-card">
          <h3>Phone Number</h3>
          <p>+1 (555) 987-6543</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:info@viverecafe.com">info@viverecafe.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Website</h3>
          <p><a href="http://www.viverecafe.com" target="_blank" rel="noopener noreferrer">www.viverecafe.com</a></p>
        </div>

       

      </div>
    </div>
  )
}

export default Contact