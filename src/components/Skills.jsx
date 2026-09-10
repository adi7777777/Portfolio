import { Layout, Server, Database, Wrench, Braces } from 'lucide-react'
import { skillGroups } from '../data/skills'
import useReveal from '../hooks/useReveal'

const ICONS = { Layout, Server, Database, Wrench, Braces }

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">$ skills --list</span>
          <h2 className="section-title">What I build with</h2>
          <p className="section-desc">
            A frontend-first toolkit, with backend and database skills I&rsquo;m actively
            building toward a full MERN stack.
          </p>
        </div>

        <div className="skills-grid" ref={ref}>
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon]
            return (
              <div className="skill-card reveal" key={group.category}>
                <div className="skill-card-head">
                  <Icon size={18} />
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
