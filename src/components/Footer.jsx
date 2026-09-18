import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          Ashrith Rao
          <span>Frontend Developer</span>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/adi7777777" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ashrith-rao-647123207/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:raoashrith16601@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-copy">&copy; 2026 Ashrith Rao</p>
      </div>
    </footer>
  )
}
