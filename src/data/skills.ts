import type { Certification, SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend-languages",
    code: "01 // BACKEND & RUNTIMES",
    title: "Backend Engineering",
    description:
      "Production experience building enterprise REST APIs, microservices, and asynchronous job queues.",
    items: [
      "Golang",
      "PHP",
      "Laravel",
      "Lumen",
      "Node.js",
      "Express",
      "Python",
      "Job Queue",
      "RESTful APIs",
    ],
  },
  {
    id: "data-persistence",
    code: "02 // DATA & STORAGE",
    title: "Databases & Persistence",
    description:
      "Relational schema design, query optimization, and high-integrity financial data modeling.",
    items: ["MySQL", "SQL Databases", "Firebase", "Data Modeling"],
  },
  {
    id: "cloud-tooling",
    code: "03 // CLOUD & WORKFLOW",
    title: "Cloud & Engineering Tooling",
    description:
      "Cloud infrastructure fundamentals, version control, and agile enterprise delivery.",
    items: [
      "Google Cloud Platform (GCP)",
      "Google Cloud Functions",
      "Cloud Services",
      "Git & GitHub",
      "Mailtrap",
      "Midtrans Integration",
    ],
  },
  {
    id: "core-competencies",
    code: "04 // METHODOLOGY",
    title: "Core Competencies",
    description:
      "Analytical problem-solving and cross-functional collaboration in high-availability environments.",
    items: [
      "Full Stack Development",
      "Computational Thinking",
      "Analytical Thinking",
      "Debugging & Troubleshooting",
      "Agile Teamwork",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "dicoding-gcp-backend",
    provider: "Dicoding",
    title: "Back-End Development with Google Cloud",
    focus: "Cloud & APIs",
  },
  {
    id: "coursera-gce",
    provider: "Coursera",
    title: "Architecting with Google Compute Engine",
    focus: "Cloud Infrastructure",
  },
  {
    id: "coursera-ace",
    provider: "Coursera",
    title: "Associate Cloud Engineer Journey",
    focus: "GCP Operations",
  },
  {
    id: "dicoding-git",
    provider: "Dicoding",
    title: "Git with GitHub",
    focus: "Version Control",
  },
  {
    id: "dicoding-career",
    provider: "Dicoding",
    title: "Software Developer Career Path",
    focus: "Software Engineering",
  },
  {
    id: "dicoding-js-web",
    provider: "Dicoding",
    title: "JavaScript & Web Programming",
    focus: "Web Foundations",
  },
];
