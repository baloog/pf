# EDIT.md

This guide helps you update the portfolio site step-by-step.
It is written for beginners and includes exact file locations.

## 1. How to change the hero image

1. Place your new image in `assets/images/`.
2. Rename the file to `profile.png` or update the `src` in `index.html`:
   `src="assets/images/profile.png"`.
3. If the image is portrait, keep `object-fit: cover` on desktop and `object-fit: contain` on mobile.
4. Save the file and refresh the browser.

## Hero Text Animation Editing Guide

1. Open `index.html` and find the paragraph with `class="hero__copy hero__copy--typing"` inside the hero section.
2. The typing sentence is stored in the `data-typing-text` attribute on that paragraph.
3. To edit the sentence, update the full text inside `data-typing-text` and keep the same sentence punctuation.
4. The typing speed is controlled in `script.js` by the `typeSpeed` variable inside the `typeHeroText()` function.
5. The name reveal is controlled by the `hero__title--visible` class on the `<h1 class="hero__title">` element.
6. The CSS classes that control the animation are `hero__title`, `hero__title--visible`, `hero__copy--typing`, and `typing-active`.
7. The JavaScript function that controls the typing effect is `typeHeroText()` in `script.js`.
8. Common mistakes to avoid:
   - Do not remove the `data-typing-text` attribute from the hero copy paragraph.
   - Do not change the `class` names unless you also update the CSS and JavaScript.
   - Do not shorten the animation delay if you want the effect to run after the page loads.

## 2. How to edit the About section

1. Open `index.html`.
2. Find the section with `id="about"`.
3. Update the two paragraphs inside the `.about-card` elements.
4. Keep the text concise and professional.

## 3. How to update Education

1. Open `index.html`.
2. Find the section with `id="education"`.
3. Update the `<article class="timeline-card">` entries.
4. Keep the timeline format consistent and avoid adding location details.

## 4. How to add/edit Experience

1. Open `index.html`.
2. Find the section with `id="experience"`.
3. Add, remove, or update `<article class="experience-card">` entries.
4. Use the same heading, timeline, and bullet list structure.

## 5. How to add/edit Projects

1. Open `index.html`.
2. Find the section with `id="projects"`.
3. Each project is an `<article class="project-card">`.
4. Update the title, timeline, tech line, and bullet points.

## 6. How to edit Skills

1. Open `index.html`.
2. Find the section with `id="skills"`.
3. Each skill category is an `<article class="skill-card">`.
4. Change the category title and comma-separated list of skills.

## 7. How to add Achievements

1. Open `index.html`.
2. Find the section with `id="achievements"`.
3. Add a new `<li>` within the appropriate `<article class="achievement-card">`.
4. Keep achievements short and impactful.

## 8. How to edit Community Work

1. Open `index.html`.
2. Find the section with `id="community"`.
3. Each outreach item is a `<article class="community-card">`.
4. Update the title and paragraph text as needed.

## 9. How to replace resume PDF

1. Add the PDF file to `assets/resume/`.
2. Name it `Vignesh_Balaji_Resume.pdf`.
3. The buttons in `index.html` already use this path.
4. If you use a different filename, update the href in both hero and resume section links.

## 10. How to update social links

1. Open `index.html`.
2. Find the section with `id="contact"`.
3. Replace the GitHub, LinkedIn, or email link values.
4. Keep the visible text and the URL consistent.

## 11. How to change colors

1. Open `style.css`.
2. Find the `:root` section at the top.
3. Update the color variables such as `--bg`, `--text`, `--accent-red`, and `--accent-blue`.
4. Save and refresh to see the new palette.

## 12. How to edit navbar links

1. Open `index.html`.
2. Find the `<ul id="primary-navigation" class="nav-links">` list.
3. Update or add `<li><a href="#section-id">Label</a></li>`.
4. Match the `href` to the target section `id`.

## 13. How to add a new section

1. Open `index.html`.
2. Add a new `<section id="new-section" class="section reveal-on-scroll">` block.
3. Add a heading and content inside the new section.
4. Add a new navbar item linking to `#new-section`.
5. Optionally add styling in `style.css` if you need a unique layout.

## 14. How to test locally

1. Open `index.html` in your browser.
2. For a better local test, run a simple server from `f:\portfolio`:

```powershell
python -m http.server 8000
```

3. Open `http://localhost:8000`.
4. Refresh after each change.

