import { useState } from 'react'
import { Mail, Linkedin, Github, Info, CheckCircle2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const INITIAL_FORM = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // No backend is wired up — this only simulates a successful send.
      setSubmitted(true)
      setForm(INITIAL_FORM)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-inner" ref={ref}>
        <div className="reveal">
          <h2 className="contact-title">Let&rsquo;s build something together.</h2>
          <p className="contact-desc">
            Open to Frontend Developer, React Developer, and Full Stack JavaScript roles. Feel
            free to reach out directly, or use the form.
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:raoashrith16601@gmail.com">
              <Mail size={18} />
              raoashrith16601@gmail.com
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/ashrith-rao-647123207/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              linkedin.com/in/ashrith-rao
            </a>
            <a
              className="contact-link"
              href="https://github.com/adi7777777"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              https://github.com/adi7777777
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <p className="form-notice">
            <Info size={15} />
            This is a frontend-only demo form. No backend is connected, so messages sent here
            aren&rsquo;t actually delivered — please use the email above instead.
          </p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p className="form-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p className="form-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p className="form-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Send Message
          </button>

          {submitted && (
            <p className="form-success">
              <CheckCircle2 size={16} />
              Looks good! (Demo only — nothing was actually sent.)
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
