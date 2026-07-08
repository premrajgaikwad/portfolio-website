/* ==========================================================================
   CENTRAL CONTENT DATA
   Edit this file to update resume-driven content across the whole site.
   ========================================================================== */

const SITE_DATA = {

  githubUsername: "premrajgaikwad", // TODO: replace with real GitHub username

  roles: [
    "premium web experiences.",
    "responsive frontends.",
    "Java backend systems.",
    "clean, scalable code."
  ],

  education: [
    {
      date: "2022 — 2026",
      title: "B.E. in Information Technology",
      sub: "Engineering College, Pune, Maharashtra", // TODO: confirm exact college name
      desc: "Coursework focused on data structures & algorithms, object-oriented programming, databases and web technologies."
    },
    {
      date: "2021 — 2022",
      title: "HSC (Higher Secondary Education)",
      sub: "Science Stream",
      desc: "Built a strong foundation in mathematics and computer fundamentals before pursuing engineering."
    }
  ],

  skills: [
    { name: "Java",        level: 85, icon: "coffee" },
    { name: "Python",      level: 75, icon: "terminal" },
    { name: "C++",         level: 75, icon: "braces" },
    { name: "JavaScript",  level: 82, icon: "file-code" },
    { name: "HTML5",       level: 92, icon: "layout" },
    { name: "CSS3",        level: 88, icon: "palette" },
    { name: "React",       level: 68, icon: "atom" },
    { name: "Node.js",     level: 60, icon: "server" },
    { name: "REST APIs",   level: 72, icon: "plug" },
    { name: "Git & GitHub",level: 80, icon: "git-branch" },
    { name: "MySQL",       level: 65, icon: "database" },
    { name: "Responsive Design", level: 88, icon: "smartphone" }
  ],

  projects: [
    {
      tag: "Web App",
      title: "Weather App",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
      description: "A sleek, real-time weather application that fetches live forecast data and presents it through a clean, responsive interface with dynamic visuals based on current conditions.",
      features: [
        "Live weather data via public API integration",
        "Dynamic UI that adapts to weather conditions",
        "Search by city with graceful error handling",
        "Fully responsive across devices"
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      tag: "E-Commerce",
      title: "Online Grocery Website",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
      description: "A full front-to-back grocery shopping experience featuring product listings, categories, an interactive cart system and a smooth, intuitive checkout flow.",
      features: [
        "Product catalog with category filtering",
        "Add-to-cart with live quantity & price updates",
        "Clean, mobile-first shopping experience",
        "Modular, reusable component structure"
      ],
      stack: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      tag: "Portfolio",
      title: "Personal Portfolio Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
      description: "An earlier personal portfolio built to showcase projects and skills — the foundation that evolved into this premium, animation-driven experience.",
      features: [
        "Custom hand-coded layout and animations",
        "Project showcase with live links",
        "Contact section for outreach",
        "Optimized for performance and accessibility"
      ],
      stack: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      demo: "#"
    }
  ],

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Prodigy Infotech",
      date: "6 Months", // TODO: confirm exact dates
      points: [
        "Built and maintained responsive UI components using HTML, CSS and JavaScript inside a live production environment.",
        "Collaborated with a professional team on DOM manipulation, feature implementation and bug fixing.",
        "Improved page responsiveness and cross-browser consistency across multiple client-facing modules.",
        "Strengthened debugging workflow and version control practices using Git."
      ]
    },
    {
      role: "IT Engineering Student",
      company: "Self-Directed Project Development",
      date: "Ongoing",
      points: [
        "Independently designed, built and deployed multiple complete web projects end-to-end.",
        "Applied object-oriented principles (Java, C++, Python) to solve real coding problems.",
        "Continuously learning full-stack and backend development to expand beyond frontend work."
      ]
    }
  ],

  services: [
    { icon: "layout-template", title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces built with modern HTML, CSS and JavaScript best practices." },
    { icon: "smartphone", title: "Responsive Websites", desc: "Websites that look and feel premium on every screen — mobile, tablet and desktop." },
    { icon: "atom", title: "React Development", desc: "Component-driven, maintainable UIs built with React for scalable web applications." },
    { icon: "plug", title: "API Integration", desc: "Connecting frontends to REST APIs for dynamic, real-time data-driven experiences." }
  ],

  whyHireMe: [
    { num: "01", title: "Fast Learner", desc: "Rapidly picks up new languages, frameworks and tools to meet project needs." },
    { num: "02", title: "Clean Code", desc: "Writes readable, maintainable and well-structured code following best practices." },
    { num: "03", title: "Problem Solver", desc: "Strong OOP foundation and analytical mindset for tackling complex challenges." },
    { num: "04", title: "Creative Developer", desc: "Blends functional engineering with thoughtful, user-first design decisions." }
  ],

  certificates: [
    { icon: "award", title: "Java Programming", issuer: "Online Learning Platform", date: "2024" },
    { icon: "code", title: "Web Development Fundamentals", issuer: "Online Learning Platform", date: "2023" },
    { icon: "database", title: "Data Structures & Algorithms", issuer: "Online Learning Platform", date: "2024" },
    { icon: "layout-template", title: "Frontend Developer Internship", issuer: "Prodigy Infotech", date: "2024" }
  ],

  leetcode: {
    solved: 120,
    easy: 68,
    medium: 44,
    hard: 8,
    progress: [10, 22, 38, 55, 74, 92, 120]
  },

  testimonials: [
    {
      text: "Premraj is a fast learner who consistently delivered clean, functional UI components during his internship. His debugging skills stood out for someone early in their career.",
      name: "Team Lead",
      role: "Prodigy Infotech"
    },
    {
      text: "A dedicated engineering student with genuine curiosity for backend development. Always eager to understand the 'why' behind the code.",
      name: "Project Mentor",
      role: "Academic Project"
    },
    {
      text: "Reliable, detail-oriented, and someone who takes full ownership of every project he builds from scratch.",
      name: "Peer Collaborator",
      role: "College Project Team"
    }
  ]
};
