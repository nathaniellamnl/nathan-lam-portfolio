import { useEffect, useRef, useState } from 'react'
import './App.css'
import { education, experience, profile, skillGroups } from './data'

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealSection({
  id,
  children,
  className = '',
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useReveal()
  return (
    <section id={id} ref={ref} className={`section reveal ${className}`.trim()}>
      {children}
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__grid" />
      <svg viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="320" cy="320" r="210" stroke="#0A1628" strokeWidth="1.5" opacity="0.35" />
        <circle cx="320" cy="320" r="150" stroke="#0A1628" strokeWidth="1.5" opacity="0.25" />
        <circle cx="320" cy="320" r="90" stroke="#FF5A1F" strokeWidth="2" opacity="0.7" />
        <path
          d="M320 110 L470 210 L470 430 L320 530 L170 430 L170 210 Z"
          stroke="#0A1628"
          strokeWidth="2"
          opacity="0.5"
        />
        <path d="M170 210 L470 430" stroke="#D4F34A" strokeWidth="2.5" />
        <path d="M470 210 L170 430" stroke="#0A1628" strokeWidth="1.5" opacity="0.4" />
        <circle cx="320" cy="110" r="8" fill="#FF5A1F" />
        <circle cx="470" cy="210" r="8" fill="#0A1628" />
        <circle cx="470" cy="430" r="8" fill="#D4F34A" />
        <circle cx="320" cy="530" r="8" fill="#0A1628" />
        <circle cx="170" cy="430" r="8" fill="#FF5A1F" />
        <circle cx="170" cy="210" r="8" fill="#0A1628" />
        <circle cx="320" cy="320" r="14" fill="#0A1628" />
        <circle cx="320" cy="320" r="6" fill="#D4F34A" />
        <rect x="250" y="280" width="40" height="8" fill="#FF5A1F" opacity="0.85" />
        <rect x="350" y="352" width="48" height="8" fill="#0A1628" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <a className="nav__brand" href="#top">
          Nathan Lam
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Work</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <HeroVisual />
          <div className="hero__content">
            <h1 className="hero__brand">{profile.name}</h1>
            <p className="hero__headline">{profile.title}</p>
            <p className="hero__lede">{profile.summary}</p>
            <div className="hero__ctas">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a
                className="btn btn--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="meta-bar">
              <span>{profile.location}</span>
              <span>{profile.languages.join(' · ')}</span>
            </div>
          </div>
        </section>

        <RevealSection id="about">
          <p className="section__label">About</p>
          <h2 className="section__title">Requirements to intelligent software</h2>
          <p className="about__text">
            Senior software / systems analyst with an M.S. in Computer Science (ML &amp; AI).
            I work with business users to turn needs into specifications, stories, and workflows,
            then support design and delivery of AI-enabled applications—RAG pipelines, knowledge
            bases, LLM features, and automation—with privacy and governance in view.
          </p>
        </RevealSection>

        <RevealSection id="experience">
          <p className="section__label">Experience</p>
          <h2 className="section__title">Selected work</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="job">
                <p className="job__period">{job.period}</p>
                <div>
                  <h3 className="job__company">{job.company}</h3>
                  <p className="job__role">{job.role}</p>
                  <ul className="job__tags">
                    {job.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {'note' in job && job.note ? <p className="job__note">{job.note}</p> : null}
                  <ul className="job__points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="skills">
          <p className="section__label">Capabilities</p>
          <h2 className="section__title">How I work</h2>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3 className="skill-group__label">{group.label}</h3>
                <ul className="skill-group__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="education">
          <p className="section__label">Education</p>
          <h2 className="section__title">Background</h2>
          <ul className="edu-list">
            {education.map((edu) => (
              <li key={edu.school}>
                <h3 className="edu-list__school">{edu.school}</h3>
                <p className="edu-list__degree">{edu.degree}</p>
                {edu.detail ? <p className="edu-list__detail">{edu.detail}</p> : null}
              </li>
            ))}
          </ul>
        </RevealSection>
      </main>

      <footer id="contact" className="contact">
        <div className="section">
          <p className="section__label">Contact</p>
          <h2 className="section__title">Let&apos;s talk about the next system</h2>
          <div className="contact__row">
            <a className="contact__link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="contact__link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nl-nathan-lam
            </a>
          </div>
          <div className="footer">
            <span>Based in {profile.location}</span>
            <span>© {new Date().getFullYear()} Nathan Lam</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
