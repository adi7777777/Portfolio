import { Github, ExternalLink, ArrowRight, MapPin, CheckSquare, ShieldCheck, Search, Sparkles } from 'lucide-react'

const ICONS = { MapPin, CheckSquare, ShieldCheck, Search, Sparkles }

export default function ProjectCard({ project, onOpen }) {
  const Icon = ICONS[project.icon]

  return (
    <article className="project-card reveal">
      <div className="project-card-top">
        <div className="project-icon">
          <Icon size={20} />
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <button className="project-more" onClick={() => onOpen(project)}>
        View details
        <ArrowRight size={14} />
      </button>
    </article>
  )
}
