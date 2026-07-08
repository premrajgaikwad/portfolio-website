# Premraj Gaikwad — Premium Portfolio Website

A futuristic, award-style personal portfolio for **Premraj Devidas Gaikwad** — Aspiring Software
Developer, Full Stack Developer & Java Backend Developer — built as a fast, dependency-light
static website with an Apple/Linear/Vercel-inspired dark, glassmorphic aesthetic.

> **Note on tech stack:** The original brief requested a Next.js/React/Three.js/Framer Motion
> build. This project is hosted in a **static website environment** (no Node build pipeline, no
> server). To deliver the same premium visual result, the site is built with semantic
> HTML5 + CSS3 + vanilla JavaScript, using **GSAP, Lenis (smooth scroll), Chart.js, Lucide Icons,
> and Font Awesome (brand icons)** via CDN — achieving the same look, motion, and interactivity
> without a build step, and deployable instantly via the Publish tab.

## ✅ Completed Features

- **Animated loading screen** — logo pulse, name, progress bar, percentage counter.
- **Custom cursor** — glow + dot cursor with hover/magnetic states (desktop only).
- **Animated background** — CSS noise texture, animated grid, floating canvas particles.
- **Sticky glass navigation** — scroll-aware, mobile slide-in menu.
- **Hero section** — large animated name, rotating role text, stats counters, floating glass
  profile card with magnetic CTA buttons (Download Resume / View Projects / Hire Me).
- **About section** — professional summary + education timeline + highlight cards.
- **Skills section** — animated circular progress rings for 12 core skills.
- **Projects section** — 3D-tilt project cards (Weather App, Online Grocery Website, Portfolio
  Website) with tech stack pills, feature lists, GitHub/Live Demo buttons.
- **Experience / Internship timeline** — Prodigy Infotech internship + self-driven project work.
- **Services section** — Frontend Development, Responsive Websites, React Development, API
  Integration.
- **Why Hire Me** — 4 premium value-proposition cards.
- **Certificates section** — placeholder certificate cards (edit with real certs).
- **Tech stack orbit** — animated multi-ring orbiting icon system.
- **GitHub stats section** — live GitHub stats/streak/top-language cards via github-readme-stats.
- **LeetCode / DSA journey** — stat cards + animated Chart.js line graph.
- **Testimonials** — premium placeholder quote cards.
- **Contact section** — glassmorphic form (wired to FormSubmit.co, no backend required), plus
  direct contact links and resume download.
- **Footer** — animated logo, socials, back-to-top.
- **Scroll animations** — fade/slide-up reveals on every section via IntersectionObserver +
  Lenis smooth scrolling.
- Fully **responsive** across desktop, tablet, and mobile.

## 🌐 Site Structure / Entry Points

Single-page site: **`index.html`** with in-page anchor sections:

| Path | Section |
|---|---|
| `index.html#home` | Hero |
| `index.html#about` | About / Education |
| `index.html#skills` | Skills |
| `index.html#projects` | Projects |
| `index.html#experience` | Internship & Experience |
| `index.html#services` | Services |
| `index.html#why-hire-me` | Why Hire Me |
| `index.html#certificates` | Certificates |
| `index.html#techstack` | Tech Stack Orbit |
| `index.html#github` | GitHub Stats |
| `index.html#leetcode` | DSA / LeetCode Journey |
| `index.html#testimonials` | Testimonials |
| `index.html#contact` | Contact Form |

Resume file is served statically at: `assets/Premraj_Gaikwad_Resume_01.pdf`

## 🗂 Project Structure

```
index.html            Main page markup (all sections)
css/style.css         Full design system: tokens, layout, components, animations
js/data.js            ⭐ Central content file — edit resume data here
js/particles.js       Lightweight canvas particle background
js/main.js            Loader, cursor, nav, magnetic buttons, tilt, content rendering
js/animations.js      Lenis smooth scroll, GSAP/IntersectionObserver reveals, counters,
                       skill rings, LeetCode chart
assets/               Resume PDF and other static assets
README.md             This file
```

## ✏️ How to Update Content

Almost all resume-driven content lives in **`js/data.js`** — edit this single file to update:
`roles`, `education`, `skills`, `projects`, `experience`, `services`, `whyHireMe`,
`certificates`, `leetcode` stats, and `testimonials`. The page re-renders these automatically.

**Placeholders you should confirm/replace** (the source PDF could not be fully machine-read due
to a temporary parsing tool outage, so a few fields were filled in with reasonable placeholders
based on your prompt and the resume preview text):
- Exact college/university name and CGPA (`js/data.js → education`)
- Exact internship dates (`js/data.js → experience[0].date`)
- Real LinkedIn & GitHub profile URLs (search/replace `href="#"` on social icons in `index.html`)
- Real GitHub username for live stats (`js/data.js → githubUsername`)
- Real certificate names/issuers/links (`js/data.js → certificates`)
- Real LeetCode stats (`js/data.js → leetcode`)
- Live demo / GitHub repo links per project (`js/data.js → projects[].github/.demo`)

## 🚧 Not Yet Implemented / Known Limitations

- Contact form currently submits via **FormSubmit.co** (a free, keyless email relay) since this
  static site cannot run a backend — first submission requires one-time email confirmation from
  FormSubmit.
- GitHub stats/streak images depend on a placeholder username; update `githubUsername` in
  `js/data.js` for real data to appear.
- Certificate and testimonial cards are illustrative placeholders — replace with real content/links.
- True Three.js/React Three Fiber 3D scenes were replaced with a lightweight canvas particle
  system + CSS-animated orbit for performance and compatibility in a static environment; can be
  upgraded to full Three.js later if desired.

## 🔜 Recommended Next Steps

1. Confirm/replace the placeholder fields listed above with your exact resume details.
2. Add real project screenshots (replace Unsplash placeholder images in `js/data.js`).
3. Connect real LinkedIn/GitHub URLs across the site.
4. Replace testimonial placeholders with real recommendations (or remove the section).
5. Once verified, publish via the **Publish tab**.

## 🎨 Design System

- **Palette:** Background `#050505`, secondary `#101010`, glass cards `rgba(255,255,255,0.05)`,
  accents Electric Blue `#4d7fff`, Purple `#9b5cff`, Cyan `#35e6d6`.
- **Typography:** Space Grotesk (display), Inter (body).
- **Effects:** Glassmorphism, soft glows, magnetic buttons, 3D tilt cards, custom glow cursor,
  scroll-triggered reveals, animated gradient text.

## 📦 Libraries Used (via CDN)

- GSAP + ScrollTrigger — animation engine
- Lenis — smooth inertial scrolling
- Chart.js — LeetCode progress graph
- Lucide Icons — general iconography
- Font Awesome — brand icons (GitHub/LinkedIn)
- Google Fonts — Space Grotesk & Inter

## 💾 Data & Storage

No database/table backend is used — all content is static, defined in `js/data.js`. The contact
form uses the third-party FormSubmit.co relay (no API key required) to deliver messages to
`premrajgaikwad1@gmail.com` without any server-side code.

## 🚀 Deployment

To make this site live, go to the **Publish tab** in this workspace and publish with one click —
it will handle deployment automatically and give you a live URL.
