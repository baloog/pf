# Portfolio Website — Context Summary for LLMs

## What this is
A static personal portfolio website for **Vignesh Balaji Ravichandran**, an AI/ML engineer. Single-page site (`index.html`) with cinematic dark theme + separate detail pages for each project. Pure HTML/CSS/vanilla JS — **no framework, no build step, no bundler, no dependencies**.

## Stack & how to run
- HTML5, CSS3 (custom properties / design tokens), vanilla JavaScript (no libraries).
- No package.json, no npm install needed. Just open `index.html` in a browser, or serve statically:
  `python -m http.server 8000`
- Deployment target: static hosting (GitHub Pages / Vercel, no build command).

## File structure
```
index.html          # entire one-page site (~670 lines): all sections live here
style.css            # ~1,430 lines, all styling, CSS custom-property design system
script.js             # ~200 lines: nav toggle, theme switch, smooth scroll,
                       #   IntersectionObserver reveal animations, hero typing effect
projects/            # 15 standalone detail pages, one per project (see below)
assets/
  images/            # profile.png (hero), header-logo.png, footer-gif.gif
  banner/            # project card banner images (10 present)
  logos/             # company/tech/social logos (amazon, exela, ijona, compass,
                       #   github, linkedin, email, resume icons)
  resume/            # Vignesh_Balaji_Resume.pdf (real file, not a placeholder)
README.md            # effectively empty
DOCUMENTATION.md      # STALE — "Day 1" dev log from early hero-section-only build
FULL_WEBSITE.md       # STALE — earlier full-site dev log, colors/palette outdated
EDIT.md               # ACTIVE how-to guide — practical editing instructions for
                       #   hero, sections, colors, theming, animations, deployment
```

## Site sections (in `index.html`, in order)
`home` (hero) → `about` → `education` → `experience` → `projects` → `skills` → `achievements` → `community` → `resume` → `contact`

- **Education**: Quinnipiac University, SCSVMV University (timeline cards).
- **Experience**: role cards — Goaira, Ijona, Amazon, Exela SourceHov.
- **Skills**: categorized cards — Languages, Frameworks & Libraries, Web Development, Databases, Tools, Concepts.
- **Achievements**: Professional awards, Academic/technical awards, Sports & leadership.
- **Community**: Public health support, Student support, Social impact.
- **Contact**: GitHub, LinkedIn, Email, Resume download.

## Projects
10 projects are linked as cards on the homepage (with banner images), each pointing to a detail page in `projects/`:
1. Chest X-ray Disease Identification and Classification → `chest-xray-pipeline.html`
2. TB vs Normal Chest X-ray Classifier → `tb-normal-classifier.html`
3. Longitudinal Thoracic Disease Progression Analysis → `thoracic-progression.html`
4. Heart Disease Prediction System → `heart-disease.html`
5. Loneliness_Prediction → `project4lonely.html`
6. Multi-Task Learning for Mental Health Using Loneliness Data → `project4lonely-update.html`
7. LLM Time Series Benchmark → `llm-time-series.html`
8. Time Monitor social-media Android app (Unhhackathon) → `unhack.html`
9. Mail_Hack / Talk Mail → `talk-mail.html`
10. Animal Logging Map for Trekkers and Forest Department → `animal-logging-map.html`

**5 additional project pages exist in `projects/` but are NOT linked from the homepage yet** (no banner image, no card): `chest-xray.html`, `drone-emergency.html`, `face-recognition.html`, `library-booking.html`, `notice-board.html`. These look like in-progress/orphaned pages — worth checking with the user before assuming they should be wired up or removed.

## Design system (current, from `style.css` `:root`)
Dark, high-contrast **purple/violet** cinematic theme (not the red/blue described in the stale `FULL_WEBSITE.md` doc — the palette has since been redone):
- `--bg: #000000`, `--surface: #060206`, `--text: #FFFFFF`, `--text-muted: #B9A7D8`
- `--accent-red: #3B0066`, `--accent-blue: #8A00FF` (naming is legacy; both are now violet-family)
- Border/shadow/glow all use `rgba(138, 0, 255, ...)`
- Also supports a **light mode** via a `body.light-mode` class (see EDIT.md "Light/Dark Mode Editing Guide")
- Gradient-based button system with primary/secondary/tertiary/outline/ghost variants defined as CSS custom properties

## JS behavior (`script.js`)
- Mobile nav toggle (hamburger, `aria-expanded`)
- Light/dark theme toggle, persisted via `localStorage`
- Smooth-scroll navigation for in-page anchor links
- `IntersectionObserver` for active-nav-link highlighting while scrolling
- `IntersectionObserver`-driven reveal animations for cards/timeline items, staggered by index, with special handling for timeline left/right slide and a contact-section glow effect
- Hero title fade-in + a typewriter effect on the hero copy
- Hero image load/error detection with console logging and graceful hide-on-failure

## Documentation files — which to trust
- **`EDIT.md`** is the live, maintained how-to guide (colors, sections, animations, theming, deployment). Trust this for "how do I change X" questions.
- **`DOCUMENTATION.md`** and **`FULL_WEBSITE.md`** are historical dev logs from earlier build stages (pre-purple-theme, pre-current-project-list). Useful for narrative/history context only — don't trust their color values, file lists, or "current limitations" sections as current fact.
- **`README.md`** is essentially empty.

## Known inconsistencies / open items
- 5 orphaned project pages not linked on the homepage (listed above).
- Legacy CSS variable names (`--accent-red`, `--accent-blue`) no longer match their actual violet/purple values — cosmetic naming debt, not a bug.
- `DOCUMENTATION.md` / `FULL_WEBSITE.md` describe an older red/blue palette and an older, shorter project list — outdated, should probably be updated or removed if no longer useful.

## Git history (most recent first)
```
863b602 Projects fix: link
f0b8607 header_image,footervideo
6c4f56f new projects,fonts and bug fix
2c53ac8 ripple animation,exp add,new sections
7a1eba7 slide animation and calig logo
0148b4f dark palette-color update futuristic
7d26bd3 darkmode_edit
15ed9a7 final0site
56e1f16 website
ed9d578 first commit
```
Trajectory: started as a plain site → dark mode → the current futuristic/purple palette → animations (ripple, slide) and new sections/experience entries → new projects/fonts → header logo + footer video/gif → most recent commit fixed a project link.
