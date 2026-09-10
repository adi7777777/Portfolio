import useReveal from '../hooks/useReveal'

// Education entries provided by the user.
const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution:
      'Result declared; final semester project submission and certificate in progress.',
    year: '2026',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA) — Cloud Computing Specialization',
    institution: '',
    year: '2022',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">// education</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div style={{ display: 'grid', gap: '16px' }} ref={ref}>
          {EDUCATION.map((edu) => (
            <div className="education-item reveal" key={edu.degree}>
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
              </div>
              <span className="education-year">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
