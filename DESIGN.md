---
version: "alpha"
name: "Swiss Minimalist Portfolio — Dimas Bagus Kurniawan"
description: "Developer portfolio layout combining 1950s Swiss design principles with high-density data presentation for enterprise backends and full-stack systems."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#F5F1E8"
  neutral: "#808080"
  surface: "#B38B6D"

typography:
  h1:
    fontFamily: sans-serif
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: sans-serif
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: sans-serif
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

A strict, grid-based developer portfolio designed for a Full Stack Engineer specializing in enterprise systems, fintech infrastructure, and backend architecture. Rooted in 1950s Swiss design (Basel and Zurich schools), it uses mathematical alignment, high-contrast typography, and structured whitespace to let professional experience and technical depth speak for themselves.

- Density: 4/10 — Structured & Technical
- Variance: 2/10 — Grid-Locked
- Motion: 4/10 — Subtle

- **Style:** Clean, Geometric, Functional, Grid-Based, Developer-Centric
- **Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, backend, enterprise
- **Era:** 1950s Swiss
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Black** (#000000) — Dark surface, primary text, dark mode background
- **White** (#FFFFFF) — Light surface, primary background, card fills
- **Beige** (#F5F1E8) — Extended palette, subtle card accents or badges
- **Grey** (#808080) — Secondary text, structural grid borders, muted metadata
- **Taupe** (#B38B6D) — Accent warmth for subtle highlights and key metrics


## Typography

- **Display / Hero:** sans-serif — Weight 700, tight tracking, used for headline impact
- **Body:** sans-serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** sans-serif — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used exclusively for code snippets, tech stack tags, API endpoints, system metadata, and version numbers

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary (12-column system). Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen layout (Introduction & Resume CTA on the left; live terminal or architecture status preview on the right).
- **Project sections:** Asymmetric grid or structured card rows highlighting system scale (e.g., BRILink ecosystem, high-throughput backends). No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. Sharp, precise geometric boundaries reflecting engineering precision.


## Components

- **Primary Button:** Sharp edges (0px) shape. Primary color fill with contrasting text. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px solid border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (`0 2px 12px rgba(0,0,0,0.06)`). 1px border stroke for structural definition.
- **Tech Tags / Badges:** Monospace font (JetBrains Mono), 0.75rem, sharp rectangular pill or border box, indicating languages and tools (Golang, Laravel, Lumen, MySQL).
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background, sticky-nav layer. Active item: black or accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide React)
- No pure black (#000000) for large background blocks in dark mode — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use clean mockups or inline SVG
- No generic lorem ipsum in demos — use real project names (BRILink, BSS, BAM) and tech metrics

- Do Grid-based layout (12-16 columns)
- Do Typography hierarchy clear
- Do Emphasize backend reliability, clean architecture, and scale
- Do WCAG AAA contrast verified
- Do Mobile responsive grid


## Use Case

Developer Portfolio, Full Stack Engineer Showcase, Enterprise Architecture & Backend Systems