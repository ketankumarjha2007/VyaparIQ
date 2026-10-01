import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobile}>
          <motion.div
            className="navbar-logo-mark"
            whileHover={{ rotate: -5, scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <BarChart3 size={19} strokeWidth={2.5} />
          </motion.div>

          <span className="navbar-logo-text">
            Vyapar<span>IQ</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-signin">
            Sign in
          </Link>

          <Link to="/register" className="navbar-cta">
            <span>Get started</span>
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="navbar-mobile-menu"
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="navbar-mobile-inner">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className={({ isActive }) =>
                `navbar-mobile-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar-mobile-divider"></div>

          <Link
            to="/login"
            className="navbar-mobile-signin"
            onClick={closeMobile}
          >
            Sign in
          </Link>

          <Link
            to="/register"
            className="navbar-mobile-cta"
            onClick={closeMobile}
          >
            Get started
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;