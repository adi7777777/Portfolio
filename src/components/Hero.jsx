import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

// The lines rendered inside the terminal card, typed out on load.
// Kept as plain strings (with manual token markup) rather than a
// syntax-highlighting library, since the visual only needs to model
// one small, fixed object.
const CODE_LINES = [
  { text: "const developer = {", tokens: [{ t: 'text', v: 'const developer = {' }] },
  {
    text: "  name: 'Ashrith Rao',",
    tokens: [
      { t: 'key', v: '  name' },
      { t: 'punct', v: ': ' },
      { t: 'string', v: "'Ashrith Rao'" },
      { t: 'punct', v: ',' },
    ],
  },
  {
    text: "  role: 'Frontend Developer',",
    tokens: [
      { t: 'key', v: '  role' },
      { t: 'punct', v: ': ' },
      { t: 'string', v: "'Frontend Developer'" },
      { t: 'punct', v: ',' },
    ],
  },
  {
    text: "  experience: '3 years',",
    tokens: [
      { t: 'key', v: '  experience' },
      { t: 'punct', v: ': ' },
      { t: 'string', v: "'3 years'" },
      { t: 'punct', v: ',' },
    ],
  },
  {
    text: "  stack: ['HTML', 'CSS', 'JS', 'React'],",
    tokens: [
      { t: 'key', v: '  stack' },
      { t: 'punct', v: ': [' },
      { t: 'string', v: "'HTML', " },
      { t: 'string', v: "'CSS', " },
      { t: 'string', v: "'JS', " },
      { t: 'string', v: "'React'" },
      { t: 'punct', v: '],' },
    ],
  },
  {
    text: "  learning: 'MERN Stack',",
    tokens: [
      { t: 'key', v: '  learning' },
      { t: 'punct', v: ': ' },
      { t: 'string', v: "'MERN Stack'" },
      { t: 'punct', v: ',' },
    ],
  },
  {
    text: "  openToWork: true,",
    tokens: [
      { t: 'key', v: '  openToWork' },
      { t: 'punct', v: ': ' },
      { t: 'keyword', v: 'true' },
      { t: 'punct', v: ',' },
    ],
  },
  { text: "};", tokens: [{ t: 'text', v: '};' }] },
]

function TokenLine({ tokens }) {
  return tokens.map((tok, i) => {
    if (tok.t === 'key') return <span key={i} className="tk-key">{tok.v}</span>
    if (tok.t === 'string') return <span key={i} className="tk-string">{tok.v}</span>
    if (tok.t === 'keyword') return <span key={i} className="tk-keyword">{tok.v}</span>
    if (tok.t === 'punct') return <span key={i} className="tk-punct">{tok.v}</span>
    return <span key={i}>{tok.v}</span>
  })
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const timer = setTimeout(() => setVisibleLines((n) => n + 1), 220)
    return () => clearTimeout(timer)
  }, [visibleLines])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="reveal in-view">
          <p className="hero-kicker">
            $ whoami<span className="cursor" aria-hidden="true"></span>
          </p>
          <h1 className="hero-title">
            Hi, I&rsquo;m Ashrith Rao
            <br />
            <span className="highlight">Frontend Developer</span>
          </h1>
          <p className="hero-desc">
            Frontend Developer with 3 years of professional experience building responsive,
            user-focused web interfaces. Currently expanding my expertise in React and the MERN
            stack.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
              <ArrowRight size={16} />
            </button>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Download Resume
              <Download size={16} />
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/adi7777777" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ashrith-rao" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
            <a href="mailto:raoashrith16601@gmail.com" aria-label="Send an email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="terminal reveal in-view" aria-hidden="true">
          <div className="terminal-bar">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">developer.js</span>
          </div>
          <div className="terminal-body">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i}>
                <span className="line-num">{i + 1}</span>
                <TokenLine tokens={line.tokens} />
                {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                  <span className="terminal-cursor"></span>
                )}
              </div>
            ))}
            {visibleLines >= CODE_LINES.length && (
              <div>
                <span className="line-num"></span>
                <span className="terminal-cursor"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
