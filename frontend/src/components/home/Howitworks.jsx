import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Database,
  IndianRupee,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./Howitworks.css";

const recommendations = [
  {
    priority: "HIGH PRIORITY",
    title: "Reorder Milk",
    description:
      "Demand is accelerating while current stock will cover only 1.2 days.",
    impact: "+₹4,800",
    impactLabel: "protected revenue",
    confidence: "94%",
    icon: TrendingUp,
    accent: "green",
  },
  {
    priority: "WATCH",
    title: "Reduce Bread Stock",
    description:
      "Sales have slowed 21% over the last 7 days. Avoid another overstock.",
    impact: "₹2,100",
    impactLabel: "cash released",
    confidence: "88%",
    icon: CircleAlert,
    accent: "orange",
  },
  {
    priority: "OPPORTUNITY",
    title: "Bundle Snacks",
    description:
      "Customers frequently purchase these products together during evenings.",
    impact: "+12%",
    impactLabel: "basket potential",
    confidence: "81%",
    icon: Sparkles,
    accent: "purple",
  },
];

function HowItWorks() {
  return (
    <section className="decision-section" id="how-it-works">
      <div className="decision-container">

        {/* Header */}
        <motion.div
          className="decision-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="decision-kicker">
            <span className="decision-kicker-dot"></span>
            DECISION INTELLIGENCE
          </div>

          <h2>
            Don't just know
            <span> what happened.</span>
            <br />
            Know what to do next.
          </h2>

          <p>
            VyaparIQ turns your business signals into clear actions —
            prioritized by urgency, impact and confidence.
          </p>
        </motion.div>

        {/* Main intelligence workspace */}
        <motion.div
          className="decision-workspace"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Workspace top bar */}
          <div className="decision-topbar">
            <div className="decision-topbar-left">
              <div className="decision-ai-icon">
                <Brain size={17} />
              </div>

              <div>
                <span className="decision-top-title">
                  Merchant Intelligence
                </span>
                <span className="decision-top-status">
                  <i></i>
                  Analysis updated just now
                </span>
              </div>
            </div>

            <div className="decision-date">
              <Clock3 size={14} />
              Today · 09:42 AM
            </div>
          </div>

          {/* Workspace body */}
          <div className="decision-body">

            {/* Left */}
            <div className="decision-main">

              <div className="decision-question">
                <span>GOOD MORNING.</span>
                <h3>What should I do today?</h3>
                <p>
                  We analyzed your recent sales, inventory movement,
                  demand patterns and cash position.
                </p>
              </div>

              {/* Main recommendation */}
              <motion.div
                className="decision-primary"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                <div className="decision-primary-head">
                  <div className="decision-priority">
                    <span></span>
                    HIGH PRIORITY
                  </div>

                  <span className="decision-confidence">
                    94% confidence
                  </span>
                </div>

                <div className="decision-primary-content">
                  <div className="decision-product-icon">
                    <span>🥛</span>
                  </div>

                  <div className="decision-product-info">
                    <h4>Reorder Milk</h4>

                    <p>
                      Demand is <strong>18% higher</strong> than last week
                      and current inventory covers only{" "}
                      <strong>1.2 days</strong>.
                    </p>
                  </div>
                </div>

                <div className="decision-metrics">
                  <div>
                    <span>Expected impact</span>
                    <strong>+₹4,800</strong>
                  </div>

                  <div>
                    <span>Stock cover</span>
                    <strong>1.2 days</strong>
                  </div>

                  <div>
                    <span>Demand trend</span>
                    <strong className="positive">↑ 18%</strong>
                  </div>
                </div>

                <div className="decision-primary-footer">
                  <button className="decision-action-primary">
                    Review recommendation
                    <ArrowRight size={15} />
                  </button>

                  <button className="decision-action-secondary">
                    Why?
                  </button>
                </div>
              </motion.div>

              {/* Secondary recommendations */}
              <div className="decision-list">
                {recommendations.slice(1).map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      className="decision-list-item"
                      key={item.title}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                      }}
                    >
                      <div className={`decision-list-icon ${item.accent}`}>
                        <Icon size={17} />
                      </div>

                      <div className="decision-list-content">
                        <div className="decision-list-title-row">
                          <span>{item.priority}</span>
                          <strong>{item.title}</strong>
                        </div>

                        <p>{item.description}</p>
                      </div>

                      <div className="decision-list-impact">
                        <strong>{item.impact}</strong>
                        <span>{item.impactLabel}</span>
                      </div>

                      <ChevronRight
                        className="decision-chevron"
                        size={17}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right intelligence panel */}
            <div className="decision-insight">

              <div className="decision-insight-header">
                <div>
                  <span className="decision-insight-label">
                    AI REASONING
                  </span>

                  <h4>Why this action?</h4>
                </div>

                <div className="decision-spark">
                  <Sparkles size={16} />
                </div>
              </div>

              <div className="decision-reasoning">

                <div className="reasoning-line">
                  <div className="reasoning-icon">
                    <TrendingUp size={14} />
                  </div>

                  <div>
                    <span>Sales trend</span>
                    <strong>Milk sales ↑ 18%</strong>
                  </div>
                </div>

                <div className="reasoning-connector"></div>

                <div className="reasoning-line">
                  <div className="reasoning-icon">
                    <Database size={14} />
                  </div>

                  <div>
                    <span>Inventory</span>
                    <strong>Only 1.2 days remaining</strong>
                  </div>
                </div>

                <div className="reasoning-connector"></div>

                <div className="reasoning-line">
                  <div className="reasoning-icon">
                    <IndianRupee size={14} />
                  </div>

                  <div>
                    <span>Business impact</span>
                    <strong>₹4,800 revenue at risk</strong>
                  </div>
                </div>
              </div>

              <div className="decision-insight-divider"></div>

              <div className="decision-insight-summary">
                <div className="summary-icon">
                  <Check size={15} />
                </div>

                <p>
                  Based on current demand velocity, replenishing now
                  reduces the probability of a stockout.
                </p>
              </div>

              <div className="decision-data-source">
                <span></span>
                Based on 30 days of business data
              </div>
            </div>
          </div>

          {/* Workspace footer */}
          <div className="decision-workspace-footer">
            <div>
              <span className="decision-footer-pulse"></span>
              Intelligence engine active
            </div>

            <span>
              Sales · Inventory · Forecast · Cash flow
            </span>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          className="decision-statement"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="statement-line"></div>

          <div>
            <span>THE DIFFERENCE</span>
            <p>
              Traditional dashboards tell you what happened.
              <strong> VyaparIQ helps you decide what happens next.</strong>
            </p>
          </div>

          <div className="statement-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorks;