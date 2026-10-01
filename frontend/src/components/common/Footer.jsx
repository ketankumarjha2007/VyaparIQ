import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  GitBranch,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Brand */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <BarChart3 size={18} strokeWidth={2.4} />
              </div>

              <span>
                Vyapar<span>IQ</span>
              </span>
            </Link>

            <p className="footer-description">
              AI-powered decision intelligence for
              smarter merchant businesses.
            </p>

            <div className="footer-status">
              <span className="footer-status-dot"></span>
              Intelligence platform for modern merchants
            </div>

          </div>

          {/* Links */}
          <div className="footer-columns">

            <div className="footer-column">
              <h4>Product</h4>

              <Link to="/about">
                About
              </Link>

              <Link to="/register">
                Get Started
              </Link>

              <a href="/#features">
                Features
              </a>

              <a href="/#how-it-works">
                How it works
              </a>
            </div>


            <div className="footer-column">
              <h4>Company</h4>

              <Link to="/about">
                Our Story
              </Link>

              <Link to="/contact">
                Contact
              </Link>

              <Link to="/contact">
                Support
              </Link>
            </div>


            <div className="footer-column">
              <h4>Account</h4>

              <Link to="/login">
                Sign in
              </Link>

              <Link to="/register">
                Create account
              </Link>
            </div>

          </div>

        </motion.div>


        {/* Divider */}
        <div className="footer-divider"></div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © {year} VyaparIQ. Built for smarter decisions.
          </p>


          <div className="footer-socials">

            <a
              href="#"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitBranch size={15} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <span className="linkedin-text">
                in
              </span>
            </a>

            <Link
              to="/contact"
              aria-label="Contact"
              title="Contact VyaparIQ"
            >
              <Mail size={15} />
            </Link>

          </div>


          <button
            className="footer-back-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to top
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;