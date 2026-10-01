import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <main className="register-page">

      <section className="register-shell">

        {/* LEFT */}
        <div className="register-visual">

          <div className="register-grid"></div>
          <div className="register-glow"></div>

          <Link to="/" className="register-brand">
            <div className="register-brand-icon">
              <BarChart3 size={18} />
            </div>
            <span>VyaparIQ</span>
          </Link>

          <div className="register-visual-content">

            <div className="register-badge">
              <span>
                <Brain size={12} />
              </span>
              START YOUR INTELLIGENCE LAYER
            </div>

            <h1>
              Give your business
              <br />
              a clearer
              <span> direction.</span>
            </h1>

            <p>
              Create your workspace and start turning everyday
              business data into decisions.
            </p>

            <div className="register-steps">

              <div className="register-step active">
                <div className="register-step-icon">
                  <Check size={14} />
                </div>

                <div>
                  <strong>Create your workspace</strong>
                  <span>Set up your business profile</span>
                </div>
              </div>

              <div className="register-step">
                <div className="register-step-icon">
                  <BarChart3 size={14} />
                </div>

                <div>
                  <strong>Connect your signals</strong>
                  <span>Bring your business data together</span>
                </div>
              </div>

              <div className="register-step">
                <div className="register-step-icon">
                  <Sparkles size={14} />
                </div>

                <div>
                  <strong>Start making decisions</strong>
                  <span>Get actionable business intelligence</span>
                </div>
              </div>

            </div>
          </div>

          <div className="register-visual-footer">
            <span>
              <ShieldCheck size={13} />
              Your business data stays yours
            </span>

            <span>VyaparIQ</span>
          </div>
        </div>

        {/* FORM */}
        <div className="register-form-side">

          <div className="register-mobile-brand">
            <Link to="/" className="register-brand">
              <div className="register-brand-icon">
                <BarChart3 size={18} />
              </div>
              <span>VyaparIQ</span>
            </Link>
          </div>

          <motion.div
            className="register-form-container"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="register-heading">
              <span>GET STARTED</span>

              <h2>
                Build your smarter
                <br />
                business workspace.
              </h2>

              <p>
                Start with the basics. You can connect more business
                data later.
              </p>
            </div>

            <form className="register-form">

              <div className="register-row">
                <div className="register-field">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="register-field">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="register-field">
                <label>Business name</label>
                <input
                  type="text"
                  placeholder="Your business name"
                />
              </div>

              <div className="register-field">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="you@business.com"
                />
              </div>

              <div className="register-field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                />
              </div>

              <label className="register-check">
                <input type="checkbox" />
                <span></span>
                I agree to the Terms and Privacy Policy
              </label>

              <button className="register-submit" type="submit">
                Create my workspace
                <ArrowRight size={16} />
              </button>

            </form>

            <div className="register-switch">
              <span>Already have an account?</span>

              <Link to="/login">
                Sign in
                <ArrowRight size={13} />
              </Link>
            </div>

          </motion.div>

          <div className="register-legal">
            Your workspace is created securely.
            You can update your business information anytime.
          </div>

        </div>

      </section>

    </main>
  );
}

export default Register;