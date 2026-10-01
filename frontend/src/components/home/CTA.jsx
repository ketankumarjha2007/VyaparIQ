import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Check,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* Main CTA */}
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background intelligence grid */}
          <div className="cta-grid"></div>
          <div className="cta-glow"></div>

          <div className="cta-content">

            <motion.div
              className="cta-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <span>
                <Sparkles size={13} />
              </span>
              BUILT FOR BETTER DECISIONS
            </motion.div>

            <h2>
              Your business already
              <br />
              has the <span>answers.</span>
            </h2>

            <p>
              VyaparIQ connects your sales, inventory and business signals
              to help you understand what matters — and decide what to do next.
            </p>

            <div className="cta-actions">
              <Link to="/register" className="cta-primary">
                Start with VyaparIQ
                <ArrowRight size={17} />
              </Link>

              <Link to="/about" className="cta-secondary">
                Explore the platform
              </Link>
            </div>

            <div className="cta-trust">
              <div className="cta-trust-item">
                <Check size={13} />
                No complicated setup
              </div>

              <div className="cta-trust-item">
                <Check size={13} />
                Built for merchants
              </div>

              <div className="cta-trust-item">
                <Check size={13} />
                Decision-first analytics
              </div>
            </div>
          </div>

          {/* Floating intelligence visualization */}
          <motion.div
            className="cta-orbit"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="cta-orbit-ring ring-one"></div>
            <div className="cta-orbit-ring ring-two"></div>

            <div className="cta-core">
              <Brain size={25} />
            </div>

            <div className="cta-floating-card card-one">
              <TrendingUp size={13} />
              <div>
                <span>Demand</span>
                <strong>+18%</strong>
              </div>
            </div>

            <div className="cta-floating-card card-two">
              <Check size={13} />
              <div>
                <span>Decision</span>
                <strong>Ready</strong>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          className="cta-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="cta-bottom-line"></div>

          <span>
            SEE THE SIGNAL. UNDERSTAND THE BUSINESS. MAKE THE MOVE.
          </span>

          <div className="cta-bottom-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default CTA;