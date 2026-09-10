import useReveal from '../hooks/useReveal'

const FACTS = [
  { label: 'Experience', value: '4+ Years' },
  { label: 'Primary Focus', value: 'Frontend Development' },
  { label: 'Currently Learning', value: 'React, AEM, Express' },
  { label: 'Location', value: 'India' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">// about</span>
          <h2 className="section-title">A bit about how I work</h2>
        </div>

        <div className="about-grid" ref={ref}>
          <div className="about-text reveal">
            <p>
              I&rsquo;m a Frontend Developer with around <strong>3 years of professional
              experience</strong> building web interfaces — with a strong foundation in{' '}
              <strong>HTML, CSS, and JavaScript</strong>, and hands-on experience using{' '}
              <strong>jQuery</strong> for dynamic UI behaviour.
            </p>
            <p>
              Most of my professional work has involved building{' '}
              <strong>responsive interfaces and templates</strong> that hold up across devices
              and browsers. I care about clean markup, predictable layouts, and interfaces that
              are easy for the next developer to pick up.
            </p>
            <p>
              I&rsquo;m currently deepening my knowledge of <strong>React and the MERN
              stack</strong> — moving from template-driven frontend work toward building
              component-based, stateful applications. My goal is to keep building{' '}
              <strong>scalable, maintainable web applications</strong> as part of a product
              team.
            </p>
          </div>

          <aside className="quick-facts reveal">
            <p className="quick-facts-title">Quick Facts</p>
            {FACTS.map((fact) => (
              <div className="fact-row" key={fact.label}>
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
