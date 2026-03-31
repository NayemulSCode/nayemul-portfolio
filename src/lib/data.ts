// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — Update this file with your real information
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Nayemul Saheb",
  role: "Software Engineer",
  tagline: "// Frontend Specialist",
  bio: [
    "I'm Nayemul Saheb, a Software Engineer with 4+ years of professional experience building scalable, production-ready web applications.",
    "Specializes in React, Next.js, Node.js, TypeScript, and the MERN stack, with a strong focus on performance, clean architecture, and maintainable code. Has contributed to international products serving markets in Ireland, Cameroon, and beyond, and represented a client project at Web Summit 2024 in Lisbon, Portugal.",
    "Outside the terminal, I train hard, study systems design, and occasionally cause problems with generative ai experiments.",
  ],
  availability: "Available for new projects",
  email: "dev.nayemul@gmail.com",
  location: "Dhaka / Remote",
  status: "Open to Work",
  statusColor: "green" as const,
  education: "CSE Graduate",
  languages: "EN, BN",
  social: {
    github: "https://github.com/nayemulSCode",
    linkedin: "https://www.linkedin.com/in/nayemuldev",
    twitter: "https://x.com/Nayemul_DEV",
  },
};

export const STATS = [
  { num: "5+", label: "Years Exp." },
  { num: "40+", label: "Projects" },
  { num: "98%", label: "Satisfaction" },
  { num: "12k+", label: "Commits" },
];

export const SKILLS = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 93 },
  { name: "Node.js / Express", pct: 88 },
  { name: "PostgreSQL / MongoDB", pct: 85 },
  { name: "AWS / Docker", pct: 82 },
  { name: "System Design", pct: 80 },
];

export const FACTS = [
  { key: "Base", value: "Dhaka / Remote" },
  { key: "Status", value: "Open to Work", highlight: true },
  { key: "Focus", value: "Frontend & Systems" },
  { key: "Languages", value: "EN, BN" },
];

export const TECH_STACK = [
  { icon: "⚛", name: "React", category: "Frontend" },
  { icon: "▲", name: "Next.js", category: "Framework" },
  { icon: "🔷", name: "TypeScript", category: "Language" },
  { icon: "🟩", name: "Node.js", category: "Backend" },
  { icon: "🐘", name: "PostgreSQL", category: "Database" },
  { icon: "🍃", name: "MongoDB", category: "Database" },
  { icon: "☁", name: "AWS", category: "Cloud" },
  { icon: "🐳", name: "Docker", category: "DevOps" },
  { icon: "⚡", name: "Vite", category: "Build" },
  { icon: "🔥", name: "Firebase", category: "Backend" },
  { icon: "🤖", name: "OpenAI", category: "AI/ML" },
  { icon: "🌊", name: "GraphQL", category: "API" },
  { icon: "📦", name: "Redis", category: "Cache" },
  { icon: "🧪", name: "Jest", category: "Testing" },
  { icon: "🎭", name: "Playwright", category: "Testing" },
  { icon: "🐙", name: "GitHub", category: "DevOps" },
];

export type ProjectCategory = "all" | "fullstack" | "frontend" | "backend" | "ai";

export const PROJECT_FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "AI / ML", value: "ai" },
];

