import { useCallback, useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import StaticMap from "../components/StaticMap";
import Toast from "../components/Toast";

const OFFICE_ADDRESS =
  "Office Number: 401 — 4th Floor, 73-Nishtar Block, Bahria Town, Lahore";
const CONTACT_EMAIL = "info@tamanalabs.com";
const LEADS_STORAGE_KEY = "tamannalabs-leads";

const SERVICES = [
  "Web & App Development",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & AI",
  "IT Consulting",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  else if (values.name.trim().length < 2) errors.name = "Enter your full name.";

  if (!values.email.trim()) errors.email = "Work email is required.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";

  if (values.message && values.message.length > 2000) {
    errors.message = "Keep the message under 2000 characters.";
  }
  return errors;
}

function saveLeadLocally(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || "[]");
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([entry, ...existing].slice(0, 50)));
  } catch {
    // Ignore storage failures — submission still succeeded from the user's perspective.
  }
}

const initial = { name: "", email: "", company: "", service: SERVICES[0], message: "" };

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const closeToast = useCallback(() => {
    setToast((current) => ({ ...current, visible: false }));
  }, []);

  function handleChange(e) {
    const { id, value } = e.target;
    setValues((v) => ({ ...v, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    const payload = {
      ...values,
      submittedAt: new Date().toISOString(),
    };

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Submission failed");
      }

      saveLeadLocally(payload);
      setValues(initial);
      setErrors({});
      setToast({
        visible: true,
        type: "success",
        message:
          "Thanks — your request has been received. A solutions engineer will follow up within one business day.",
      });
    } catch {
      setToast({
        visible: true,
        type: "error",
        message: "We couldn't send your request right now. Please try again or email info@tamanalabs.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Seo
        title="Contact — TamannaLabs"
        description="Tell TamannaLabs what you're building — a solutions engineer will follow up within one business day."
      />
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={closeToast}
      />
      <main id="top">
        <section className="section section--moss page-hero page-hero--contact">
          <div className="wrap contact-intro">
            <h1 className="cta__title">
              Tell us what
              <br />
              you're <em>building.</em>
            </h1>
            <p>
              Send a few details and a solutions engineer will follow up within one
              business day with next steps and a rough estimate.
            </p>

            <div className="contact-intro__meta">
              <div className="contact-info__item">
                <h4>Email</h4>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
              <div className="contact-info__item">
                <h4>Location</h4>
                <p>{OFFICE_ADDRESS}</p>
              </div>
              <div className="contact-info__item">
                <h4>Response time</h4>
                <p>Within one business day</p>
              </div>
            </div>
          </div>

          <div className="wrap contact-map">
            <div className="contact-map-grid">
              <Reveal as="div" variant="fade" delay={0.1} className="contact-map-grid__map">
                <p className="eyebrow">Find Us</p>
                <h3>{OFFICE_ADDRESS}</h3>
                <StaticMap />
              </Reveal>

              <Reveal
                as="div"
                variant="fade"
                delay={0.15}
                id="contact-form"
                className="contact-map-grid__form-col"
              >
                <p className="eyebrow">Get In Touch</p>
                <h3>Send Us a Message</h3>
                <form className="cta__form" onSubmit={handleSubmit} noValidate>
                  <div className={`field${errors.name ? " has-error" : ""}`}>
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jordan Ellis"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <span className="field__error" id="name-error">{errors.name}</span>}
                  </div>

                  <div className={`field${errors.email ? " has-error" : ""}`}>
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jordan@company.com"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span className="field__error" id="email-error">{errors.email}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      value={values.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="service">Service interested in</label>
                    <select id="service" value={values.service} onChange={handleChange}>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className={`field${errors.message ? " has-error" : ""}`}>
                    <label htmlFor="message">Project details (optional)</label>
                    <textarea
                      id="message"
                      placeholder="A sentence or two about what you're building…"
                      value={values.message}
                      onChange={handleChange}
                      maxLength={2000}
                    />
                    {errors.message && <span className="field__error">{errors.message}</span>}
                  </div>

                  <button className="btn" type="submit" disabled={submitting}>
                    {submitting ? "Sending…" : "Request a Proposal"} <span aria-hidden="true">→</span>
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
