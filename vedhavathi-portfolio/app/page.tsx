const projects = [
  {
    number: '01',
    type: 'MACHINE LEARNING · PYTHON',
    title: 'AI-Powered Bug Triage Management System',
    description:
      'A bug-triage project that applies text features and classification to help organize incoming bug reports and support the triage workflow.',
    stack: ['Python', 'Flask', 'TF-IDF', 'Naive Bayes', 'REST APIs'],
    tone: 'lavender',
  },
  {
    number: '02',
    type: 'WEB DEVELOPMENT · FIREBASE',
    title: 'Food Saver — Food Donation Platform',
    description:
      'A web platform concept connecting food donation workflows through a straightforward interface and Firebase-backed functionality.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    tone: 'mint',
  },
  {
    number: '03',
    type: 'GENERATIVE AI · WEB APP',
    title: 'Project Brief Generator',
    description:
      'A web application that uses generative AI to help turn an initial idea into a more structured project brief.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'GenAI'],
    tone: 'peach',
  },
  {
    number: '04',
    type: 'BACKEND DEVELOPMENT',
    title: 'Spring Boot REST API Project',
    description:
      'A Java and Spring Boot project focused on backend development and REST API fundamentals.',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    tone: 'blue',
  },
  {
    number: '05',
    type: 'AI · MULTI-AGENT SYSTEMS',
    title: 'Healthcare Multi-Agent Intelligence',
    description:
      'A project exploring agent collaboration, retrieval-augmented generation (RAG), and orchestration for healthcare-oriented workflows.',
    stack: ['AI Agents', 'RAG', 'Orchestration'],
    tone: 'lavender',
  },
];

