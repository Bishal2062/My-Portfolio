import { capabilities, caseStudies, profile, skillGroups } from "./content";

function Flow({ steps }: { steps: string[] }) {
  return <div className="flow" aria-label={`Workflow: ${steps.join(" to ")}`}>{steps.map((step, i) => <div key={step}><span>{String(i + 1).padStart(2, "0")}</span><b>{step}</b>{i < steps.length - 1 && <i>→</i>}</div>)}</div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation"><a className="mark" href="#top" aria-label="Bishal Regmi, home">BR<span>/</span></a><div className="navLinks"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div><a className="contactLink" href="#contact">Let’s talk <span>↗</span></a></nav>
      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Computer Science · Kent State University</p>
          <h1>{profile.name}</h1>
          <div className="focusLine" aria-label="Focus areas"><span>Software</span><i /><span>Cybersecurity</span><i /><span>AI</span><i /><span>Infrastructure</span></div>
          <p className="heroStatement">I build systems that make technical work <em>clearer.</em></p>
          <p className="lede">Early-career engineer working across software, security, infrastructure, and AI-assisted analytics—grounded in hands-on experience with real operational systems.</p>
          <div className="heroActions"><a className="primary" href="#work">Explore selected work <span>↓</span></a><a className="secondary" href={profile.github}>GitHub <span>↗</span></a></div>
        </div>
        <div className="visualCard"><div className="systemVisual" aria-label="Animated diagram connecting software, security, networks, and AI systems"><div className="orbit orbitOne" /><div className="orbit orbitTwo" /><span className="node n1">SOFTWARE</span><span className="node n2">SECURITY</span><span className="node n3">NETWORKS</span><span className="node n4">AI</span><div className="core"><b>BR</b><small>SYSTEMS<br/>THINKING</small></div><p>BUILD <i>·</i> SECURE <i>·</i> ANALYZE <i>·</i> AUTOMATE</p></div></div>
      </section>
      <div className="signal"><span>Build useful software</span><span>Assess real risk</span><span>Analyze operations</span><span>Automate with guardrails</span></div>

      <section className="work section" id="work"><div className="sectionHead"><div><p className="sectionLabel">01 / SELECTED WORK</p><h2>Proof, not just<br/>possibility.</h2></div><p>Four connected projects from one internship—showing a progression from understanding risk and operations to building a working decision-support platform.</p></div>
        <div className="projects">{caseStudies.map((project, index) => <article className={`project ${index === 0 ? "flagship" : ""}`} key={project.slug}><div className="projectMeta"><span>{project.number}</span><p>{project.accent}</p><em>{project.status}</em></div><div className="projectBody"><div><h3>{project.title}</h3><p className="summary">{project.summary}</p><p className="role"><b>My role</b>{project.role}</p><ul>{project.proof.map(item => <li key={item}>{item}</li>)}</ul>{project.href && <a className="repoLink" href={project.href}>View public repository <span>↗</span></a>}</div><div className="projectVisual"><Flow steps={project.steps}/><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></div></article>)}</div>
      </section>

      <section className="experience section" id="experience"><p className="sectionLabel">02 / EXPERIENCE</p><div className="experienceGrid"><div><p className="period">2026</p><h2>Industrial Belt<br/>Technology</h2><p className="experienceRole">Cybersecurity / IT Internship</p></div><div className="progression">{["Incident recovery & continuity", "Security audit & risk", "Network & security operations", "AI-assisted network analytics"].map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p><i>{i === 3 ? "BUILD" : "LEARN → APPLY"}</i></div>)}</div></div></section>

      <section className="growth" aria-labelledby="growth-title"><div><p className="sectionLabel">WHAT COMES NEXT</p><h2 id="growth-title">Improvement is part<br/>of the system.</h2></div><div className="growthList"><article><span>01</span><h3>Production depth</h3><p>Strengthen deployment, observability, reliability, and automated testing across full-stack projects.</p></article><article><span>02</span><h3>Security engineering</h3><p>Go deeper from assessment and operations into secure implementation and repeatable security validation.</p></article><article><span>03</span><h3>Responsible automation</h3><p>Build AI workflows with clearer evaluation, traceable evidence, and deliberate human decision points.</p></article></div></section>

      <section className="education section" id="education"><p className="sectionLabel">03 / EDUCATION & CAMPUS</p><div className="educationBody"><p className="degree">Computer Science</p><h2>Kent State University</h2><p>Building a foundation in computer science while applying it through software, cybersecurity, networks, and automation.</p><div className="campusItem"><span>CAMPUS INVOLVEMENT</span><div><h3>HACKSU</h3><p>Participant in Kent State’s technology community—learning alongside other builders and staying engaged beyond coursework.</p><small>Specific events, projects, or leadership details will be added only when confirmed.</small></div></div></div></section>

      <section className="skills section"><div><p className="sectionLabel">04 / TECHNICAL RANGE</p><h2>Built through practice.</h2><p className="skillsNote">Capabilities are grouped by how I use them—not ranked with arbitrary percentages.</p></div><div>{skillGroups.map(([name, skills]) => <div className="skillRow" key={name}><h3>{name}</h3><p>{skills}</p></div>)}</div></section>

      <section className="section intro" id="about"><div><p className="sectionLabel">05 / HOW I WORK</p><h2>Across the stack.<br/>Close to the problem.</h2></div><div className="introText"><p>I like understanding both <strong>how systems are built</strong> and <strong>how they operate in the real world.</strong> That perspective has taken me from security and recovery planning to network operations—and then into building software that supports better technical decisions.</p><p>I am early in my career, but the problems have been real: incomplete data, operational constraints, confidentiality, competing priorities, and the need to explain complex work clearly.</p></div></section>
      <section className="capabilities" aria-label="Capabilities">{capabilities.map(([name, text], i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{text}</p></article>)}</section>

      <footer id="contact"><p className="sectionLabel">OPEN TO THE NEXT HARD PROBLEM</p><h2>Let’s build something<br/><em>useful.</em></h2><div className="footerLinks"><a href={profile.github}>GitHub ↗</a><span>Resume / LinkedIn available after owner confirmation</span></div><div className="footerBottom"><b>{profile.name}</b><p>Computer Science · Software · Cybersecurity · AI · Infrastructure</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
