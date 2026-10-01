import { motion } from "motion/react";
import {
  BarChart3,
  Brain,
  Calculator,
  Package,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./Features.css";

const features = [
  {
    number: "01",
    icon: BarChart3,
    label: "UNDERSTAND",
    title: "Business Analytics",
    description:
      "See revenue, profit, cash flow and product performance through one connected business view.",
    tags: ["Revenue", "Profit", "Trends"],
  },
  {
    number: "02",
    icon: Package,
    label: "OPTIMIZE",
    title: "Inventory Intelligence",
    description:
      "Identify fast-moving, slow-moving and at-risk products before inventory becomes a problem.",
    tags: ["Stock Health", "Reorder Risk", "Dead Stock"],
  },
  {
    number: "03",
    icon: TrendingUp,
    label: "PREDICT",
    title: "Demand Forecasting",
    description:
      "Use historical patterns and business signals to anticipate what customers are likely to need next.",
    tags: ["Demand", "Forecast", "Trends"],
  },
  {
    number: "04",
    icon: Sparkles,
    label: "DECIDE",
    title: "AI Recommendations",
    description:
      "Turn business signals into practical actions such as reorder, reduce, promote or bundle.",
    tags: ["Actions", "Impact", "Confidence"],
  },
  {
    number: "05",
    icon: Calculator,
    label: "SIMULATE",
    title: "What-If Decisions",
    description:
      "Test changes to budget, pricing, demand or inventory and understand their potential business impact.",
    tags: ["Scenarios", "Profit", "Risk"],
  },
  {
    number: "06",
    icon: Brain,
    label: "ASK",
    title: "AI Business Copilot",
    description:
      "Ask questions about your business and get explanations grounded in your actual business data.",
    tags: ["Ask", "Explain", "Decide"],
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">

        {/* Header */}
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="features-kicker">
            <span></span>
            THE INTELLIGENCE LAYER
          </div>

          <h2>
            Everything you need to
            <br />
            <em>make the next move.</em>
          </h2>

          <p>
            VyaparIQ connects analytics, prediction and AI
            recommendations into one decision-making system
            for your business.
          </p>
        </motion.div>


        {/* Feature Grid */}
        <div className="features-grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                className={`feature-card ${
                  index === 3 ? "feature-card-highlight" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
              >

                {/* Top */}
                <div className="feature-card-top">

                  <div className="feature-number">
                    {feature.number}
                  </div>

                  <div className="feature-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                </div>


                {/* Content */}
                <div className="feature-card-content">

                  <span className="feature-label">
                    {feature.label}
                  </span>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                </div>


                {/* Tags */}
                <div className="feature-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>


                {/* Hover decoration */}
                <div className="feature-card-glow"></div>

              </motion.article>
            );
          })}

        </div>


        {/* Bottom statement */}
        <motion.div
          className="features-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="features-bottom-line"></div>

          <div className="features-bottom-content">
            <span>ONE INTELLIGENCE SYSTEM</span>

            <p>
              From <strong>raw business data</strong> to
              <strong> confident action.</strong>
            </p>
          </div>

          <div className="features-bottom-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;