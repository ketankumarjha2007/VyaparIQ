import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  CircleCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-v2">

      {/* Background */}
      <div className="hero-v2-grid" />
      <div className="hero-v2-glow hero-v2-glow-left" />
      <div className="hero-v2-glow hero-v2-glow-right" />

      <div className="hero-v2-container">

        {/* Announcement */}
        <motion.div
          className="hero-v2-announcement"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-v2-live-dot" />

          <span>AI-powered merchant intelligence</span>

          <span className="hero-v2-announcement-arrow">
            <ArrowRight size={12} />
          </span>
        </motion.div>


        {/* Main copy */}
        <motion.div
          className="hero-v2-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >

          <h1>
            Your business is generating
            <br />

            <span className="hero-v2-gradient">
              signals.
            </span>

            {" "}We turn them into
            <br />

            <span className="hero-v2-outline">
              decisions.
            </span>
          </h1>

          <p>
            VyaparIQ connects your sales, inventory and business data
            to reveal what is happening, what is likely to happen next,
            and what you should do about it.
          </p>

        </motion.div>


        {/* Actions */}
        <motion.div
          className="hero-v2-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >

          <Link
            to="/register"
            className="hero-v2-primary"
          >
            Start with VyaparIQ
            <ArrowRight size={17} />
          </Link>

          <a
            href="#intelligence-engine"
            className="hero-v2-secondary"
          >
            See how it works
            <ChevronDown size={15} />
          </a>

        </motion.div>


        {/* Trust */}
        <motion.div
          className="hero-v2-trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <CircleCheck size={14} />

          <span>
            Built for merchants who want decisions, not just dashboards.
          </span>
        </motion.div>


        {/* PRODUCT PREVIEW */}
        <motion.div
          className="hero-v2-product"
          initial={{ opacity: 0, y: 55, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Browser chrome */}
          <div className="hero-v2-browser">

            <div className="hero-v2-browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-v2-browser-address">
              app.vyapariq.com
            </div>

            <div className="hero-v2-browser-status">
              <span />
              Live intelligence
            </div>

          </div>


          {/* Dashboard */}
          <div className="hero-v2-dashboard">

            {/* Sidebar */}
            <aside className="hero-v2-sidebar">

              <div className="hero-v2-sidebar-logo">
                <span>V</span>
                <strong>VyaparIQ</strong>
              </div>

              <div className="hero-v2-sidebar-section">
                <small>WORKSPACE</small>

                <div className="hero-v2-sidebar-item active">
                  Overview
                </div>

                <div className="hero-v2-sidebar-item">
                  Sales
                </div>

                <div className="hero-v2-sidebar-item">
                  Inventory
                </div>

                <div className="hero-v2-sidebar-item">
                  Forecast
                </div>
              </div>

              <div className="hero-v2-sidebar-section">
                <small>INTELLIGENCE</small>

                <div className="hero-v2-sidebar-item ai">
                  <Brain size={13} />
                  AI Copilot
                </div>

                <div className="hero-v2-sidebar-item">
                  Recommendations
                </div>

              </div>

              <div className="hero-v2-sidebar-bottom">
                Settings
              </div>

            </aside>


            {/* Main */}
            <div className="hero-v2-dashboard-main">

              <div className="hero-v2-dashboard-heading">

                <div>
                  <span>FRIDAY · 02 OCTOBER 2026</span>

                  <h3>
                    Good morning, Ketan.
                  </h3>
                </div>

                <div className="hero-v2-avatar">
                  K
                </div>

              </div>


              {/* Metrics */}
              <div className="hero-v2-metrics">

                <div className="hero-v2-metric">
                  <span>Revenue</span>

                  <strong>
                    ₹48,240
                  </strong>

                  <small className="positive">
                    ↑ 12.4%
                  </small>
                </div>

                <div className="hero-v2-metric">
                  <span>Profit</span>

                  <strong>
                    ₹18,620
                  </strong>

                  <small className="positive">
                    ↑ 8.7%
                  </small>
                </div>

                <div className="hero-v2-metric">
                  <span>Cash available</span>

                  <strong>
                    ₹31,400
                  </strong>

                  <small>
                    Healthy
                  </small>
                </div>

                <div className="hero-v2-metric">
                  <span>Inventory health</span>

                  <strong>
                    87%
                  </strong>

                  <small className="positive">
                    Good
                  </small>
                </div>

              </div>


              {/* Lower dashboard */}
              <div className="hero-v2-dashboard-grid">

                {/* Revenue chart */}
                <div className="hero-v2-chart-card">

                  <div className="hero-v2-card-heading">
                    <div>
                      <span>BUSINESS PERFORMANCE</span>
                      <strong>Revenue</strong>
                    </div>

                    <small>
                      Last 30 days
                    </small>
                  </div>

                  <div className="hero-v2-chart">

                    <div className="hero-v2-chart-y">
                      <span>50K</span>
                      <span>40K</span>
                      <span>30K</span>
                      <span>20K</span>
                      <span>10K</span>
                    </div>

                    <div className="hero-v2-chart-area">

                      <div className="hero-v2-chart-lines">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <svg
                        viewBox="0 0 600 180"
                        preserveAspectRatio="none"
                        className="hero-v2-line-chart"
                      >
                        <defs>
                          <linearGradient
                            id="heroLine"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop
                              offset="0%"
                              stopColor="#8066ff"
                            />

                            <stop
                              offset="100%"
                              stopColor="#20d9a3"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 145 C60 125 75 135 120 112 C165 90 180 110 225 98 C270 85 295 112 335 78 C375 45 405 78 440 61 C480 42 520 53 600 22"
                          fill="none"
                          stroke="url(#heroLine)"
                          strokeWidth="4"
                          vectorEffect="non-scaling-stroke"
                        />

                        <path
                          d="M0 145 C60 125 75 135 120 112 C165 90 180 110 225 98 C270 85 295 112 335 78 C375 45 405 78 440 61 C480 42 520 53 600 22 L600 180 L0 180 Z"
                          fill="url(#heroLine)"
                          opacity="0.08"
                        />
                      </svg>

                    </div>

                  </div>

                  <div className="hero-v2-chart-labels">
                    <span>Sep 03</span>
                    <span>Sep 10</span>
                    <span>Sep 17</span>
                    <span>Sep 24</span>
                    <span>Oct 02</span>
                  </div>

                </div>


                {/* AI panel */}
                <div className="hero-v2-ai-card">

                  <div className="hero-v2-ai-heading">

                    <div className="hero-v2-ai-icon">
                      <Brain size={17} />
                    </div>

                    <div>
                      <span>VYAPARIQ INTELLIGENCE</span>
                      <strong>What should I do today?</strong>
                    </div>

                  </div>


                  <div className="hero-v2-ai-recommendation">

                    <div className="hero-v2-ai-priority">
                      PRIORITY ACTION
                    </div>

                    <h4>
                      Reorder Milk
                    </h4>

                    <p>
                      Demand is 18% above your 30-day average.
                      Current stock may run out tomorrow.
                    </p>

                    <div className="hero-v2-ai-data">

                      <div>
                        <span>Demand</span>
                        <strong>↑ 18%</strong>
                      </div>

                      <div>
                        <span>Stock cover</span>
                        <strong>1.2 days</strong>
                      </div>

                    </div>

                    <button>
                      Review recommendation
                      <ArrowRight size={14} />
                    </button>

                  </div>

                  <div className="hero-v2-ai-footer">
                    <TrendingUp size={13} />
                    3 actions identified from today's data
                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* Bottom signal */}
        <motion.div
          className="hero-v2-bottom-signal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span />
          Intelligence layer active
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;