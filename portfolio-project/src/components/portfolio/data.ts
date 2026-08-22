export const NAV = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STACK = [
  { title: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Frontend", items: ["Angular", "React", "TypeScript", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", items: ["Spring Boot", "REST APIs", "JWT Authentication", "Spring Security"] },
  { title: "Databases", items: ["MySQL"] },
  { title: "Tools & Platforms", items: ["Git", "Kafka", "Twilio", "DigitalOcean"] },
  {
    title: "Core Skills",
    items: ["Data Structures & Algorithms", "Problem Solving", "System Design Fundamentals"],
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
    name: "Resume Analyzer",
    tech: ["Java", "Spring Boot", "Angular 16", "MySQL", "Spring Security"],
    description:
      "AI-powered resume analyzer with ATS score calculation, keyword analysis, and job recommendation features.",
    github: "https://github.com/GiteshPeswani/ResumeAnalyzer",
  },
  {
    name: "Expense Tracker",
    tech: ["Angular", "Spring Boot", "MySQL", "JWT"],
    description:
      "Full-stack expense tracking platform with authentication, CSV import support, analytics, and responsive dashboard.",
    github: "https://github.com/GiteshPeswani/ExpenseTrackerProject",
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
    name: "Attendance Management System",
    tech: ["Spring Boot", "React 18", "Kafka", "MySQL", "Twilio"],
    description:
      "Attendance system using dynamic QR codes, GPS geofencing, Kafka event processing, and WhatsApp notifications.",
    github: "https://github.com/GiteshPeswani/ATMS",
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
