# AGENTS.md — Portfolio Website Guidelines

## 1. Tech Stack & Core Principles
- **Framework:** Next.js (App Router) with React 19+ and TypeScript (Strict Mode).
- **Styling:** Tailwind CSS. Avoid arbitrary values (e.g., `w-[347px]`); prefer standard spacing, semantic color scales, and clean utility compositions.
- **Icons:** `lucide-react` (consistent stroke widths, typically `1.75` or `2`).
- **Animation:** Framer Motion / Motion (`framer-motion`) for subtle, professional UI transitions (respect `prefers-reduced-motion`).
- **Content/Data:** Strongly typed local data files (`/src/data/`) representing professional experience (BRILink, Angkasa Pura I, freelance projects), technical skills, and past projects.

---

## 2. Project Directory Structure
```text
├── src/
│   ├── app/                  # App Router pages, layouts, and API routes
│   │   ├── layout.tsx        # Root layout (fonts, metadata, theme provider)
│   │   ├── page.tsx          # Home / Portfolio Landing Page
│   │   └── projects/         # Detailed case studies or project pages
│   ├── components/
│   │   ├── ui/               # Reusable primitives (Buttons, Badges, Cards)
│   │   ├── sections/         # Page sections (Hero, Experience, Projects, Skills, Contact)
│   │   └── layout/           # Persistent elements (Navbar, Footer)
│   ├── data/                 # Typed portfolio content (projects.ts, experience.ts)
│   ├── lib/                  # Utilities (e.g., cn() class merger)
│   └── types/                # Shared TypeScript interfaces (Project, ExperienceItem)
└── public/
    ├── images/               # Optimized static assets and project screenshots
    └── resume.pdf            # Professional CV