# Dimas Bagus Kurniawan — Developer Portfolio

Personal portfolio website for **Dimas Bagus Kurniawan**, a Full Stack Developer specializing in scalable web applications, backend APIs, and relational database architecture. Built with Next.js App Router, TypeScript, and Tailwind CSS using a Swiss Minimalist 12-column grid layout.

## Tech Stack

- **Framework:** Next.js 15 (App Router) & React 19
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations:** Framer Motion (with `prefers-reduced-motion` support)
- **Icons:** Lucide React
- **Utilities:** `clsx` & `tailwind-merge`

## Features

- **Overview & Current Assignment:** Hero introduction with a structured current-role status card highlighting active BRILink systems and core stack.
- **Experience & Background (`/#experience`):** Chronological work history, education & training, organizational involvement, and certifications.
- **Projects Archive (`/projects`):** Interactive project showcase featuring a Stack Frequency breakdown, production vs. completed counts, category filter tabs (`All Systems`, `BRILink Production`, `Freelance & Intern`, `Academic & Cloud`), deliverables, and metrics.
- **Direct Contact (`/#contact`):** Direct email, WhatsApp chat link (`wa.me`), and LinkedIn profile links.

## Project Structure

```text
├── public/
│   └── images/               # Static image assets
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind v4 theme tokens & Swiss grid utilities
│   │   ├── layout.tsx        # Root layout, Google Fonts (Inter & JetBrains Mono), Navbar, Footer
│   │   ├── page.tsx          # Home page (Overview & Experience sections)
│   │   └── projects/
│   │       └── page.tsx      # Projects & Enterprise Systems page
│   ├── components/
│   │   ├── layout/           # Navbar and Footer
│   │   ├── projects/         # ProjectsShowcase (filters, stack chart, cards)
│   │   ├── sections/         # ExperienceSection
│   │   └── ui/               # Reusable primitives (Button, TechTag)
│   ├── data/
│   │   ├── experience.ts     # Work experience, education, and organizations
│   │   ├── profile.ts        # Personal profile and contact endpoints
│   │   ├── projects.ts       # Project case studies and metrics
│   │   └── skills.ts         # Skill groups and certifications
│   ├── lib/
│   │   └── utils.ts          # cn() class merging helper
│   └── types/
│       └── index.ts          # Shared TypeScript interfaces
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+ (tested with Node.js 22)
- npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production server |
| `npm run lint` | Runs `next lint` |
| `npm run typecheck` | Runs `tsc --noEmit` to check TypeScript types |

## Updating Content

Portfolio content is strongly typed and stored locally in `src/data/`:

- **Profile & Contact:** `src/data/profile.ts`
- **Experience, Education & Organizations:** `src/data/experience.ts`
- **Projects & Metrics:** `src/data/projects.ts`
- **Certifications:** `src/data/skills.ts`
