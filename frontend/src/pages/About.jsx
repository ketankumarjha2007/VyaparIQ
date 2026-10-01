import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Database,
  Eye,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const principles = [
  {
    number: "01",
    icon: Eye,
    title: "Clarity over complexity",
    text: "Business intelligence should make decisions easier, not bury merchants under more dashboards.",
  },
  {
    number: "02",
    icon: Target,
    title: "Action over observation",
    text: "Knowing that something changed is useful. Knowing what to do about it is more valuable.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Intelligence with context",
    text: "Recommendations should connect business signals, evidence and expected impact.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-grid"></div>

        <div className="about-container about-hero-inner">
          <motion.div
            className="about-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            THE VYAPARIQ STORY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Turning business data
            <br />
            into <em>better decisions.</em>
          </motion.h1>

          <motion.p
            className="about-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            VyaparIQ is being built around a simple idea:
            small businesses shouldn't need a team of analysts to
            understand what their own business is telling them.
          </motion.p>

          <motion.div
            className="about-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="about-scroll-line"></div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="about-problem">
        <div className="about-container about-problem-grid">

          <motion.div
            className="about-section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>01</span>
            THE PROBLEM
          </motion.div>

          <motion.div
            className="about-problem-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Data is everywhere.
              <br />
              <span>Clarity isn't.</span>
            </h2>

            <p>
              Sales happen every day. Inventory moves. Customers change
              their buying patterns. Cash comes in and goes out.
            </p>

            <p>
              The information exists — but turning all of those signals
              into the right decision at the right moment is difficult.
            </p>

            <div className="about-quote">
              <div className="about-quote-mark">“</div>

              <div>
                <p>
                  The goal isn't to give merchants more information.
                  It's to help them make better decisions with the
                  information they already have.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <div className="about-container">

          <motion.div
            className="about-vision-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-section-label">
              <span>02</span>
              OUR APPROACH
            </div>

            <h2>
              From numbers
              <br />
              to <strong>decisions.</strong>
            </h2>

            <p>
              VyaparIQ connects the entire decision journey instead of
              treating analytics, forecasting and recommendations as
              separate products.
            </p>
          </motion.div>

          {/* Pipeline */}
          <div className="about-pipeline">

            <motion.div
              className="about-pipeline-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <div className="about-pipeline-number">01</div>

              <div className="about-pipeline-icon">
                <Database size={19} />
              </div>

              <span>INPUT</span>
              <h3>Business data</h3>
              <p>
                Sales, inventory, customers, expenses and operational signals.
              </p>
            </motion.div>

            <div className="about-pipeline-arrow">
              <ArrowRight size={17} />
            </div>

            <motion.div
              className="about-pipeline-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              <div className="about-pipeline-number">02</div>

              <div className="about-pipeline-icon">
                <TrendingUp size={19} />
              </div>

              <span>UNDERSTAND</span>
              <h3>Analytics</h3>
              <p>
                Patterns, trends, anomalies and relationships across the business.
              </p>
            </motion.div>

            <div className="about-pipeline-arrow">
              <ArrowRight size={17} />
            </div>

            <motion.div
              className="about-pipeline-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.19 }}
            >
              <div className="about-pipeline-number">03</div>

              <div className="about-pipeline-icon">
                <Lightbulb size={19} />
              </div>

              <span>ANTICIPATE</span>
              <h3>Prediction</h3>
              <p>
                Demand signals and future scenarios that help prepare for what's next.
              </p>
            </motion.div>

            <div className="about-pipeline-arrow">
              <ArrowRight size={17} />
            </div>

            <motion.div
              className="about-pipeline-card pipeline-highlight"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26 }}
            >
              <div className="about-pipeline-number">04</div>

              <div className="about-pipeline-icon">
                <Brain size={19} />
              </div>

              <span>DECIDE</span>
              <h3>Action</h3>
              <p>
                Clear recommendations ranked by urgency, impact and confidence.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles">
        <div className="about-container">

          <motion.div
            className="about-principles-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-section-label">
              <span>03</span>
              WHAT WE BELIEVE
            </div>

            <h2>
              Intelligence should
              <br />
              feel <span>simple.</span>
            </h2>
          </motion.div>

          <div className="about-principles-list">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-principle"
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <div className="about-principle-number">
                    {item.number}
                  </div>

                  <div className="about-principle-icon">
                    <Icon size={19} />
                  </div>

                  <div className="about-principle-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowRight className="about-principle-arrow" size={18} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* VISION STATEMENT */}
      <section className="about-final">
        <div className="about-final-glow"></div>

        <div className="about-container about-final-inner">

          <motion.div
            className="about-final-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE LONG-TERM VISION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A business assistant that
            <br />
            <span>thinks with you.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We imagine a future where a merchant doesn't need to spend
            hours searching through spreadsheets to discover what their
            business needs next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/register" className="about-final-button">
              Explore VyaparIQ
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default About;