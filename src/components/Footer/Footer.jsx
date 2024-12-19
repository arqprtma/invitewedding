import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
        Your presence is our happiness.
          <br />
          Please pray for us so that this marriage may be full of blessings and love.</p>
        <p className="footer-thank-you">Thank you for your prayers and presence.</p>
        <div className="footer-decoration">
          <img src="/images/flower.png" alt="Flower Decoration" className='flower' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