## 15. How to push changes to GitHub

1. Stage the modified files:
   `git add index.html style.css script.js FULL_WEBSITE.md EDIT.md`
2. Commit your changes:
   `git commit -m "Update portfolio site content and docs"`
3. Push to GitHub:
   `git push origin main`

## 16. How Vercel auto-deploys

1. Connect the GitHub repo to Vercel.
2. Vercel will deploy each push automatically.
3. There is no build step for this static HTML/CSS/JS site.
4. Use the Vercel dashboard to view preview and production URLs.

## 17. Common beginner mistakes

- Forgetting to update the `href` to a matching section `id`.
- Leaving old color values in `style.css` and causing inconsistent branding.
- Adding too much text in one section, which makes the layout feel crowded.
- Forgetting to save the file before refreshing the browser.

## 18. Debugging tips

- Use the browser console to check for JavaScript errors.
- Use the Elements inspector to confirm section `id` names and link hrefs.
- Open the Network tab to verify that `assets/images/profile.png` and `assets/resume/Vignesh_Balaji_Resume.pdf` are loading.
- Resize the browser to test responsive behavior.
- If the hero image does not appear, confirm the filename and path in `index.html`.

## Light/Dark Mode Editing Guide

1. Where the theme toggle is located

- The theme toggle button is inside the navigation bar (`<nav class="navbar">`) near the menu controls.

2. How the toggle works

- Clicking the toggle adds or removes the `light-mode` class on the `<body>`.
- CSS variables defined in `style.css` change the page colors automatically.
- The toggle updates its icon and `aria-pressed` state for accessibility.

3. Where dark mode colors are defined

- Dark mode uses the default values inside the `:root` section at the top of `style.css`.
- These CSS variables control background, text, border, and accent colors.

4. Where light mode colors are defined

- Light mode overrides are defined in the `body.light-mode` block in `style.css`.
- This block sets the cream background, mint accents, lavender highlights, and charcoal text.

5. How to edit the light palette

1. Open `style.css`.
2. Find the `body.light-mode` selector.
3. Update values such as `--bg`, `--text`, `--accent-red`, `--accent-blue`, and `--card-bg`.
4. Save and refresh to preview the light theme.

6. How to edit the dark palette

1. Open `style.css`.
2. Find the `:root` selector at the top.
3. Update values such as `--bg`, `--text`, `--accent-red`, and `--accent-blue`.
4. Save and refresh to preview the dark theme.

7. How localStorage remembers the theme

- The JavaScript code in `script.js` stores the selected theme under the key `theme`.
- When the page loads again, the saved value is read and the theme is restored.

8. How to reset theme preference

1. Open the browser developer tools.
2. Go to the Application / Storage tab.
3. Find `localStorage` for the site.
4. Delete the `theme` key or clear localStorage.
5. Refresh the page to return to the default theme.

9. Common mistakes

- Forgetting CSS variables and using hardcoded colors instead.
- Changing a color in one place instead of the shared variables.
- Using the wrong `localStorage` key name in `script.js`.
- Adding the toggle button in the HTML but not connecting it to JavaScript.
## Hero Button Palette System

1. Which palette colors are used for each button

- `View Projects` uses the teal / purple gradient defined by `--btn-primary-start` and `--btn-primary-end`.
- `Download Resume` uses the purple gradient defined by `--btn-secondary-start` and `--btn-secondary-end`.
- `Contact Me` uses the yellow gradient defined by `--btn-tertiary-start` and `--btn-tertiary-end`.

2. Where button gradients are defined

- Gradients are defined in `style.css` using CSS variables at the top of the file.
- The `hero__actions` button rules use those variables to style hero buttons consistently.

3. How to change button colors later

- Open `style.css` and update the color variables:
  - `--btn-primary-start` / `--btn-primary-end`
  - `--btn-secondary-start` / `--btn-secondary-end`
  - `--btn-tertiary-start` / `--btn-tertiary-end`
- Save and refresh the page to see the new hero button palette.

4. Hover effect customization

- Hero buttons use `transform: translateY(-2px)` and soft shadows for hover.
- You can adjust the hover effect by editing `.hero__actions .btn--outline:hover` and `.hero__actions .btn--ghost:hover` in `style.css`.
- The transition timing is controlled by `--transition` at the top of `style.css`.

5. Dark mode vs light mode button behavior

