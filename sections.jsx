/* All section components for the Rajat Singh portfolio */

/* ==================== NAV ==================== */
function Nav({ theme, setTheme }) {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  const active = useActiveSection(['hero', ...items.map(i => i.id)]);
  const [open, setOpen] = useState(false);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      <div className="nav-wrap">
        <nav className="nav" aria-label="Primary">
          <a href="#hero" onClick={go('hero')} className="nav-logo">
            <span className="nav-logo-dot"></span>
            <span>rajat<span style={{color:'var(--violet-2)'}}>.</span>dev</span>
          </a>
          <div className="nav-links">
            {items.map(it => (
              <a key={it.id} href={`#${it.id}`} onClick={go(it.id)}
                 className={`nav-link ${active === it.id ? 'active' : ''}`}>
                {it.label}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={go('contact')} className="btn btn-primary nav-cta">
            Let's talk <Icons.ArrowRight size={14} />
          </a>
          <button className="nav-theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme">
            {theme === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
          </button>
          <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icons.Menu size={18} />
          </button>
        </nav>
      </div>

      <div className={`mobile-sheet ${open ? 'open' : ''}`}>
        <button className="mobile-sheet-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <Icons.X size={18} />
        </button>
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`} onClick={go(it.id)}>{it.label}</a>
        ))}
      </div>
    </>
  );
}

/* ==================== HERO ==================== */
function Hero() {
  const typed = useTyping([
    'B.Tech CS & IT Student',
    'Data Science Enthusiast',
    'AI & ML Learner',
    'Python Developer',
    'Open Source Contributor',
  ]);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge reveal">
              <span className="hero-badge-dot"></span>
              Available for internships &amp; collaborations
            </div>

            <h1 className="reveal reveal-delay-1">
              <div>Hi, I'm</div>
              <div className="hero-name-wrap">
                <span className="grad-text">Rajat Singh</span>
              </div>
            </h1>

            <div className="hero-typing reveal reveal-delay-2">{typed}</div>

            <p className="hero-tagline reveal reveal-delay-3">
              <span>Turning data into insights</span> and ideas into intelligent solutions.
              B.Tech student exploring Data Science, AI, and Machine Learning — building
              real-world projects one commit at a time.
            </p>

            <div className="hero-ctas reveal reveal-delay-4">
              <a href="#" className="btn btn-primary"
                 onClick={(e) => { e.preventDefault(); alert('Resume download will be available soon.'); }}>
                <Icons.Download /> Download Resume
              </a>
              <a href="#projects" className="btn"
                 onClick={(e) => {
                   e.preventDefault();
                   const el = document.getElementById('projects');
                   if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
                 }}>
                View Projects <Icons.ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn btn-ghost"
                 onClick={(e) => {
                   e.preventDefault();
                   const el = document.getElementById('contact');
                   if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
                 }}>
                Contact Me
              </a>
            </div>

            <div className="hero-socials reveal reveal-delay-5">
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-2)', letterSpacing: '0.15em', textTransform: 'uppercase', marginRight: '0.5rem' }}>
                Find me
              </span>
              <a className="social-btn" href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icons.Linkedin /></a>
              <a className="social-btn" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub"><Icons.Github /></a>
              <a className="social-btn" href="mailto:rajat@example.com" aria-label="Email"><Icons.Mail /></a>
            </div>
          </div>

          <div className="hero-avatar-wrap reveal reveal-delay-2">
            <div className="hero-ring"></div>
            <div className="hero-ring-2"></div>
            <div className="hero-orbit">
              <div className="hero-orbit-dot"></div>
            </div>
            <div className="hero-avatar">
              <span className="hero-avatar-initials">RS</span>
            </div>
            <div className="hero-orbit-dot-2"></div>

            <div className="hero-corner-tags">
              <div className="hero-corner-tag">
                <span className="dot" style={{background: 'var(--violet)'}}></span> Python
              </div>
              <div className="hero-corner-tag">
                <span className="dot" style={{background: 'var(--blue)'}}></span> AI / ML
              </div>
              <div className="hero-corner-tag">
                <span className="dot" style={{background: 'var(--pink)'}}></span> SQL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-hint-line"></div>
      </div>
    </section>
  );
}

/* ==================== ABOUT ==================== */
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">01 &nbsp;/&nbsp; About Me</div>
          <h2>A curious student, an <span className="grad-text">aspiring engineer</span>.</h2>
        </div>

        <div className="about-grid">
          <div className="about-portrait reveal">
            <div className="about-portrait-monogram">RS</div>
            <div className="about-portrait-meta">
              <div>
                <small>Based in</small>
                <strong>Moradabad, IN</strong>
              </div>
              <div style={{textAlign: 'right'}}>
                <small>Focus</small>
                <strong>Data · AI · ML</strong>
              </div>
            </div>
          </div>

          <div className="about-prose reveal reveal-delay-1">
            <p>
              I'm a <strong style={{color:'var(--text-0)'}}>B.Tech Computer Science &amp; Information
              Technology</strong> student (2024–2028) at Mahatma Jyotiba Phule Rohilkhand University,
              Bareilly. I'm passionate about <span className="grad-text-accent" style={{fontWeight: 500}}>
              Data Science, Artificial Intelligence, Machine Learning, and Python</span> — and I love
              solving real-world problems through technology.
            </p>
            <p>
              I enjoy learning emerging technologies, contributing to impactful open-source projects,
              and continuously sharpening my technical skills. Whether it's a database-driven system,
              a data analysis notebook, or a small AI experiment — I'm always shipping something new.
            </p>

            <div className="about-facts">
              <div className="fact">
                <small>Degree</small>
                <strong>B.Tech CS &amp; IT</strong>
              </div>
              <div className="fact">
                <small>Batch</small>
                <strong>2024 – 2028</strong>
              </div>
              <div className="fact">
                <small>University</small>
                <strong>MJPRU, Bareilly</strong>
              </div>
              <div className="fact">
                <small>Interests</small>
                <strong>Data Science, AI, ML</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== STATS ==================== */
function Stats() {
  const items = [
    { end: 1, suffix: '+', label: 'Projects Completed' },
    { end: 3, suffix: '',  label: 'Internships Completed' },
    { end: 5, suffix: '+', label: 'Open Source Contributions' },
    { end: 2, suffix: '',  label: 'Certificates Earned' },
  ];
  return (
    <section id="stats" style={{paddingTop: 0}}>
      <div className="container">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div key={s.label} className={`glass stat reveal reveal-delay-${i+1}`}>
              <div className="stat-num"><Counter end={s.end} suffix={s.suffix} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== SKILLS ==================== */
function SkillBar({ label, value, variant = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && ref.current) {
        ref.current.style.width = value + '%';
        io.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current.parentElement);
    return () => io.disconnect();
  }, [value]);
  return (
    <div className="skill-row">
      <div className="skill-row-label">{label}</div>
      <div className="skill-bar">
        <div ref={ref} className={`skill-bar-fill ${variant}`}></div>
      </div>
      <div className="skill-pct">{value}%</div>
    </div>
  );
}

function Skills() {
  const groups = [
    {
      title: 'Programming',
      icon: <Icons.Code />,
      bars: [
        { label: 'Python', value: 85 },
        { label: 'C++',    value: 70 },
      ],
      chips: ['Python', 'C++'],
      chipClass: '',
    },
    {
      title: 'Libraries',
      icon: <Icons.Layers />,
      bars: [
        { label: 'NumPy',        value: 80 },
        { label: 'Pandas',       value: 82 },
        { label: 'Matplotlib',   value: 72 },
        { label: 'Scikit-learn', value: 65 },
      ],
      chips: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      chipClass: 'chip-blue',
      variant: 'blue',
    },
    {
      title: 'Databases',
      icon: <Icons.Database />,
      bars: [
        { label: 'SQL',  value: 78 },
        { label: 'DBMS', value: 75 },
      ],
      chips: ['SQL', 'DBMS'],
      chipClass: 'chip-cyan',
    },
    {
      title: 'Tools',
      icon: <Icons.Tool />,
      chips: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Canva', 'AI Assisted Tools'],
      chipClass: 'chip-pink',
    },
    {
      title: 'Focus Areas',
      icon: <Icons.Brain />,
      chips: ['Data Science', 'Artificial Intelligence', 'Machine Learning'],
      chipClass: '',
      big: true,
    },
    {
      title: 'Currently Learning',
      icon: <Icons.Sparkles />,
      chips: ['Deep Learning', 'NLP', 'Data Visualization', 'MLOps basics'],
      chipClass: 'chip-blue',
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">02 &nbsp;/&nbsp; Skills &amp; Stack</div>
          <h2>Tools I <span className="grad-text">use every day</span>.</h2>
          <p style={{color: 'var(--text-2)', maxWidth: 620, marginTop: '0.5rem'}}>
            A snapshot of languages, libraries, databases and tools I've been building with —
            plus what I'm learning next.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((g, gi) => (
            <div key={g.title} className={`glass skill-card reveal reveal-delay-${(gi % 3) + 1}`}>
              <div className="skill-head">
                <div className="skill-icon">{g.icon}</div>
                <div className="skill-title">{g.title}</div>
                <div className="skill-count">
                  {(g.bars?.length || g.chips.length)} {(g.bars?.length || g.chips.length) === 1 ? 'item' : 'items'}
                </div>
              </div>

              {g.bars && g.bars.map(b => (
                <SkillBar key={b.label} label={b.label} value={b.value} variant={g.variant || ''} />
              ))}

              {g.chips && (
                <div className="skill-chips">
                  {g.chips.map(c => (
                    <span key={c} className={`chip ${g.chipClass}`}>{c}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== EXPERIENCE ==================== */
function Experience() {
  const items = [
    {
      when: 'May 2026 — Present',
      role: 'Open Source Contributor',
      org: 'GirlScript Summer of Code (GSSoC)',
      bullets: [
        'Contributed to open-source projects across the community',
        'Fixed issues and improved project functionality',
        'Collaborated with distributed project teams',
      ],
    },
    {
      when: 'June 2026',
      role: 'Web Development Intern',
      org: 'InAmigos Foundation · Remote',
      bullets: [
        'Built web pages using AI-assisted development tools',
        'Improved website UI/UX for public-facing pages',
        'Enhanced overall website functionality and reliability',
      ],
    },
    {
      when: 'March 2026',
      role: 'Graphic Designer Intern',
      org: 'InAmigos Foundation',
      bullets: [
        'Designed graphics and layouts using Canva',
        'Created social media creatives and campaign visuals',
        'Worked on branding materials and visual identity',
      ],
    },
    {
      when: 'Aug 2025 — Jan 2026',
      role: 'Subject Matter Expert · Mathematics',
      org: 'Physics Wallah · Freelance',
      bullets: [
        'Reviewed Mathematics solutions for accuracy',
        'Ensured correctness and clarity of solution steps',
        'Prepared educational content for learners',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">03 &nbsp;/&nbsp; Experience</div>
          <h2>Building, contributing, <span className="grad-text">shipping</span>.</h2>
        </div>

        <div className="timeline">
          {items.map((it, i) => (
            <div key={i} className={`tl-item reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="tl-dot"></div>
              <div className="glass tl-card">
                <div className="tl-when">{it.when}</div>
                <div className="tl-role">{it.role}</div>
                <div className="tl-org">{it.org}</div>
                <ul className="tl-bullets">
                  {it.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== PROJECTS ==================== */
function Projects() {
  const featured = {
    glyph: '{ Cricket }',
    title: 'Cricket Management System',
    desc: 'A database-driven system for managing players, teams, matches and records. Built with a normalized schema and expressive SQL queries for stats, filtering, and reporting.',
    tags: ['SQL', 'DBMS', 'Schema Design'],
    live: '#',
    github: '#',
  };
  const soon = [
    { glyph: 'Data', title: 'Data Analysis Dashboard', desc: 'Interactive dashboard exploring a real-world dataset — Pandas + Matplotlib driven insights and visualizations.', tags: ['Pandas', 'Matplotlib', 'Analytics'] },
    { glyph: 'ML',   title: 'Machine Learning Projects', desc: 'A collection of ML experiments — regression, classification, and clustering — using Scikit-learn.', tags: ['Scikit-learn', 'ML', 'Notebooks'] },
    { glyph: 'AI',   title: 'AI Applications',           desc: 'Applied AI experiments including NLP mini-projects and vision models. More coming soon.',      tags: ['AI', 'NLP', 'Vision'] },
  ];

  const Card = ({ glyph, title, desc, tags, live, github, isSoon }) => (
    <div className={`glass project-card reveal ${isSoon ? 'project-soon' : ''}`}>
      <div className="project-cover">
        <div className="project-cover-lines"></div>
        <div className="project-cover-glyph">{glyph}</div>
        {isSoon && <div className="soon-badge">Coming Soon</div>}
      </div>
      <div className="project-body">
        <div className="project-title">{title}</div>
        <div className="project-desc">{desc}</div>
        <div className="project-tags">
          {tags.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
        {!isSoon && (
          <div className="project-actions">
            <a className="btn btn-primary" href={live} target="_blank" rel="noopener">
              <Icons.ExternalLink size={14} /> Live Demo
            </a>
            <a className="btn" href={github} target="_blank" rel="noopener">
              <Icons.Github size={14} /> GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">04 &nbsp;/&nbsp; Projects</div>
          <h2>Things I've built <span className="grad-text">& what's next</span>.</h2>
        </div>

        <div className="projects-grid">
          <Card {...featured} />
          {soon.map(s => <Card key={s.title} {...s} isSoon />)}
        </div>
      </div>
    </section>
  );
}

/* ==================== EDUCATION ==================== */
function Education() {
  const items = [
    {
      year: '2024 — 2028',
      degree: 'Bachelor of Technology',
      sub: 'Computer Science & Information Technology',
      inst: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly',
      course: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems'],
      current: true,
    },
    {
      year: '2023 — 2024',
      degree: 'Intermediate (12th)',
      sub: 'Science Stream',
      inst: 'Swaroopi Devi Memorial Inter College, Moradabad',
    },
    {
      year: '2021 — 2022',
      degree: 'High School (10th)',
      sub: 'Secondary Education',
      inst: 'Swaroopi Devi Memorial Inter College, Moradabad',
    },
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">05 &nbsp;/&nbsp; Education</div>
          <h2>From <span className="grad-text">school benches to server rooms</span>.</h2>
        </div>

        <div className="edu-grid">
          {items.map((it, i) => (
            <div key={i} className={`glass edu-card reveal reveal-delay-${i+1}`}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'0.75rem'}}>
                <div className="edu-year">{it.year}</div>
                {it.current && (
                  <span className="chip" style={{fontSize:'0.68rem'}}>
                    <span style={{width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e'}}></span>
                    Current
                  </span>
                )}
              </div>
              <div className="edu-degree">{it.degree}</div>
              <div style={{color:'var(--text-2)', fontSize:'0.85rem', marginTop:'-0.35rem'}}>{it.sub}</div>
              <div className="edu-inst">{it.inst}</div>
              {it.course && (
                <div className="edu-course">
                  <small>Relevant Coursework</small>
                  {it.course.map(c => <div key={c} className="edu-course-item">{c}</div>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== ACHIEVEMENTS + CERTS ==================== */
function AchievementsCerts() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">06 &nbsp;/&nbsp; Wins &amp; Certifications</div>
          <h2>Milestones along <span className="grad-text">the way</span>.</h2>
        </div>

        <div className="two-col">
          <div className="glass list-card reveal">
            <h3><Icons.Trophy /> Achievements</h3>
            <ul>
              <li>Research Paper Presentation at <strong style={{color:'var(--text-0)'}}>Education 5.0 National Seminar</strong>, MJPRU Bareilly.</li>
              <li>Organizing Team Member — <strong style={{color:'var(--text-0)'}}>India AI Impact Summit 2026</strong> Pre-Summit Event.</li>
            </ul>
          </div>

          <div className="glass list-card reveal reveal-delay-1">
            <h3><Icons.Award /> Certifications</h3>
            <ul>
              <li><strong style={{color:'var(--text-0)'}}>IBM</strong> — Python for Data Science, AI &amp; Development.</li>
              <li><strong style={{color:'var(--text-0)'}}>Diploma in Computer Application</strong> (DCA).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== CAREER JOURNEY ==================== */
function Journey() {
  const nodes = [
    { year: '2021—22', title: 'High School', sub: 'Class 10' },
    { year: '2023—24', title: 'Intermediate', sub: 'Class 12' },
    { year: '2024',    title: 'B.Tech Begins', sub: 'MJPRU Bareilly' },
    { year: '2025',    title: 'SME @ PW', sub: 'Mathematics · Freelance' },
    { year: '2026',    title: 'Internships', sub: 'InAmigos · GSSoC' },
    { year: 'Now',     title: 'Building & Learning', sub: 'DS · AI · ML', current: true },
  ];
  return (
    <section id="journey">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">07 &nbsp;/&nbsp; Career Journey</div>
          <h2>The full <span className="grad-text">timeline</span>.</h2>
        </div>

        <div className="journey">
          {nodes.map((n, i) => (
            <div key={i} className={`journey-node reveal reveal-delay-${(i % 5) + 1} ${n.current ? 'current' : ''}`}>
              <div className="journey-year">{n.year}</div>
              <div className="journey-dot"></div>
              <div className="journey-title">{n.title}</div>
              <div className="journey-sub">{n.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== CONTACT ==================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;
    setSent(true);
    setValues({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const rows = [
    { icon: <Icons.Mail />, label: 'Email', value: 'rajat.singh@example.com', href: 'mailto:rajat.singh@example.com' },
    { icon: <Icons.Phone />, label: 'Phone', value: '+91 · Available on request', href: '#' },
    { icon: <Icons.Linkedin />, label: 'LinkedIn', value: 'linkedin.com/in/rajat-singh', href: 'https://linkedin.com/' },
    { icon: <Icons.Github />, label: 'GitHub', value: 'github.com/rajat-singh', href: 'https://github.com/' },
    { icon: <Icons.MapPin />, label: 'Location', value: 'Moradabad, Uttar Pradesh, India', href: '#' },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">08 &nbsp;/&nbsp; Contact</div>
          <h2>Let's build <span className="grad-text">something together</span>.</h2>
          <p style={{color: 'var(--text-2)', maxWidth: 620, marginTop: '0.5rem'}}>
            Open to internships, collaborations, and interesting problems in data, AI, and beyond.
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass contact-info reveal">
            {rows.map(r => (
              <a key={r.label} className="contact-row" href={r.href} target={r.href.startsWith('http') ? '_blank' : '_self'} rel="noopener">
                <div className="contact-row-icon">{r.icon}</div>
                <div>
                  <div className="contact-row-label">{r.label}</div>
                  <div className="contact-row-value">{r.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form className="glass form-card reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required placeholder="Your full name"
                     value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required placeholder="you@example.com"
                     value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" required placeholder="Tell me a bit about your project or opportunity…"
                        value={values.message} onChange={(e) => setValues({...values, message: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              <Icons.Send size={14} /> Send Message
            </button>
            <div className={`form-toast ${sent ? 'show' : ''}`}>
              <Icons.Check size={16} /> Thanks! Your message has been sent.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo-dot"></span>
            <span>Rajat Singh</span>
          </div>
          <div className="footer-note">
            © 2026 Rajat Singh · Designed with <span style={{color:'var(--pink)'}}>♥</span> using React &amp; Tailwind CSS
          </div>
          <div className="footer-socials">
            <a className="social-btn" href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icons.Linkedin /></a>
            <a className="social-btn" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub"><Icons.Github /></a>
            <a className="social-btn" href="mailto:rajat@example.com" aria-label="Email"><Icons.Mail /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Expose */
Object.assign(window, {
  Nav, Hero, About, Stats, Skills, Experience, Projects,
  Education, AchievementsCerts, Journey, Contact, Footer,
});
