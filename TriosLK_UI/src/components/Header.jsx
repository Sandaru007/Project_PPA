import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Left - Logo */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="logo" />
          </Link>
        </div>

        {/* Center - Links */}
        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Right - Login + Hamburger */}
        <div className="nav-right">
          <button className="login-btn">Login</button>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
