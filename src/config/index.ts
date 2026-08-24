import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rejoice Teca — Software Developer",
  author: "Rejoice Teca",
  description:
    "Final-year Computer Science student specialising in Software Development, with experience in software development, AI, REST APIs, databases, and full-stack applications.",
  lang: "en",
  siteLogo: "/profile.jpg",

  navLinks: [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Education", href: "#experience" },
    { text: "Projects", href: "#projects" },
  ],

  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/rejoice-teca-b92880313/",
    },
    {
      text: "GitHub",
      href: "https://github.com/Rejoice-t",
    },
  ],

  socialImage: "/zen-og.png",
  canonicalURL: "https://rejoice-teca.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  /* =========================
     HERO
  ========================= */

  hero: {
    name: "Rejoice Teca",
    specialty: "Computer Science Student | Software Developer",
    summary:
      "Final-year Computer Science student specialising in Software Development at NUST, with hands-on experience building full-stack applications, REST APIs, AI-powered solutions, and database systems.",
    email: "rejoice.teca@gmail.com",
  },

  /* =========================
     TECH STACK
  ========================= */

  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "JavaScript", icon: "javascript" },
        { name: "SQL", icon: "database" },
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
      ],
    },

    {
      category: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: "fastapi" },
        { name: "REST APIs", icon: "api" },
        { name: "JSON", icon: "json" },
      ],
    },

    {
      category: "AI & Data",
      skills: [
        { name: "Generative AI", icon: "ai" },
        { name: "Groq API", icon: "groq" },
        { name: "Google Gemini", icon: "gemini" },
      ],
    },

    {
      category: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: "mysql" },
        { name: "SQL Server", icon: "database" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Swagger", icon: "swagger" },
        { name: "Vercel", icon: "vercel" },
      ],
    },
  ],

  /* =========================
     EDUCATION & EXPERIENCE
  ========================= */

  experience: [
    {
      company: "Namibia University of Science and Technology",
      position: "Bachelor of Computer Science — Software Development",
      startDate: "Feb 2024",
      endDate: "Present",
      summary: [
        "Developing practical skills in software development, databases, APIs, web development, software engineering, and distributed systems through academic projects.",
        "Applying programming, problem-solving, testing, and database concepts to software development projects using Java, Python, JavaScript, SQL, and Git.",
      ],
    },

    {
      company: "Riga Technical University",
      position: "Academic Exchange Programme",
      startDate: "Jan 2026",
      endDate: "Jun 2026",
      summary: [
        "Completed Computer Science coursework including Artificial Intelligence, Natural Language Processing, Testing and Software Quality, and Applied System Software.",
        "Studied in an international academic environment, strengthening communication, teamwork, adaptability, and problem-solving skills.",
      ],
    },

    {
      company: "Deep Learning IndabaX Namibia",
      position: "Hackathon Participant — AI Livestock & Grazing",
      startDate: "Jul 2026",
      endDate: "Jul 2026",
      summary: [
        "Collaborated with a multidisciplinary team to develop an AI-powered livestock advisory prototype using Python, FastAPI, Google Gemini, REST APIs, and external weather and pasture data.",
        "Used Git and GitHub for collaborative development while building and presenting a functional AI prototype during the hackathon.",
      ],
    },
  ],

  /* =========================
     PROJECTS
  ========================= */

  projects: [
    {
      name: "SaveFridge AI",
      summary:
        "A full-stack AI-powered web application that generates recipe recommendations from ingredients provided by users.",
      technologies: [
        "Python",
        "FastAPI",
        "JavaScript",
        "Generative AI",
        "Groq API",
        "REST APIs",
      ],
      linkPreview: "https://save-fridge-ai.vercel.app/",
      linkSource: "https://github.com/Rejoice-t/SaveFridge-AI",
      image: "/SaveFridge-AI.png",
    },

    {
      name: "VISION — AI Livestock & Grazing",
      summary:
        "An AI-powered livestock advisory prototype developed during the Deep Learning IndabaX Namibia hackathon to provide intelligent grazing recommendations using environmental information.",
      technologies: [
        "Python",
        "FastAPI",
        "Google Gemini",
        "REST APIs",
        "Git",
        "GitHub",
      ],
      linkPreview: "https://vision-kf45.vercel.app/",
      linkSource: "https://github.com/Twawana/Deep-Learning-IndabaX",
      image: "/vision.png",
    },

    {
      name: "Cinna Roll Society Website",
      summary:
        "A responsive website developed to showcase a food business and provide customers with a simple and engaging browsing experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      linkPreview: "https://cinnaroll-society.netlify.app/",
      linkSource: "https://github.com/Rejoice-t/cinnaroll",
      image: "/logo.png",
    },

    {
      name: "Banking Simulation Application",
      summary:
        "A Java and MySQL banking simulation application implementing account management, deposits, withdrawals, and fund transfers.",
      technologies: [
        "Java",
        "MySQL",
        "Object-Oriented Programming",
        "Database Design",
      ],
      linkSource: "https://github.com/euricodande/Banky",
      image: "/banky.png",
    },
  ],

  /* =========================
     ABOUT
  ========================= */

  about: {
    description: `
      I’m Rejoice Teca, a final-year Computer Science student specialising in Software Development at the Namibia University of Science and Technology.

      I enjoy building practical software solutions and exploring how technology can be used to solve real-world problems. My experience includes full-stack web development, REST APIs, databases, artificial intelligence, and software testing.

      Some of my recent work includes SaveFridge AI, an AI-powered recipe application that I developed and deployed independently, and VISION, an AI livestock advisory prototype developed during the Deep Learning IndabaX Namibia hackathon.

      I also had the opportunity to study at Riga Technical University in Latvia through an academic exchange programme. This experience exposed me to different approaches to technology and strengthened my ability to work and communicate in diverse environments.

      I am currently looking for opportunities where I can apply my technical skills, learn from experienced developers, and continue growing as a software professional.
    `,
    image: "/rej.png",
  },
};