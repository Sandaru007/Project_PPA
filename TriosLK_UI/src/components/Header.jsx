import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div>
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Website Logo" className="logo" />
        </Link>
      </div>

      {/* Navbar Section */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Header;