const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Frameworks & APIs', items: ['Next.js', 'Flask', 'Spring Boot', 'REST APIs', 'Tailwind CSS'] },
  { title: 'Data & Backend', items: ['Firebase', 'MySQL', 'TF-IDF', 'Naive Bayes'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Decorative illustrated avatar">
      <div className="avatar-orbit orbit-one" />
      <div className="avatar-orbit orbit-two" />
      <svg className="avatar-svg" viewBox="0 0 320 340" role="img" aria-labelledby="avatar-title">
        <title id="avatar-title">Simple illustrated portrait of a student developer</title>
        <ellipse cx="160" cy="309" rx="96" ry="13" fill="#d9d4e6" opacity=".65" />
        <path d="M77 299c7-57 36-84 83-84s76 27 83 84v8H77z" fill="#7866a8" />
        <path d="M122 225l38 38 38-38-14-21h-48z" fill="#fff8ef" />
        <path d="M122 225l38 38-28 28-24-53zM198 225l-38 38 28 28 24-53z" fill="#a899d0" />
        <path d="M129 172h62v55c-7 16-18 23-31 23s-24-7-31-23z" fill="#b96f52" />
        <ellipse cx="160" cy="127" rx="66" ry="77" fill="#4a2d2b" />
        <path d="M99 130c0-44 22-70 61-70s61 26 61 70v33c-4 39-29 61-61 61s-57-22-61-61z" fill="#c98262" />
        <path d="M95 127c-4-47 22-83 68-83 39 0 66 27 66 70-14-2-25-11-33-26-18 16-48 22-77 20-4 10-12 16-24 19z" fill="#3e282a" />
        <path d="M102 113c-12 16-11 44-5 58-16-8-20-36-13-54 4-11 10-18 18-22zM218 111c13 17 11 44 5 60 17-8 21-35 14-54-4-11-10-18-19-22z" fill="#3e282a" />
        <ellipse cx="136" cy="139" rx="5" ry="6" fill="#352323" />
        <ellipse cx="184" cy="139" rx="5" ry="6" fill="#352323" />
        <path d="M145 166q15 11 30 0" fill="none" stroke="#8d453f" strokeWidth="4" strokeLinecap="round" />
        <path d="M122 126q13-9 25 0M173 126q13-9 25 0" fill="none" stroke="#4a2d2b" strokeWidth="5" strokeLinecap="round" />
        <circle cx="119" cy="155" r="8" fill="#df9b81" opacity=".65" />
        <circle cx="201" cy="155" r="8" fill="#df9b81" opacity=".65" />
        <path d="M102 295l-15 12h146l-15-12-28-28h-60z" fill="#f7f0ff" />
        <path d="M147 267l13 14 13-14 11 40h-48z" fill="#d5c9ee" />
        <circle cx="245" cy="72" r="18" fill="#e5ddfa" />
        <path d="M239 72h12M245 66v12" stroke="#8069b0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M61 203l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#d6c7f4" />
      </svg>
      <div className="avatar-caption"><span className="status-dot" /> building, learning, improving</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Vedhavathi home"><span className="brand-mark">v.</span><span>vedhavathi</span></a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
          </nav>
          <a className="nav-contact" href="mailto:sandraveda1983@gmail.com?subject=Hello%20Vedhavathi">Let&apos;s talk <ArrowIcon /></a>
        </div>
      </header>

      <div id="main-content">
        <section className="hero section container" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> COMPUTER SCIENCE STUDENT · DEVELOPER</div>
            <h1 id="hero-title">Thoughtful code.<br /><span>Useful experiences.</span></h1>
            <p className="hero-description">Hi, I&apos;m <strong>Vedhavathi</strong> — a Computer Science and Engineering student who enjoys building web applications, exploring AI, and turning ideas into practical software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a>
              <a className="button button-secondary" href="mailto:sandraveda1983@gmail.com?subject=Resume%20Request">Request my resume <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta"><span>Currently learning by building</span><span className="meta-separator">/</span><span>Open to opportunities</span></div>
          </div>
          <div className="hero-art reveal reveal-delay"><Avatar /></div>
          <a className="scroll-note" href="#about"><span className="scroll-line" /> scroll to explore</a>
        </section>

        <section className="intro-strip" aria-label="Areas of interest">
          <div className="container strip-inner"><span>INTERESTED IN</span><p>Full-stack development <i>✳</i> AI-powered applications <i>✳</i> Backend systems <i>✳</i></p></div>
        </section>

        <section className="section container section-grid" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span> / ABOUT</div>
          <div className="section-content reveal">
            <h2 id="about-title">Curious by nature.<br /><span>Developer by practice.</span></h2>
            <p className="lead">I&apos;m pursuing a B.Tech in Computer Science and Engineering with an AIML specialization. I like learning by making things — from frontend interfaces to backend APIs and AI-assisted tools.</p>
            <p className="body-copy">My project work has given me opportunities to work with Java, Python, web technologies, databases, and generative AI. I value clear problem-solving, readable code, and building experiences that are useful to the people who use them.</p>
            <div className="about-facts"><div><strong>B.Tech</strong><span>Computer Science & Engineering</span></div><div><strong>Build → Learn</strong><span>My preferred way to grow</span></div></div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-label"><span>02</span> / SELECTED WORK</div>
            <div className="section-heading-row"><div><h2 id="projects-title">Projects with a <span>purpose.</span></h2><p className="body-copy">A selection of projects across web development, backend systems, and AI.</p></div><a className="text-link" href="https://github.com/sandravedha1983" target="_blank" rel="noreferrer">Visit GitHub <ArrowIcon /></a></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
                  <div className="project-illustration" aria-hidden="true"><div className="illustration-window"><div className="window-dots"><i /><i /><i /></div><div className="mock-lines"><b /><b /><b /><b /></div><div className="mock-chip">{project.number}</div></div><div className="illustration-spark">✳</div></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="project-note">Project repository and live-demo links can be added when each public URL is ready. No demo links are guessed here.</p>
          </div>
        </section>

        <section className="section container section-grid" id="skills" aria-labelledby="skills-title">
          <div className="section-label"><span>03</span> / TOOLKIT</div>
          <div className="section-content reveal"><h2 id="skills-title">Tools I use to <span>make things.</span></h2><p className="body-copy skills-intro">A practical toolkit that I continue to strengthen through projects and learning.</p>
            <div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}<span aria-hidden="true">↗</span></li>)}</ul></div>)}</div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="container section-grid">
            <div className="section-label"><span>04</span> / EXPERIENCE</div>
            <div className="section-content reveal"><h2 id="experience-title">Learning in <span>real teams.</span></h2>
              <article className="experience-card"><div className="experience-date">2026</div><div><h3>Web Developer Intern</h3><p className="experience-company">Blackspire Pvt. Ltd.</p><p className="body-copy">Contributed to frontend and backend features, worked with APIs, and gained practical experience with deployment workflows and Git/GitHub across the BlueGenesis and CreatorsHQ platforms.</p><div className="tag-list"><span>Web Development</span><span>APIs</span><span>Git & GitHub</span><span>Deployment</span></div></div></article>
              <div className="education-card"><div className="education-icon" aria-hidden="true">✳</div><div><span className="mini-label">EDUCATION</span><h3>B.Tech — Computer Science and Engineering (AIML)</h3><p className="body-copy">Kalasalingam Academy of Research and Education · 2023–Present</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner"><div className="section-label"><span>05</span> / SAY HELLO</div><div className="contact-copy"><p className="eyebrow">HAVE A ROLE, IDEA, OR COLLABORATION?</p><h2 id="contact-title">Let&apos;s build something<br /><span>meaningful.</span></h2><p>I&apos;m happy to connect about opportunities, projects, and learning together.</p><div className="contact-actions"><a className="button button-light" href="mailto:sandraveda1983@gmail.com?subject=Hello%20Vedhavathi">Email me <ArrowIcon /></a><a className="button button-outline-light" href="https://linkedin.com/in/vedhavathi-sandra" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a></div></div><div className="contact-footer"><a href="https://github.com/sandravedha1983" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href="https://linkedin.com/in/vedhavathi-sandra" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a><a href="mailto:sandraveda1983@gmail.com">sandraveda1983@gmail.com</a><span>Designed & built with care · © {new Date().getFullYear()} Vedhavathi</span></div></div>
        </section>
      </div>
    </main>
  );
}
