import useReveal from '../hooks/useReveal'

// Replace with your real employment history — company name, dates,
// and responsibilities.
const EXPERIENCE = [
  {
    role: 'Frontend Developer',
    company: '[Company Name]',
    period: '[Start Year] — Present',
    responsibilities: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript',
      'Developed reusable frontend components and email/web templates',
      'Worked with jQuery for dynamic UI interactions',
      'Collaborated closely with designers and developers to ship pages on schedule',
      'Debugged and optimized frontend issues across the codebase',
      'Ensured cross-browser and cross-device compatibility for every release',
    ],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">// experience</span>
          <h2 className="section-title">Where I&rsquo;ve worked</h2>
        </div>

        <div className="timeline reveal" ref={ref}>
          {EXPERIENCE.map((item) => (
            <div className="timeline-item" key={item.company}>
              <span className="timeline-dot"></span>
              <p className="timeline-period">{item.period}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul className="timeline-list">
                {item.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
