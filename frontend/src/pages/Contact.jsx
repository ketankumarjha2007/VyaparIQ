import { motion } from "motion/react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-grid"></div>

        <div className="contact-container contact-hero-inner">

          <motion.div
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            LET'S TALK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Have a business
            <br />
            problem to <em>solve?</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Tell us what you're working on, what you're trying to
            understand, or where your business gets stuck.
          </motion.p>

        </div>
      </section>

      {/* CONTACT WORKSPACE */}
      <section className="contact-workspace-section">
        <div className="contact-container contact-workspace">

          {/* INFO */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-section-label">
              <span>01</span>
              START A CONVERSATION
            </div>

            <h2>
              Let's understand
              <br />
              the <span>problem.</span>
            </h2>

            <p>
              Whether you're exploring VyaparIQ, thinking about a
              business intelligence problem, or simply want to
              share an idea — we'd love to hear from you.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MessageSquare size={17} />
                </div>

                <div>
                  <span>GENERAL QUESTIONS</span>
                  <strong>Tell us what's on your mind</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Sparkles size={17} />
                </div>

                <div>
                  <span>PRODUCT & IDEAS</span>
                  <strong>Share what you'd like to see</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <span>RESPONSE</span>
                  <strong>We'll get back to you soon</strong>
                </div>
              </div>

            </div>

            <div className="contact-note">
              <Mail size={14} />

              <span>
                Use the form to start a conversation.
              </span>
            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-form-heading">
              <div>
                <span>YOUR MESSAGE</span>
                <h3>Tell us more.</h3>
              </div>

              <div className="contact-form-mark">
                <MessageSquare size={16} />
              </div>
            </div>

            <form className="contact-form">

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@business.com"
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  What can we help with?
                </label>

                <select id="contact-subject" defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="product">
                    Product question
                  </option>
                  <option value="business">
                    Business intelligence
                  </option>
                  <option value="feedback">
                    Feedback or suggestion
                  </option>
                  <option value="partnership">
                    Partnership
                  </option>
                  <option value="other">
                    Something else
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows="6"
                  placeholder="Tell us what you're trying to solve..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send message
                <ArrowRight size={16} />
              </button>

              <p className="contact-form-footnote">
                We use your message only to respond to your enquiry.
              </p>

            </form>

          </motion.div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final">
        <div className="contact-container">

          <motion.div
            className="contact-final-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div>
              <span>READY TO EXPLORE?</span>

              <h2>
                See what your
                <br />
                business can <em>tell you.</em>
              </h2>
            </div>

            <Link
              to="/register"
              className="contact-final-button"
            >
              Start with VyaparIQ
              <ArrowRight size={16} />
            </Link>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default Contact;