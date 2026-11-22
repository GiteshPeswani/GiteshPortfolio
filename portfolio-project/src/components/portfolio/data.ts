export const NAV = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STACK = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { title: "Frontend", items: ["Angular 17", "React 18", "Tailwind CSS", "Bootstrap", "TypeScript"] },
  { title: "Backend", items: ["Spring Boot", "FastAPI", "REST APIs", "JWT Authentication", "Spring Security"] },
  { title: "AI & Computer Vision", items: ["Google Gemini AI", "OpenCV", "Facial & Gaze Tracking", "WebSockets"] },
  { title: "Distributed & Cloud", items: ["Apache Kafka", "WebRTC", "Twilio", "DigitalOcean", "Git"] },
  {
    title: "Core Skills",
    items: ["Data Structures & Algorithms", "System Design", "Microservices", "Event-Driven Architecture"],
  },
];

export const EXPERIENCE = [
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Improved and optimized scalable web application features.",
      "Increased application responsiveness and performance.",
      "Collaborated on backend solutions that enhanced reliability.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Aadidev Properties",
    period: "Jun 2026",
    points: [
      "Built responsive real estate platform.",
      "Developed Angular frontend with modern UI.",
      "Created secure Spring Boot backend with JWT authentication.",
      "Integrated MySQL for data management.",
    ],
  },
];

type Project = {
  name: string;
  tech: string[];
  description: string;
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "SmartHire AI",
    tech: ["Angular 17", "Spring Boot", "Python", "FastAPI", "OpenCV", "Google Gemini AI", "WebRTC", "MySQL"],
    description:
      "Automated recruitment & proctoring ecosystem featuring ATS resume analysis, dynamic Gemini LLM question generation, real-time OpenCV gaze and phone detection, sandboxed polyglot code execution, and WebRTC video interviews.",
    github: "https://github.com/GiteshPeswani/SmartHire-Ai",
  },
  {
    name: "Attendance Management System",
    tech: ["Spring Boot", "React 18", "Kafka", "MySQL", "Twilio"],
    description:
      "Attendance system using dynamic QR codes, GPS geofencing, Kafka event processing, and WhatsApp notifications.",
    github: "https://github.com/GiteshPeswani/ATMS",
  },
  {
    name: "Aadidev Properties",
    tech: ["Angular", "Spring Boot", "MySQL"],
    description:
      "Real estate platform allowing users to browse properties, submit inquiries, and explore listings through a modern responsive interface.",
    github: "https://github.com/GiteshPeswani",
    demo: "https://aadidev-properties.vercel.app/",
  },
  {
    name: "Expense Tracker",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT"],
    description:
      "Full-stack expense tracking platform with authentication, CSV import support, analytics, and responsive dashboard.",
    github: "https://github.com/GiteshPeswani/ExpenseTrackerProject",
  },
  {
    name: "Resume Analyzer",
    tech: ["Java", "Spring Boot", "Angular 16", "MySQL", "Spring Security"],
    description:
      "AI-powered resume analyzer with ATS score calculation, keyword analysis, and job recommendation features.",
    github: "https://github.com/GiteshPeswani/ResumeAnalyzer",
  },
];

export const ACHIEVEMENTS = [
  { title: "HackCelestial 2.0", detail: "Hackathon Participant" },
  { title: "Aether HackConquest 2025", detail: "Hackathon Participant" },
  { title: "Vinshik Frontend Hackathon", detail: "Participant" },
];

export const LINKS = {
  email: "giteshpeswani@gmail.com",
  github: "https://github.com/GiteshPeswani",
  linkedin: "https://www.linkedin.com/in/gitesh-peswani",
};
