"use client";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ContactForm from "@/components/contact-form";
import SectionTitle from "@/components/section-title";
import ParticlesComponent from "../components/particles";
import React, { useRef, useState, useMemo, useEffect } from "react";
import TypingTest from "@/components/typing-test";

export default function Home() {
  const technologies = ["TypeScript", "JavaScript", "Node.js", "Express", "HTML5", "CSS", "Railway", "Prisma"];
  const MemoizedParticles = useMemo(() => <ParticlesComponent id="particles" />, []);

  const [selectedTech, setSelectedTech] = useState<Set<string>>(new Set());
  const [progressStarted, setProgressStarted] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [notify, setNotify] = useState(false);
  const initialTimer = useRef<number | undefined>(undefined);
  const loopTimer = useRef<number | undefined>(undefined);
  const hasFlipped = useRef(false);

  function toggleTech(name: string) {
    setSelectedTech((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  useEffect(() => {
    if (!flipped && !hasFlipped.current) {
      initialTimer.current = window.setTimeout(() => {
        setNotify(true);
      }, 5000);
    }

    return () => {
      clearTimeout(initialTimer.current);
      clearTimeout(loopTimer.current);
    };
  }, [flipped]);

  function handlePingEnd() {
    setNotify(false);

    if (hasFlipped.current) return;

    loopTimer.current = window.setTimeout(() => {
      setNotify(true);
    }, 5000);
  }

  useEffect(() => {
    if (flipped) {
      clearTimeout(initialTimer.current);
      clearTimeout(loopTimer.current);
    }
  }, [flipped]);

  // Start progress animation on hover
  const handleMouseEnter = () => {
    setProgressStarted(true);
  };

  // Reset everything on mouse leave
  const handleMouseLeave = () => {
    setProgressStarted(false);
    setFlipped(false);

    technologies.forEach((e) => {
      selectedTech.delete(e);
    });
  };

  // Flip after animation ends
  const handleProgressAnimationEnd = () => {
    setFlipped(true);
    hasFlipped.current = true;
    setNotify(false);
    clearTimeout(initialTimer.current);
    clearTimeout(loopTimer.current);

    technologies.forEach((e) => {
      selectedTech.add(e);
    });
  };

  const skills = {
    "Programming Languages": [
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "HTML", icon: "html.svg" },
      { name: "CSS", icon: "css.svg" },
    ],
    "Back-End Technologies": [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express", icon: "express.svg" },
      { name: "Django", icon: "django.svg" },
      { name: "Flask", icon: "flask.svg" },
      { name: "EJS", icon: "ejs.svg" },
    ],
    "Databases & ORM": [
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "SQLite", icon: "sqlite.svg" },
      { name: "Prisma", icon: "prisma.svg" },
      { name: "Supabase", icon: "supabase.svg" },
    ],
    "APIs & Authentication": [
      { name: "RESTful APIs", icon: "api.svg" },
      { name: "JWT", icon: "jwt.svg" },
      { name: "Stripe", icon: "stripe.svg" },
      { name: "Axios", icon: "axios.svg" },
    ],
    "Development & Deployment": [
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "github.svg" },
      { name: "Postman", icon: "postman.svg" },
      { name: "Railway", icon: "railway.svg" },
      { name: "Socket.io", icon: "socketio.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "AWS S3", icon: "aws.svg" },
    ],
  };

  const projects = [
    {
      title: "Echo",
      description: "A social media platform web app and API.",
      technologies: [
        "Node.js",
        "Express",
        "TypeScript",
        "EJS",
        "JWT",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "AWS S3",
        "Supabase",
        "Railway",
        "Axios",
        "Postman",
      ],
      github: "https://github.com/mkornajcik/echo",
      demo: "https://social-echo.up.railway.app/",
      image: "Echo.png",
    },
    {
      title: "Natours",
      description: "A tour booking API and web app.",
      technologies: ["Node.js", "Express", "JavaScript", "MongoDB", "Stripe", "JWT", "Railway", "Postman"],
      github: "https://github.com/mkornajcik/natours",
      demo: "https://appnatours.up.railway.app/",
      image: "Natours.png",
    },
    {
      title: "",
      description: "",
      technologies: [],
      github: "https://github.com/markokornajcik/",
      demo: "",
      image: "",
    },
  ];

  return (
    <main className="bg-[#1e1e2e] text-[#cdd6f4] min-h-screen">
      <div>{MemoizedParticles}</div>

      <div className="max-w-xl mx-auto px-4 py-8 relative z-100">
        <header className="sticky top-0 z-50 bg-[#1e1e2e]/80 backdrop-blur-sm py-4 mb-8">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#cba6f7]">MK</div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-[#bac2de] hover:text-[#f5c2e7] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#bac2de] hover:text-[#f5c2e7] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#bac2de] hover:text-[#f5c2e7] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#bac2de] hover:text-[#f5c2e7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <article>
          <section id="about" className="mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2 text-[#f5c2e7]">
                  <span>Hey I'm Marko</span>
                  <span className="emoji-wave">👋</span>
                </h1>

                <p className="text-lg mb-4 text-[#a6adc8]">📍Helsinki, Finland 🇫🇮</p>
                <p className="mb-6">
                  I am a{" "}
                  {flipped ? (
                    <>
                      <span className="bg-[#f5c2e7] text-[#1e1e2e] semibold underline-offset-4">backend developer</span>{" "}
                      at heart. I specialize in{" "}
                      <span className="bg-[#f5c2e7] text-[#1e1e2e] semibold underline-offset-4">Node.js</span>,{" "}
                      <span className="bg-[#f5c2e7] text-[#1e1e2e] semibold underline-offset-4">TypeScript</span>, and{" "}
                      <span className="bg-[#f5c2e7] text-[#1e1e2e] semibold underline-offset-4">Express</span>.
                    </>
                  ) : (
                    <>backend developer at heart. I specialize in Node.js, TypeScript, and Express.</>
                  )}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="/resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-[#cba6f7] text-[#1e1e2e] rounded-md hover:bg-[#f5c2e7] transition-colors"
                    download
                  >
                    <Download size={18} />
                    Resume
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/mkornajcik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#313244] rounded-full hover:bg-[#45475a] transition-colors"
                    >
                      <Github className="text-[#cdd6f4]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/marko-kornajcik/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#313244] rounded-full hover:bg-[#45475a] transition-colors"
                    >
                      <Linkedin className="text-[#cdd6f4]" />
                    </a>
                    <a
                      href="mailto:marko.kornajcik6@gmail.com"
                      className="p-2 bg-[#313244] rounded-full hover:bg-[#45475a] transition-colors"
                    >
                      <Mail className="text-[#cdd6f4]" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-48 h-48">
                {notify && !flipped && (
                  <span
                    className="absolute inset-5 rounded-full ring-1 ring-[#cba6f7] animate-ping"
                    onAnimationEnd={handlePingEnd}
                  />
                )}

                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#cba6f7]">
                  <div
                    className={`flip-container${flipped ? " hover" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flipper">
                      <div className="front">
                        <svg
                          width="192"
                          height="192"
                          viewBox="5 5 250 250"
                          className="circular-progress"
                          style={{
                            animation: progressStarted && !flipped ? "progress-animation 1s linear forwards" : "none",
                            opacity: 1,
                          }}
                          onAnimationEnd={handleProgressAnimationEnd}
                        >
                          <defs>
                            <pattern id="avatarPattern" patternUnits="userSpaceOnUse" width="250" height="250">
                              <image
                                href="/avatar.png"
                                x="0"
                                y="0"
                                width="250"
                                height="250"
                                preserveAspectRatio="xMidYMid slice"
                                className="z-50"
                              />
                            </pattern>
                          </defs>
                          <circle cx="120" cy="120" r="120" fill="url(#avatarPattern)" className="avatar" />
                          <circle
                            cx="120"
                            cy="120"
                            r="120"
                            className="fg"
                            fill="none"
                            strokeWidth="10"
                            strokeDasharray="754"
                            strokeDashoffset="188.5"
                          />
                        </svg>
                      </div>
                      <div className="back">
                        <svg
                          width="192"
                          height="192"
                          viewBox="5 5 250 250"
                          className="circular-progress"
                          style={{
                            animation: progressStarted && !flipped ? "progress-animation 1s linear forwards" : "none",
                            opacity: 1,
                          }}
                          onAnimationEnd={handleProgressAnimationEnd}
                        >
                          <defs>
                            <pattern id="avatarPattern2" patternUnits="userSpaceOnUse" width="250" height="250">
                              <image
                                href="/backend.png"
                                x="0"
                                y="0"
                                width="250"
                                height="250"
                                preserveAspectRatio="xMidYMid slice"
                                className="z-50"
                              />
                            </pattern>
                          </defs>
                          <circle cx="120" cy="120" r="120" fill="url(#avatarPattern2)" className="avatar" />
                          <circle
                            cx="120"
                            cy="120"
                            r="120"
                            className="fg"
                            fill="none"
                            strokeWidth="10"
                            strokeDasharray="754"
                            strokeDashoffset="188.5"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                          <h2 className="text-xl font-bold text-[#f5c2e7] bg-black/60 rounded shadow-lg mx-5.5">
                            Backend
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12" id="favorite-tech">
              <h3 className="text-lg text-[#a6adc8] mb-2">Some of my favorite technologies</h3>
              <div className="grid grid-cols-4 gap-4">
                <label
                  key="TypeScript"
                  onClick={() => toggleTech("TypeScript")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("TypeScript")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#3178C6]
                      ${selectedTech.has("TypeScript") ? "text-[#3178C6]" : ""}
                    `}
                  >
                    <title>TypeScript</title>
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                  </svg>
                  <p className="text-xs">TypeScript</p>
                </label>

                <label
                  key="JavaScript"
                  onClick={() => toggleTech("JavaScript")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("JavaScript")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#F7DF1E]
                      ${selectedTech.has("JavaScript") ? "text-[#F7DF1E]" : ""}
                    `}
                  >
                    <title>JavaScript</title>
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                  <p className="text-xs">JavaScript</p>
                </label>

                <label
                  key="Node.js"
                  onClick={() => toggleTech("Node.js")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("Node.js")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#5FA04E]
                      ${selectedTech.has("Node.js") ? "text-[#5FA04E]" : ""}
                    `}
                  >
                    <title>Node.js</title>
                    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                  </svg>
                  <p className="text-xs">Node.js</p>
                </label>

                <label
                  key="Express"
                  onClick={() => toggleTech("Express")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("Express")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300`}
                  >
                    <title>Express</title>
                    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                  </svg>
                  <p className="text-xs">Express</p>
                </label>

                <label
                  key="HTML5"
                  onClick={() => toggleTech("HTML5")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("HTML5")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#E34F26]
                      ${selectedTech.has("HTML5") ? "text-[#E34F26]" : ""}
                    `}
                  >
                    <title>HTML5</title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                  <p className="text-xs">HTML</p>
                </label>

                <label
                  key="CSS"
                  onClick={() => toggleTech("CSS")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${selectedTech.has("CSS") ? "bg-[#181825] shadow-inner transform scale-95 " : "hover:bg-[#181825] "}
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#663399]
                      ${selectedTech.has("CSS") ? "text-[#663399]" : ""}
                    `}
                  >
                    <title>CSS</title>
                    <path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63" />
                  </svg>
                  <p className="text-xs">CSS</p>
                </label>

                <label
                  key="Railway"
                  onClick={() => toggleTech("Railway")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("Railway")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300`}
                  >
                    <title>Railway</title>
                    <path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z" />
                  </svg>
                  <p className="text-xs">Railway</p>
                </label>

                <label
                  key="Prisma"
                  onClick={() => toggleTech("Prisma")}
                  className={`
                    favorite group relative flex flex-col items-center gap-3 rounded-lg border
                    px-2 py-2 shadow-2xs shadow-black/5 transition-all duration-200 ease-in-out
                    cursor-pointer select-none 
                    ${
                      selectedTech.has("Prisma")
                        ? "bg-[#181825] shadow-inner transform scale-95 "
                        : "hover:bg-[#181825] "
                    }
                  `}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current size-6 sm:group-hover:-translate-y-1 transition-all duration-300 group-hover:text-[#2D3748]
                      ${selectedTech.has("Prisma") ? "text-[#2D3748]" : ""}
                    `}
                  >
                    <title>Prisma</title>
                    <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
                  </svg>
                  <p className="text-xs">Prisma</p>
                </label>
              </div>
              <div className="text-center mt-2">
                <a href="#skills" className="hover:text-[#a6adc8] transition text-sm">
                  View all ↓
                </a>
              </div>
            </div>
          </section>

          <section id="typing">
            <TypingTest flipped={flipped} />
          </section>

          <section id="projects" className="mb-16">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="mb-16">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-3 text-[#f9e2af]">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <SkillBadge key={skill.name} icon={skill.icon}>
                        {skill.name}
                      </SkillBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="mb-16">
            <SectionTitle>Hire me</SectionTitle>
            <p className="mb-6">
              I am currently open to new opportunities and collaborations. Feel free to reach out if you would like to
              discuss a project or potential position.
            </p>
            <ContactForm />
          </section>
        </article>

        <footer className="text-center py-6 text-[#a6adc8] border-t border-[#313244]">
          <p>© {new Date().getFullYear()} Marko Kornajcik.</p>
        </footer>
      </div>
    </main>
  );
}
