import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row py-4">
          
          {/* Brand Section */}
          <div className="col-md-7 mb-4">
            <img src={logo} alt="TrioSLK Logo" className="footer-logo mb-4" />
            <p className="footer-description mb-4">
              Sri Lanka's premier multi-department creative services company, 
              crafting unforgettable experiences across events, entertainment, 
              media, education, and technology.
            </p>
            {/* Social Icons with WhatsApp included */}
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/94742699814" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-5 mb-4 d-flex flex-column align-items-md-end">
            <div className="contact-info">
              <h5 className="footer-heading">Contact Us</h5>
              <p>
                <i className="fas fa-map-marker-alt"></i> 
                216/B Gananamoli Mawatha Makola North Makola, Sri Lanka
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +94 74 269 9814
              </p>
              <p>
                <i className="fas fa-envelope"></i> trioslk3@gmail.com
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar - Cleaned up */}
        <div className="footer-bottom">
          <p className="mb-0">© 2026 trios.lk. All Rights Reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;