export const PROJECTS = [
  {
    id: "corefinance",
    title: "CoreFinance Dashboard",
    description:
      "Real-time analytics for high-frequency trading desks. Live P&L, risk matrices, multi-currency support, and WebSocket-driven data feeds.",
    tags: ["Next.js", "D3.js", "WebSockets"],
    category: "fullstack" as ProjectCategory,
    featured: true,
    gradient: "linear-gradient(135deg,#020c1e,#041832,#030c20)",
    icon: "💳",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nexcms",
    title: "NexCMS — Headless CMS",
    description:
      "Drag-and-drop page builder with live preview, media CDN optimisation, and multi-tenant architecture supporting 100+ clients.",
    tags: ["React", "Node", "MongoDB"],
    category: "fullstack" as ProjectCategory,
    featured: false,
    gradient: "linear-gradient(135deg,#0a0218,#180430,#080118)",
    icon: "📝",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "trailos",
    title: "TrailOS Mobile App",
    description:
      "Cross-platform fitness app with GPS routing, workout analytics, and social challenges. 50k+ monthly active users.",
    tags: ["React Native", "Expo", "AWS"],
    category: "frontend" as ProjectCategory,
    featured: true,
    gradient: "linear-gradient(135deg,#021408,#043a14,#021008)",
    icon: "🏔",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "aria",
    title: "Aria AI Copilot",
    description:
      "GPT-4 powered writing assistant with fine-tuned brand voice preservation, streaming responses, and usage analytics.",
    tags: ["OpenAI", "Next.js", "Redis"],
    category: "ai" as ProjectCategory,
    featured: false,
    gradient: "linear-gradient(135deg,#140c02,#2e1a04,#100a02)",
    icon: "✍",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "distributeq",
    title: "DistributeQ — Job Queue",
    description:
      "High-throughput distributed job processing with dead-letter queues, retry logic, and a monitoring dashboard.",
    tags: ["Node.js", "Redis", "Docker"],
    category: "backend" as ProjectCategory,
    featured: false,
    gradient: "linear-gradient(135deg,#02100e,#04261e,#020e0c)",
    icon: "⚙",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "vertex",
    title: "Vertex SaaS Starter",
    description:
      "Production-ready SaaS boilerplate: auth, Stripe billing, team management, feature flags, and CI/CD pre-configured.",
    tags: ["Next.js", "Prisma", "Stripe"],
    category: "fullstack" as ProjectCategory,
    featured: true,
    gradient: "linear-gradient(135deg,#020a1c,#04163a,#020814)",
    icon: "🚀",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Nayemul rebuilt our trading dashboard from scratch — delivered 3 weeks early. The code quality and attention to edge cases was remarkable.",
    name: "Sarah Chen",
    role: "CTO at CoreFinance",
    initials: "SC",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "Rare combination: he writes production-grade backend code AND ships beautiful UIs. We hired him for frontend and got a full-stack powerhouse.",
    name: "Marcus Obi",
    role: "Founder, NexLabs",
    initials: "MO",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "The mobile app Nayemul built scaled from 0 to 50k users without a single architecture change. He designed it right the first time.",
    name: "Priya Sharma",
    role: "CPO, TrailOS",
    initials: "PS",
    stars: 5,
  },
  {
    id: 4,
    quote:
      "He understood our domain in days, not weeks. The AI copilot he built is now our core product differentiator. Exceptional engineer.",
    name: "Lena Vogel",
    role: "Head of Product, Aria",
    initials: "LV",
    stars: 5,
  },
  {
    id: 5,
    quote:
      "DistributeQ handles 2M+ jobs per day without breaking a sweat. The system design was impeccable from day one.",
    name: "James Thornton",
    role: "VP Engineering, Queue.io",
    initials: "JT",
    stars: 5,
  },
  {
    id: 6,
    quote:
      "Nayemul treats your product like his own. That ownership mindset is what separated him from every other engineer we've worked with.",
    name: "Diego Reyes",
    role: "CEO, Vertex Studio",
    initials: "DR",
    stars: 5,
  },
];

export type GalleryTab = "personal" | "professional";

export const GALLERY = {
  personal: [
    { icon: "🏋️", label: "Morning Training — 5AM Club", gradient: "linear-gradient(135deg,#0a0214,#160a28,#06091a)" },
    { icon: "🧘", label: "Mindfulness & Focus Rituals", gradient: "linear-gradient(135deg,#020f14,#062432,#020a0f)" },
    { icon: "👔", label: "Style Shoot — Clothing Brand", gradient: "linear-gradient(135deg,#140a02,#2e1c04,#100802)" },
    { icon: "🚴", label: "Weekend Cycling Adventures", gradient: "linear-gradient(135deg,#020a1a,#041432,#020611)" },
    { icon: "📸", label: "Street Photography — City", gradient: "linear-gradient(135deg,#110214,#240628,#0c0210)" },
    { icon: "🏃", label: "Marathon — Half Distance PB", gradient: "linear-gradient(135deg,#041408,#082e10,#030f06)" },
  ],
  professional: [
    { icon: "💻", label: "Deep Work — Studio Setup", gradient: "linear-gradient(135deg,#020c1a,#041832,#020810)" },
    { icon: "🎤", label: "Tech Talk — JS Conference", gradient: "linear-gradient(135deg,#0a0c02,#1c2004,#080a02)" },
    { icon: "🤝", label: "Client Sprint Workshop", gradient: "linear-gradient(135deg,#0e0214,#1e0428,#090110)" },
    { icon: "🏢", label: "Modern Office — Dhaka HQ", gradient: "linear-gradient(135deg,#020e10,#041c20,#020a0c)" },
    { icon: "📊", label: "Product Review — Q2 Offsite", gradient: "linear-gradient(135deg,#0a0402,#1e0c04,#080302)" },
    { icon: "🎨", label: "Design System Sprint", gradient: "linear-gradient(135deg,#020814,#040f28,#020610)" },
  ],
};
