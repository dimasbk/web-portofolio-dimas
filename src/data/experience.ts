import type { EducationItem, ExperienceItem, OrganizationItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "bri-fullstack",
    role: "Full Stack Developer",
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    employmentContext: "In-house developer via PT Satkomindo Mediyasa",
    period: "Mar 2024 — Present",
    isCurrent: true,
    location: "Jakarta, Indonesia",
    summary:
      "Developing, maintaining, and troubleshooting internal BRILink surrounding applications within an agile banking engineering team.",
    highlights: [
      "Develop and maintain internal BRILink surrounding systems (BSS, BAM, BRILinkBOS, MyBRILink, and BRILink Mobile).",
      "Execute feature delivery, code debugging, and root-cause troubleshooting to maintain application stability and performance.",
      "Provide L2/L3 technical support and operational assistance for regional office and business division users.",
      "Deliver backend services and web modules across Laravel, Lumen, Golang, and MySQL.",
    ],
    techStack: ["Golang", "Laravel", "Lumen", "PHP", "MySQL", "Job Queue"],
  },
  {
    id: "borongboil-backend",
    role: "Freelance Backend Developer",
    company: "Borongboil.id (GarasiAHA)",
    period: "Oct 2023 — Jul 2024",
    isCurrent: false,
    location: "Remote, Indonesia",
    summary:
      "Built backend services powering an automotive listing platform connecting prospective buyers with sales representatives.",
    highlights: [
      "Architected RESTful backend endpoints for vehicle inventory browsing, filtering, and lead routing.",
      "Implemented direct sales representative inquiry workflows and relational data models.",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    id: "angkasa-pura-intern",
    role: "Airport Technology Intern",
    company: "PT Angkasa Pura I",
    period: "Feb 2023 — Apr 2023",
    isCurrent: false,
    location: "Bali, Indonesia",
    summary:
      "Built operational monitoring dashboards and analyzed airport terminal telemetry to support service efficiency.",
    highlights: [
      "Developed a monitoring dashboard with real-time status charts tracking check-in counters, boarding gates, and baggage belts.",
      "Analyzed operational throughput data to support airport service efficiency and facility decision-making.",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Vis.js"],
  },
  {
    id: "unud-assistant-lecturer",
    role: "Head of Assistant Lecturer — Integration & System Migration",
    company: "Universitas Udayana",
    period: "Feb 2022 — Apr 2022",
    isCurrent: false,
    location: "Bali, Indonesia",
    summary:
      "Led practical coursework delivery and mentored undergraduate Information Technology students on system integration.",
    highlights: [
      "Guided and mentored Information Technology students through integration and system migration lab modules.",
      "Coordinated fellow assistant lecturers to standardize grading and ensure consistent course delivery.",
    ],
    techStack: ["System Integration", "Mentoring", "IT Architecture"],
  },
];

export const education: EducationItem[] = [
  {
    id: "unud-bachelor",
    institution: "Universitas Udayana",
    degree: "Bachelor in Teknologi Informasi",
    period: "Aug 2019 — Oct 2023",
    gpa: "3.67 / 4.00",
    honors: "Cumlaude",
    areaOfInterest: [
      "Backend Engineering",
      "Software Development",
      "API Design",
      "SQL Databases",
      "Cloud Computing",
    ],
    finalProject:
      "Rancang Bangun Dashboard Pengelolaan Investor Saham Berbasis Web",
    highlights: [
      "Graduated Cumlaude with a 3.67/4.00 GPA in Information Technology.",
      "Focused academic research on backend architectures, relational databases, and web-based financial dashboards.",
    ],
  },
  {
    id: "bangkit-2022",
    institution: "Bangkit Academy 2022",
    degree: "Cloud Computing Cohort",
    period: "Feb 2022 — Jul 2022",
    highlights: [
      "Completed intensive coursework and hands-on labs in Cloud Computing and Google Cloud Platform (GCP).",
      "Developed RESTful APIs with Node.js and selected as a Top 50 Capstone Project team.",
    ],
  },
  {
    id: "timedoor-bootcamp",
    institution: "Timedoor",
    degree: "Laravel Backend Bootcamp",
    period: "Apr 2023 — Jul 2023",
    highlights: [
      "Trained in backend web architecture, MVC patterns, and relational database modeling using Laravel.",
      "Delivered a full-featured e-commerce web application as the final capstone project.",
    ],
  },
];

export const organizations: OrganizationItem[] = [
  {
    id: "hmti-unud",
    role: "Anggota Konsumsi",
    organization: "Himpunan Mahasiswa Teknologi Informasi",
    period: "Mar 2020 — Mar 2021",
    highlights: [
      "Managed food and beverage logistics to support organizational events and operational needs.",
    ],
  },
];
