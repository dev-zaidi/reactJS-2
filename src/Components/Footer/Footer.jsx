import React from 'react';
import '../../App.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Recommended Section */}
        <div className="footer-column">
          <h4>Recommended</h4>
          <ul>
            <li>realme C75</li>
            <li>realme 13+ 5G</li>
            <li>realme Note 60</li>
            <li>realme C61</li>
            <li>realme C65</li>
            <li>realme 12</li>
            <li>realme 12+ 5G</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Troubleshooting</li>
          </ul>
        </div>

        {/* About realme Section */}
        <div className="footer-column">
          <h4>About realme</h4>
          <ul>
            <li>Our Brand</li>
            <li>Newsroom</li>
          </ul>
        </div>

        {/* Contact realme Section */}
        <div className="footer-column">
          <h4>Contact realme</h4>
          <ul>
            <li>Whatsapp</li>
            <li>service.pk@realme.com</li>
          </ul>
        </div>

        {/* Phone Number Section */}
        <div className="footer-column contact-column">
          <h4>04238048018</h4>
          <p>09:30 - 18:00, MON - SAT</p>
          <p>Exclude Holidays</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p style={{fontSize:'25px'}}>Pakistan ( English / PKR )</p>
        <p style={{fontSize:'25px'}}>© 2019-2024 realme. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sales</a>
          <a href="#">Warranty Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
