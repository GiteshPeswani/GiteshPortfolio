import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  GraduationCap,
  Trophy,
  Check,
  Copy,
} from "lucide-react";

import giteshPhoto from "@/assets/gitesh.jpg";
import { Reveal } from "@/components/portfolio/Reveal";
import { ACHIEVEMENTS, EXPERIENCE, LINKS, NAV, PROJECTS, STACK } from "@/components/portfolio/data";

const resumeUrl = "/Gitesh_Peswani_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gitesh Peswani — Full Stack Developer" },
      {
        name: "description",
        content:
          "Full Stack Developer in Mumbai building scalable web applications with Angular, Spring Boot, Java and MySQL.",
      },
      { property: "og:title", content: "Gitesh Peswani — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Gitesh Peswani: Angular, Spring Boot, Java, and modern backend engineering.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function useScrollState() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = NAV[0]?.id ?? "about";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, active };
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-5">
      <span className="font-mono text-xs tracking-widest text-primary">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  const { progress, active } = useScrollState();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 h-px bg-border/60">
        <div
          className="h-px bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Header active={active} />

      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Extras />
        <Contact />
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Gitesh Peswani</p>
          <p>Designed & built in Mumbai, India</p>
        </div>
      </footer>
    </div>
  );
}

function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Gitesh<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`mx-auto mt-1 block h-px bg-primary transition-all duration-300 ${
                  active === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>
        <a
          href={resumeUrl}
          download="Gitesh_Peswani_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/60 hover:bg-accent"
        >
          <Download className="size-3.5" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </header>
  );
}

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index]?.substring(0, subIndex) ?? "";
}

function Hero() {
  const typedRole = useTypewriter([
    "Full Stack Developer",
    "Spring Boot & Java Engineer",
    "Angular & React Specialist",
    "Kafka & Distributed Systems Builder",
    "VESIT Mumbai IT • CGPA 8.62",
  ]);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Open to full-time & freelance roles
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Gitesh Peswani.
          </h1>

          {/* Dynamic Typewriter Heading */}
          <div className="mt-4 flex items-center gap-2 font-mono text-xl sm:text-2xl text-primary font-medium min-h-[36px]">
            <span className="text-muted-foreground font-normal text-lg sm:text-xl select-none">&gt;</span>
            <span className="text-foreground font-semibold">
              {typedRole}
            </span>
            <span className="inline-block w-2.5 h-6 bg-primary animate-pulse ml-0.5 align-middle" />
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I enjoy building production-ready applications, solving real-world problems, and
            designing clean user experiences backed by robust backend systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:bg-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-muted-foreground">
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <a href={`mailto:${LINKS.email}`} aria-label="Email" className="transition-colors hover:text-foreground">
              <Mail className="size-5" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> Mumbai, India
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="justify-self-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-border" />
            <div className="absolute -inset-8 rounded-full border border-border/50" />
            <div className="relative size-60 sm:size-72 md:size-80 rounded-full overflow-hidden border-2 border-border bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] flex items-end justify-center">
              <img
                src={giteshPhoto || "/gitesh.jpg"}
                alt="Portrait of Gitesh Peswani"
                width={320}
                height={320}
                className="w-full h-full object-contain object-bottom transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="01" title="About Me" />
      </Reveal>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m an Information Technology student and Full Stack Developer passionate about
            creating end-to-end web applications.
          </p>
          <p>
            My experience includes developing secure REST APIs, implementing JWT authentication,
            designing responsive Angular interfaces, and building scalable backend systems using
            Spring Boot.
          </p>
          <p>
            I enjoy working across the complete software development lifecycle, from architecture
            and database design to frontend implementation and deployment.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <dl className="surface divide-y divide-border rounded-xl">
            {[
              ["Role", "Full Stack Developer"],
              ["Location", "Mumbai, India"],
              ["Focus", "Angular · Spring Boot"],
              ["CGPA", "8.62 / 10"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between px-5 py-4 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="02" title="Tech Stack" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="surface group h-full rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>
      <ol className="relative border-l border-border pl-6 sm:pl-10">
        {EXPERIENCE.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 100} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[31px] top-2 size-2.5 rounded-full border border-primary bg-background sm:-left-[47px]" />
            <div className="surface rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="04" title="Featured Projects" />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal as="article" key={project.name} delay={i * 80} className="h-full">
            <div className="surface group relative flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 pt-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-foreground"
                  >
                    Live demo <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="05" title="Achievements & Education" />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="surface h-full rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <Trophy className="size-4 text-primary" />
                <h3 className="mt-4 text-sm font-semibold leading-snug">{a.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="surface h-full rounded-xl p-6">
            <GraduationCap className="size-4 text-primary" />
            <h3 className="mt-4 font-semibold tracking-tight">B.E. Information Technology</h3>
            <p className="mt-1 text-sm text-muted-foreground">VESIT, Mumbai</p>
            <p className="mt-4 font-mono text-sm text-primary">CGPA 8.62</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <SectionHeading index="06" title="Let's Build Something Together" />
      </Reveal>
      
      <div className="surface rounded-2xl p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <Reveal className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Open to Opportunities & Collaborations
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
              Whether you are looking for a full-stack engineer, have questions about my projects, or want to discuss modern backend and distributed architectures, feel free to reach out directly.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Mail className="size-4" /> Send Email
              </a>
              <a
                href={resumeUrl}
                download="Gitesh_Peswani_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/40"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-3">
            <div className="surface flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center gap-3.5">
                <Mail className="size-4 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Direct Email</p>
                  <a href={`mailto:${LINKS.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {LINKS.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="size-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="surface flex items-center gap-3.5 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <Github className="size-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">GitHub Profile</p>
                <p className="text-sm font-medium">github.com/GiteshPeswani</p>
              </div>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="surface flex items-center gap-3.5 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <Linkedin className="size-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn Profile</p>
                <p className="text-sm font-medium">linkedin.com/in/gitesh-peswani</p>
              </div>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
            </a>

            <div className="surface flex items-center gap-3.5 rounded-xl px-5 py-4">
              <MapPin className="size-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
