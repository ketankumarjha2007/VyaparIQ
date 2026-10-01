import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./IntelligenceEngine.css";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Business data",
    description:
      "Sales, inventory, expenses and customer activity become a single source of business truth.",
    signal: "INPUT",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Analytics",
    description:
      "VyaparIQ identifies patterns, trends and changes across your business.",
    signal: "UNDERSTAND",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Prediction",
    description:
      "Historical behaviour becomes a signal for what your business may need next.",
    signal: "ANTICIPATE",
  },
  {
    number: "04",
    icon: Brain,
    title: "AI decision",
    description:
      "The intelligence layer turns business signals into clear, explainable actions.",
    signal: "DECIDE",
  },
];

function IntelligenceEngine() {
  return (
    <section className="intelligence-engine" id="intelligence-engine">
      <div className="intelligence-engine-bg" />

      <div className="intelligence-engine-container">

        {/* HEADER */}
        <motion.div
          className="intelligence-engine-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="intelligence-engine-kicker">
            <Sparkles size={13} />
            THE INTELLIGENCE ENGINE
          </div>

          <h2>
            Don't just see
            <br />
            <span>what happened.</span>
          </h2>

          <p>
            Understand what is happening, what could happen next,
            and which decision deserves your attention.
          </p>
        </motion.div>


        {/* PIPELINE */}
        <div className="intelligence-pipeline">

          <div className="pipeline-line" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="pipeline-step"
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <div className="pipeline-top">

                  <span className="pipeline-number">
                    {step.number}
                  </span>

                  <span className="pipeline-signal">
                    {step.signal}
                  </span>

                </div>

                <div className="pipeline-icon">
                  <Icon size={20} />
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="pipeline-arrow">
                    <ArrowRight size={15} />
                  </div>
                )}

              </motion.div>
            );
          })}

        </div>


        {/* BOTTOM STATEMENT */}
        <motion.div
          className="intelligence-engine-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          <div className="intelligence-engine-line" />

          <div className="intelligence-engine-bottom-content">

            <div className="intelligence-pulse">
              <span />
              Intelligence layer
            </div>

            <p>
              Every signal becomes context.
              Every insight becomes a decision.
            </p>

          </div>

          <div className="intelligence-engine-line" />

        </motion.div>

      </div>
    </section>
  );
}

export default IntelligenceEngine;