- Dark mode preserves the existing aesthetic while using subtle palette glows.
- Light mode uses brighter teal, purple, and yellow gradients for the hero buttons.
- The same button styles are applied consistently through CSS variables.

6. How to add new palette-based buttons later

- Add a new button with class `btn` and one of the style variants.
- Define a new pair of variables in `style.css` for the gradient colors and shadow.
- Add a hero-specific selector in `style.css` to style the new button in the hero action group.
## Light Mode Section Color Editing Guide

1. How light mode section colors are assigned

- Light mode colors are applied using the `body.light-mode` class in `style.css`.
- Each section has its own background color rule under the `body.light-mode` block.
- Cards and inner panels still use `#FBF7F0` so they stay readable against the section colors.

2. Where to edit teal, purple, cream, dark text, and yellow variables

- Open `style.css`.
- The `body.light-mode` block contains the main theme variables:
  - `--bg` controls the page background color.
  - `--text` controls main text color.
  - `--btn-primary-start` and `--btn-primary-end` control button gradients.
  - `--card-bg` controls card and panel backgrounds.
- The explicit section backgrounds are defined in the same file using selectors like `body.light-mode #about`.

3. How to change the section color order

- In `style.css`, update the rules under the `body.light-mode` section color block.
- The current order is:
  1. `#about` → teal
  2. `#education` → purple
  3. `#experience` → yellow
  4. `#projects` → teal
  5. `#skills` → purple
  6. `#achievements` → teal
  7. `#community` → purple
  8. `#resume` → yellow
  9. `#contact` → teal
- Change the hex values if you want a new palette, but keep section IDs the same.

4. How to fix hero image washout

- In `style.css`, the hero overlay values are in the `body.light-mode` block.
- Use a dark gradient like `rgba(45, 55, 72, 0.35)` to `rgba(45, 55, 72, 0.55)`.
- Avoid strong white overlays because they fade the image and reduce contrast.
- The hero image appears behind the overlay and remains visible when the overlay is dark.

5. Why white overlays make images look faded

- White or bright overlays increase brightness over the image, washing out details.
- A dark translucent overlay preserves the underlying image while still making text readable.
- Light mode should keep the hero image visible, not hide it.

6. Where the theme toggle is located

- The toggle is in the navbar on the right side of the menu links.
- In `index.html`, it sits inside the `.navbar__actions` element.
- That keeps it visible on desktop and mobile.

7. How to move the toggle if needed

- If you want a different position, move the `.navbar__actions` block in `index.html`.
- Place it after the `nav-links` list to keep it at the far right.
- Avoid placing it in the center of the navbar or inside the brand block.

8. Common mistakes

- Editing section backgrounds in the wrong place, such as the default `:root` block.
- Using hardcoded white backgrounds instead of the shared `--card-bg` variable.
- Leaving the hero overlay set to white values in light mode.
- Moving the toggle HTML without keeping the same `.theme-toggle` class and JavaScript selector.

## Experience Timeline and Logo Editing Guide

This section explains where timeline logos live, how to replace them, and how to add or edit experience entries.

1. Where company logos are stored

- Company logos live in `assets/logos/` inside the project root.

2. Required company logo file names

- `assets/logos/goaira.png`
- `assets/logos/amazon.png`
- `assets/logos/ijona.png`
- `assets/logos/exela.png`

3. How to replace a company logo

1. Place the new PNG into `assets/logos/` and name it exactly as above.
2. Use a square PNG with transparent background for best results.
3. Refresh the site; the timeline will load the new image automatically.

4. How to add a new company / experience entry

1. Open `index.html` and find the `<section id="experience">` block.
2. Copy one of the existing `.timeline-item` blocks and paste it where you want the entry to appear.
3. Update the `timeline-meta` date, the `<h3>` title, the `.timeline-company` name, and the `<ul>` bullets.
4. Add a company logo file to `assets/logos/` and update the `<img src="...">` path inside the badge.

5. How to edit dates, role titles, company names, and bullet points

1. Open `index.html` and find the appropriate `.timeline-item` block.
2. Edit the text content directly: `div.timeline-meta` (dates), `h3` (role), `.timeline-company` (company), and the `<li>` items (details).

6. How the alternating timeline layout works

