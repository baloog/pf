# FULL_WEBSITE.md

## 1. Project overview

This repository contains a full personal portfolio website for Vignesh Balaji Ravichandran.
The design is cinematic, modern, and built using only HTML, CSS, and vanilla JavaScript.
The site is optimized for dark visual branding, premium motion, and clean readability.

## 2. Website purpose

The website serves as a professional portfolio for an AI and software engineering profile.
It highlights education, experience, projects, technical skills, achievements, community work,
and provides a resume download point with contact links.

## 3. Content source explanation

All content was created from the resume details provided by the user.
It includes real experiences, academic history, project descriptions, skills, and volunteer contributions.
No external or fabricated resume data was added beyond the provided specification.

## 4. Full section breakdown

- Hero: Cinematic landing section with a portrait background, headline, intro, and CTA buttons.
- About: Professional summary emphasizing Vignesh's academic and applied AI background.
- Education: Academic timeline entries for Quinnipiac University and SCSVMV University.
- Experience: Role cards for Goaira, Ijona, Amazon, and Exela SourceHov.
- Projects: Cinematic project cards covering medical AI pipelines, healthcare ML, mental health modeling, AI research, mobile apps, voice assistants, and conservation mapping.
- Project cards now include clickable banner images, consistent theme support, and dedicated detail pages in the `projects/` folder.
- Skills: Categorized technical skill cards for languages, frameworks, web development, databases, tools, and concepts.
- Certifications & Workshops: Included as part of achievement and community-related mentions.
- Leadership & Achievements: Awards, sports leadership, and recognition are presented in organized cards.
- Community Work & Volunteering: Meaningful outreach, coding support, and public assistance initiatives.
- Resume Section: Download resume call-to-action with a placeholder PDF path.
- Contact Section: GitHub, LinkedIn, and email links for professional outreach.

## 5. Folder structure

```
assets/
  images/
    profile.png
  resume/
    (placeholder path for Vignesh_Balaji_Resume.pdf)
  banner/
    chest-xray-pipeline.png
    tb-normal-classifier.png
    thoracic-progression.png
    heart-disease.png
    project4lonely.png
    project4lonely-update.png
    llm-time-series.png
    unhack.png
    talk-mail.png
    animal-logging-map.png
projects/
  chest-xray-pipeline.html
  tb-normal-classifier.html
  thoracic-progression.html
  heart-disease.html
  project4lonely.html
  project4lonely-update.html
  llm-time-series.html
  unhack.html
  talk-mail.html
  animal-logging-map.html
index.html
style.css
script.js
FULL_WEBSITE.md
EDIT.md
```

## 6. HTML architecture

The page uses semantic structure for accessibility and maintainability:
- `<header>` and `<nav>` for the main navigation bar.
- `<main>` to contain all portfolio sections.
- `<section>` tags identify discrete content regions.
- `<article>` elements organize project and experience cards.
- Buttons and links use anchors for smooth internal navigation.

Each section is labeled with an `id` matching the navbar links.
This allows smooth scrolling and active navigation highlighting.

## 7. CSS architecture

The stylesheet uses a design system of CSS variables for colors, spacing, shadows,
and transitions.
Key layout tools include:
- Flexbox for hero alignment and button layout.
- CSS Grid for responsive section cards and timeline layouts.
- Utility classes for surface styling and reveal animation.
- Media queries to ensure responsive behavior on tablets and phones.

The design maintains a dark cinematic palette with subtle red/blue accent tones.

## 8. JavaScript architecture

The JavaScript is intentionally lightweight and beginner-friendly.
It handles:
- mobile navigation toggling
- smooth scrolling for internal anchors
- active navbar highlighting using IntersectionObserver
- reveal animations when sections enter the viewport
- hero image load error detection with console debugging

This architecture keeps the site interactive without relying on external dependencies.

## 9. Hero image system

The hero uses a real `<img>` element inside an absolutely positioned image layer.
This approach allows responsive control with `object-fit` and better handling of portrait photos.
The hero image is combined with:
- a dark overlay for readability
- a gradient overlay for cinematic depth
- centered content and CTA actions

If the hero image fails to load, the image is hidden gracefully.

## 10. Resume download system

The download buttons in the hero and resume sections point to:
`assets/resume/Vignesh_Balaji_Resume.pdf`.
This path is a placeholder and can be replaced with the actual PDF file.
If the file is missing, the button still appears, but the download will need a real file.

## 11. Color palette explanation

Primary dark: `#0F0E0E`
Accent red: `#541212`
Accent blue: `#468A9A`
Text: `#EEEEEE`

The palette is used to maintain a black/grey dominant aesthetic.
Accent colors are used sparingly for buttons, labels, and subtle highlights.

## 12. Responsive design explanation

The site is responsive across desktop, tablet, and mobile viewports.
Breakpoints at 1100px, 900px, 680px, and 520px adjust layout structures.
Cards stack vertically on smaller screens, navigation becomes mobile-friendly,
and hero image behavior changes to preserve the subject.

## 13. Animation explanation

Animations are designed to be smooth and premium:
- fade-in reveal for each section
- floating scroll indicator animation
- button hover lift and highlight
- mobile menu transition

Reveal animations are triggered only once per section for a polished experience.

## 14. Accessibility notes

Accessibility features include:
- semantic HTML structure
- visible skip link for keyboard navigation
- focus-visible hover outlines via browser default support
- aria labels for navigation and scroll cues
- smooth scrolling with anchor links

The site avoids overwhelming animation and keeps text contrast strong.

## 15. GitHub workflow

To deploy using GitHub:
1. Push the repository to a GitHub repo.
2. In repo settings, enable GitHub Pages.
3. Select the branch and root directory.
4. GitHub Pages will publish the site at the provided URL.

Commit changes to `main` or a dedicated branch and push regularly.

## 16. Vercel deployment workflow

To deploy on Vercel:
1. Connect the GitHub repository to Vercel.
2. Choose the project and set the root folder.
3. Vercel auto-deploys on each push.
4. The site is available at the Vercel preview and production URLs.

Static HTML/CSS/JS sites require no build command.

## 17. Current website limitations

- The resume PDF is a placeholder path, not an actual file.
- Contact email is placeholder text and should be updated.
- There is no backend form or server-side processing.
- The site is static and does not include search or filtering features.

## 18. Future upgrade ideas

- Add an interactive contact form.
- Add project modal details or case study pages.
- Include performance optimizations and lazy-loaded assets.
- Add dark/light theme toggle.
- Convert to a component-based React app later.

## 19. Learning notes for beginners

This project demonstrates:
- how to build a polished portfolio with no frameworks
- how to use CSS Grid and Flexbox for layout
- how to keep animations subtle and responsive
- how to use IntersectionObserver for scroll-based behavior
- how to structure documentation and editable guides

## 20. Development log

- Built a cinematic hero section with a responsive portrait image.
- Added semantic sections for about, education, experience, projects, skills, achievements, community, resume, and contact.
- Implemented smooth navigation and section reveal animations.
- Created two documentation files to support future edits.
- Preserved a focused visual design with strong dark tones and subtle accents.
