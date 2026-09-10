import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const ref = useReveal()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">// projects</span>
          <h2 className="section-title">Things I&rsquo;ve built</h2>
          <p className="section-desc">
            A mix of practice projects while leveling up in React and the MERN stack.
          </p>
        </div>

        <div className="projects-grid" ref={ref}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