- Each entry uses a wrapper with either `timeline-item--left` or `timeline-item--right` which controls whether the content appears on the left or right side of the center line.
- The central badge column (company logo) is always in the middle column.
- To change an entry's side, switch the class between `timeline-item--left` and `timeline-item--right`.

7. How the mobile timeline layout works

- At narrow widths the timeline becomes a single column. The center line hides and badges stack above each card.
- The layout is controlled by a media query in `style.css` targeting `max-width: 1100px`.

8. How fallback initials / text work if logo files are missing

- Each badge contains an `<img>` and a `.logo-fallback` element.
- If the image fails to load the inline `onerror` handler hides the image and shows the fallback initials so the layout remains intact.

9. Where social / contact logos are stored

- Social icons live in `assets/logos/`.

10. Required social logo file names

- `assets/logos/github.png`
- `assets/logos/linkedin.png`
- `assets/logos/email.png`
- `assets/logos/resume.png`

11. How to update GitHub, LinkedIn, Email, and Resume links

1. Open `index.html` and find the `<section id="contact">` block.
2. Update the `href` for the appropriate `<a>` tag (GitHub / LinkedIn / mailto / resume PDF path).

12. How to replace resume PDF

1. Place the PDF in `assets/resume/` and name it `Vignesh_Balaji_Resume.pdf`.
2. If you use a different filename, update the resume link in `index.html`.

13. Common mistakes

- Wrong file path (use `assets/logos/` exactly).
- Wrong image extension (case-sensitive on some servers).
- Logo not placed inside `assets/logos` directory.

14. Recommended logo format

- Format: PNG
- Aspect ratio: square
- Background: transparent preferred
- Recommended sizes: 512x512 or 256x256 pixels

If you need help creating properly sized PNGs, I can add a short script to optimize logos.

## Dark Mode Prisma-Inspired Theme Editing Guide

1. Dark mode palette

- Primary black: `#000000`
- Deep violet: `#3B0066`
- Bright purple: `#8A00FF`
- Lavender highlight: `#C084FC`
- Muted lavender text: `#B9A7D8`
- Pure white: `#FFFFFF`

2. Where dark section colors are defined

- Dark mode uses the default `:root` colors at the top of `style.css`.
- The `body.light-mode` selector only overrides those values for light mode.
- The after-hero section backgrounds and card styling are controlled by `.section`, `.section--soft`, `.section--dark`, and the card selectors in `style.css`.

3. How purple gradients are applied

- Gradient accents are layered through the `.section` background rule for dark mode.
- These gradients are added behind sections using violet and lavender glow stops over `#000000`.
- This keeps the structure high-contrast while giving a premium purple glow behind content.

4. How card backgrounds and borders work

- Cards use `--card-bg` with a near-black translucent fill.
- The card border is a subtle purple tint using `--card-border`.
- Hover effects add a soft purple glow to cards, preserving the premium tech-forward feel.

5. How to adjust dark mode without affecting hero/light mode

- Only edit the default `:root` values for dark theme colors in `style.css`.
- Do not modify the `body.light-mode` block; it is the light theme override.
- Avoid changing hero-specific variables like `--hero-image-layer-*` and `--hero-overlay-*`.
- Keep hero button and overlay styles untouched to preserve the hero section appearance.

6. Warning not to edit hero image settings

- The hero image and its overlay are controlled by hero-specific CSS variables and HTML structure.
- Do not change hero image file paths, overlay color variables, or hero button color definitions when updating dark mode.
- Focus only on the `.section` and card styling after the hero section for dark mode updates.

## Advanced Scroll Animation System

1. Reveal animation logic

- All sections with `class="reveal-on-scroll"` automatically animate when they enter the viewport.
- The animation starts with `opacity: 0` and `transform: translateY(80px)`.
- When the section is visible, it fades in and slides up to `opacity: 1` and `translateY(0)`.
- The easing function is `cubic-bezier(0.34, 1.56, 0.64, 1)` for a smooth premium feel with slight bounce.
- Animation takes `0.9s` to complete and uses GPU acceleration with `will-change: opacity, transform`.

2. Intersection Observer usage

- `revealObserver` watches all `.reveal-on-scroll` elements for visibility changes.
- When an element enters the viewport, the `reveal-visible` class is applied.
- The observer has a threshold of `0.12` and a bottom margin of `-8%` to trigger earlier.
- Once the animation plays, the element is unobserved to avoid re-triggering.

3. Card stagger animation timing

