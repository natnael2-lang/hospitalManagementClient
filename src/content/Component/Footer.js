import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


//The general footer component for basic links and information for quick access
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Departments</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />  Hardwork Way, Addis Ababa, AA, 2103</p>
              <p><FontAwesomeIcon icon={faPhone} className="icon" /> (251) 070-7CR7</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> info@five_kilo_hospital.com</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Site Map</h3>
            <ul className="site-map">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ፭-ኪሎ Hospital HMS</p>
        </div>
      </footer>
    );
  };

  export default Footer;