import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null)

  // Focus the close button on open, and allow Escape to close —
  // basic keyboard support for the modal.
  useEffect(() => {
    closeBtnRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} ref={closeBtnRef} aria-label="Close project details">
          <X size={18} />
        </button>

        <h3 className="modal-title" id="modal-title">
          {project.title}
        </h3>

        <div className="modal-tech">
          {project.tech.map((t) => (
            <span className="skill-tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="modal-section">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h4>Solution</h4>
          <p>{project.solution}</p>
        </div>

        <div className="modal-section">
          <h4>Features</h4>
          <ul>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4>Challenges</h4>
          <p>{project.challenges}</p>
        </div>

        <div className="modal-section">
          <h4>What I learned</h4>
          <p>{project.learned}</p>
        </div>

        {project.isBackendPlaceholder && (
          <span className="placeholder-note">Backend endpoints are placeholders for now</span>
        )}

        <div className="modal-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
            <Github size={15} />
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