- Individual cards inside sections (`.about-card`, `.project-card`, `.skill-card`, etc.) animate separately.
- Each card gets a staggered delay of `index * 0.12s` for a layered reveal effect.
- The `card-reveal` animation uses `translate3d(0, 80px, 0)` for hardware acceleration.
- Stagger creates a professional cascade effect as the user scrolls.

4. Alternating timeline animations

- The Experience section uses special animations for timeline items.
- Timeline items marked `.timeline-item--left` slide in from the left with `timeline-slide-left` animation.
- Timeline items marked `.timeline-item--right` slide in from the right with `timeline-slide-right` animation.
- Each timeline animation takes `0.85s` with staggered delays of `index * 0.15s`.
- This creates a cinematic alternating left-right reveal as the user scrolls through experience entries.

5. Contact section glow customization

- The Contact section has special background gradients and a pulsing glow effect.
- In dark mode, the background uses purple radial gradients over `#000000` for a premium tech feel.
- In light mode, the background uses lavender radial gradients over the cream base.
- The `contactGlowPulse` animation pulses every `6s` with opacity and scale changes.
- When the Contact section enters the viewport, the `contact-glow-active` class is added to trigger the glow.

6. Performance optimization choices

- All animations use `transform` and `opacity` to avoid layout reflows.
- The `translate3d()` function is used instead of `translateY()` for explicit GPU acceleration.
- The `will-change: opacity, transform` property hints the browser to prepare for animation.
- No blur effects are used to keep animations smooth even on lower-end devices.
- Stagger delays are kept under `200ms` so the entire animation feels responsive and not delayed.

7. CSS classes responsible for animations

- `.reveal-on-scroll` — base class for sections; holds initial opacity/transform state.
- `.reveal-visible` — applied when section is visible; triggers fade and slide up.
- `.card-reveal` — applied to individual cards; animations them with stagger.
- `.timeline-slide-left` — applied to left timeline items; slides in from left.
- `.timeline-slide-right` — applied to right timeline items; slides in from right.
- `.contact-glow-active` — applied to contact section; activates pulsing glow effect.
- `body:not(.light-mode)` — dark mode selector for dark-specific glow backgrounds.
- `body.light-mode` — light mode selector for light-specific glow backgrounds.

8. Differences between dark/light animation behavior

- Dark mode uses purple and lavender glows (`rgba(138, 0, 255, 0.15)` for contact glow).
- Light mode uses softer lavender glows (`rgba(210, 196, 233, 0.12)` for contact glow).
- Dark mode reveals feel deeper and more cinematic due to the black background.
- Light mode reveals feel softer and more elegant due to the cream background.
- The card reveal animations use the same easing in both modes for consistency.
- The contact glow pulses at `6s` in both modes but with different color depths.

9. How to adjust animation timing

1. Open `style.css`.
2. Find `.reveal-on-scroll` and change the transition time from `0.9s` to a different value (e.g., `0.6s` for faster, `1.2s` for slower).
3. Find `.card-reveal` and adjust the animation duration (default `0.8s`).
4. Find `.timeline-slide-left` and `.timeline-slide-right` to adjust timeline timing (default `0.85s`).
5. In `script.js`, modify the stagger delays: `(index * 0.12)` for cards (smaller = tighter, larger = more spread) and `(index * 0.15)` for timeline items.
6. Find `contactGlowPulse` to adjust contact glow speed (default `6s`).

10. How to disable or customize animations for specific sections

1. Open `index.html`.
2. Remove the `reveal-on-scroll` class from a section to disable animations for that section.
3. To animate a section differently, create a new CSS class (e.g., `.custom-animation`) and define custom keyframes in `style.css`.
4. Add the custom class to the desired section in `index.html` instead of (or in addition to) `reveal-on-scroll`.

11. Common animation mistakes to avoid

- Do not use `transition` and `animation` on the same element without `animation-fill-mode: forwards` to prevent state jumping.
- Do not increase stagger delays too much (keep under `200ms` per card) or the animation will feel sluggish.
- Do not remove `will-change: opacity, transform` or animations may lag on scroll.
- Do not use `blur()` or `filter` effects during reveals as they hurt performance.
- Do not use `left`, `top`, `bottom`, `right` for animation—always use `transform` for GPU acceleration.
- Do not remove `.reveal-on-scroll` from sections in the HTML, or they will appear without animation.
