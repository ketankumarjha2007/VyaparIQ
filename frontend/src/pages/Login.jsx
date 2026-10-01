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
import "./Login.css";

function Login() {
  return (
    <main className="auth-page">

      <section className="auth-shell">

        {/* LEFT VISUAL */}
        <div className="auth-visual">

          <div className="auth-visual-grid"></div>
          <div className="auth-visual-glow"></div>

          <Link to="/" className="auth-brand">
            <div className="auth-brand-icon">
              <BarChart3 size={18} />
            </div>
            <span>VyaparIQ</span>
          </Link>

          <div className="auth-visual-content">

            <div className="auth-mini-badge">
              <span>
                <Sparkles size={12} />
              </span>
              BUSINESS INTELLIGENCE
            </div>

            <h1>
              Make your next
              <br />
              decision with
              <span> confidence.</span>
            </h1>

            <p>
              Your business generates signals every day.
              VyaparIQ helps turn those signals into actions.
            </p>

            {/* Mini intelligence preview */}
            <motion.div
              className="auth-preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="auth-preview-top">
                <div>
                  <span>TODAY'S SIGNAL</span>
                  <strong>Inventory opportunity</strong>
                </div>

                <div className="auth-preview-live">
                  <i></i>
                  LIVE
                </div>
              </div>

              <div className="auth-preview-main">
                <div className="auth-preview-icon">
                  🥛
                </div>

                <div>
                  <strong>Milk demand rising</strong>
                  <p>
                    Sales velocity is up 18% this week.
                  </p>
                </div>

                <div className="auth-preview-value">
                  +18%
                </div>
              </div>

              <div className="auth-preview-bar">
                <span></span>
              </div>

              <div className="auth-preview-footer">
                <span>Confidence</span>
                <strong>94%</strong>
              </div>
            </motion.div>

          </div>

          <div className="auth-visual-footer">
            <span>
              <ShieldCheck size={13} />
              Built around your business data
            </span>

            <span>VyaparIQ Intelligence Engine</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="auth-form-side">

          <div className="auth-mobile-brand">
            <Link to="/" className="auth-brand">
              <div className="auth-brand-icon">
                <BarChart3 size={18} />
              </div>
              <span>VyaparIQ</span>
            </Link>
          </div>

          <motion.div
            className="auth-form-container"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="auth-form-heading">
              <span>WELCOME BACK</span>

              <h2>
                Continue building
                <br />
                a smarter business.
              </h2>

              <p>
                Sign in to access your business intelligence workspace.
              </p>
            </div>

            <form className="auth-form">

              <div className="auth-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@business.com"
                />
              </div>

              <div className="auth-field">
                <div className="auth-label-row">
                  <label htmlFor="password">Password</label>
                  <button type="button">
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <label className="auth-checkbox">
                <input type="checkbox" />
                <span></span>
                Keep me signed in
              </label>

              <button className="auth-submit" type="submit">
                Sign in
                <ArrowRight size={16} />
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button className="auth-google" type="button">
              <span className="google-mark">G</span>
              Continue with Google
            </button>

            <div className="auth-switch">
              <span>Don't have a VyaparIQ account?</span>
              <Link to="/register">
                Create one
                <ArrowRight size={13} />
              </Link>
            </div>

          </motion.div>

          <div className="auth-legal">
            By continuing, you agree to VyaparIQ's
            <span> Terms</span> and <span>Privacy Policy</span>.
          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;