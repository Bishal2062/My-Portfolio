export const profile = {
  name: "Bishal Regmi",
  role: "Computer Science Student",
  university: "Kent State University",
  github: "https://github.com/Bishal2062",
  headline: "I build systems that make technical work clearer.",
};

export const caseStudies = [
  {
    number: "01", slug: "ai-network-analytics", accent: "AI + NETWORK OPERATIONS", status: "Working product",
    title: "AI-Assisted Network Analytics", summary: "A full-stack platform that turns weekly SASE PDF reports into structured metrics, comparisons, prioritized findings, and a human review queue.",
    role: "Product design, full-stack engineering, analytics logic, documentation",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "PDF extraction"],
    proof: ["Multi-report PDF ingestion", "Week-over-week and historical comparisons", "Explainable branch ranking", "Persistent approve / dismiss review workflow"],
    steps: ["PDF reports", "Structured metrics", "Evidence checks", "Priority ranking", "Human review"],
    href: "https://github.com/Bishal2062/ibt-network-analytics",
  },
  {
    number: "02", slug: "security-audit", accent: "CYBERSECURITY", status: "Internship case study",
    title: "Internal Security Audit & Risk Assessment", summary: "A structured assessment across access, vulnerabilities, physical safeguards, and security awareness—translated into prioritized remediation work.",
    role: "Audit planning, evidence review, risk analysis, executive documentation",
    stack: ["Risk assessment", "IAM", "Vulnerability management", "Control evaluation"],
    proof: ["Defined audit criteria and control objectives", "Built a findings and risk register", "Prioritized critical, high, and medium work", "Produced an implementation roadmap"],
    steps: ["Scope", "Evidence", "Findings", "Risk ranking", "Roadmap"],
  },
  {
    number: "03", slug: "incident-recovery", accent: "RESILIENCE", status: "Internship case study",
    title: "Data Breach Simulation & Recovery", summary: "A simulated directory-services ransomware incident used to evaluate dependencies, response readiness, backup availability, and business continuity.",
    role: "Dependency analysis, recovery planning, gap analysis, documentation",
    stack: ["Incident response", "Disaster recovery", "Business continuity", "Active Directory concepts"],
    proof: ["Mapped system dependencies and criticality", "Documented the incident timeline", "Assessed recovery gaps", "Created technical and executive recommendations"],
    steps: ["Scenario", "Dependencies", "Response", "Recovery", "Lessons"],
  },
  {
    number: "04", slug: "network-operations", accent: "INFRASTRUCTURE", status: "Internship case study",
    title: "Network & Security Operations", summary: "Operational work spanning secure access, suspicious-email investigation, traffic monitoring, endpoint deployment, and escalation procedures.",
    role: "Troubleshooting, operational support, process design, technical writing",
    stack: ["VPN & MFA", "Network monitoring", "Endpoint operations", "Security operations"],
    proof: ["Documented VPN and MFA procedures", "Built investigation and escalation checklists", "Created deployment and lifecycle workflows", "Consolidated operational lessons and recommendations"],
    steps: ["Detect", "Triage", "Troubleshoot", "Escalate", "Document"],
  },
];

export const capabilities = [
  ["Build", "Software and web systems that turn ambiguous requirements into usable tools."],
  ["Secure", "Assess risk, evaluate controls, and communicate remediation priorities."],
  ["Analyze", "Extract signal from network, infrastructure, and operational data."],
  ["Automate", "Design AI-assisted workflows with explicit evidence and human review."],
];

export const skillGroups = [
  ["Software", "Python · JavaScript · TypeScript · React · Next.js · FastAPI · HTML/CSS · Git"],
  ["Security", "Security auditing · Risk assessment · Incident response · IAM · Vulnerability management"],
  ["Infrastructure", "Network troubleshooting · VPN · MFA · Active Directory concepts · Endpoint operations"],
  ["AI / Automation", "Prompt engineering · AI-assisted analytics · Human-in-the-loop workflows · PDF extraction"],
];
