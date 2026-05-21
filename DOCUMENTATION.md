# Day 1 — Cinematic AI Engineer Portfolio

## 1. Project title

Cinematic AI Engineer Portfolio — Day 1 Landing Page

## 2. Project goal

Build the first landing page and hero section for a personal portfolio website using only HTML, CSS, and vanilla JavaScript. The design should feel cinematic, premium, and modern, while keeping the implementation beginner-friendly.

## 3. Day 1 progress summary

- Created the full-screen hero landing page with a dark cinematic background.
- Implemented a fixed top navbar, centered hero copy, CTA buttons, and a scroll indicator.
- Added overlay layers for readability and responsive mobile behavior.
- Added smooth scrolling, a hero fade-in effect, and graceful fallback support.

## 3.1 Day 1 Debug Update: Hero Background Image Fix

- Discovered the missing hero background image was caused by using the wrong file extension in the CSS and JavaScript asset path.
- Updated all references to use `assets/images/profile.png` instead of `profile.jpg`.
- Added console debugging to show whether the hero image loaded successfully or failed.
- Kept a dark gradient fallback background so the hero still looks intentional if the asset cannot load.

### What caused the image issue

The background image path in the CSS was pointing to `profile.jpg`, but the actual asset file is named `profile.png`. This mismatch prevented the browser from loading the image.

### How relative asset paths work

Relative paths like `assets/images/profile.png` are resolved from the location of the CSS file when used in `background-image` inside `style.css`.
If the CSS file is in the project root, `assets/images/profile.png` points to a folder next to it.

### Difference between .jpg and .png usage

JPEG and PNG are different image formats. The browser must request the exact file name and extension that exists on disk.
Using `.jpg` when the file is `.png` causes a 404 error and the image will not display.

### How CSS background-image works

`background-image` loads the image behind the hero content.
With `background-size: cover`, the image fills the hero area, and `background-position: center top` anchors it at the top center of the section.

### How overlays interact with background layers

The hero overlay sits on top of the background image and below the text.
It darkens the image and improves readability without blocking the image completely.

### How z-index layering affects visibility

The `.hero__content` has a higher z-index than the overlay so the text stays visible.
The overlay has no pointer events and sits above the image but below the hero text.

## 3.2 Day 1 Update: Responsive Hero Image Scaling

- Switched from using a CSS `background-image` to an absolutely positioned `<img>` element.
- This gives better control over `object-fit` and responsive scaling for portrait images.
- On desktop the image still feels cinematic with `object-fit: cover`.
- On tablet/mobile the code switches to `object-fit: contain` so more of the subject stays visible.

### Why portrait images get cropped in fullscreen heroes

Portrait images are taller than they are wide. When you fill a wide hero area with `background-size: cover`, the browser crops the image to fill the frame.
That can cut off the head or body of a person.

### Difference between `background-size: cover` and `background-size: contain`

- `cover` fills the hero area and may crop content to avoid empty space.
- `contain` fits the whole image inside the hero area but may add empty space around it.

### Difference between `object-fit: cover` and `object-fit: contain`

- `object-fit: cover` behaves like `background-size: cover` for `<img>` elements.
  It fills the container and can crop edges.
- `object-fit: contain` behaves like `background-size: contain`.
  It keeps the full image visible, even if that means some empty space appears.

### Why the implementation was changed

Using a real image element gives more responsive control and lets the browser preserve the subject.
It also makes it easier to provide a graceful fallback state when the asset fails to load.

### Responsive image handling strategy

- Desktop: use `object-fit: cover` for an immersive cinematic hero.
- Mobile/tablet: use `object-fit: contain` so the portrait subject is not cropped.
- Keep the dark overlay to maintain readability and atmosphere.

### Best practices for cinematic portfolio hero images

- Prefer portrait images that are centered and composed for hero layouts.
- Use object-fit to choose whether to prioritize fill or full visibility.
- Keep overlays subtle so the image remains visible but text stays readable.

## 4. Technologies used

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, no CSS libraries, and no external JavaScript libraries were used.

## 5. Folder / file structure

- `index.html` — main landing page
- `style.css` — all styling for the hero and layout
- `script.js` — behavior, smooth scrolling, and image fallback logic
- `DOCUMENTATION.md` — project notes and learning log
- `assets/`
  - `images/`
    - `profile.png` — hero background image path

Directory tree:

```
assets/
└── images/
    └── profile.png
index.html
style.css
script.js
DOCUMENTATION.md
```

## 6. Purpose of each file

- `index.html`: Defines the semantic page layout, navigation, and hero content.
- `style.css`: Controls visual styling, responsive behavior, and animation.
- `script.js`: Adds smooth navigation, hero load handling, and user experience polish.
- `DOCUMENTATION.md`: Describes the project, the design choices, and the next steps.

## 7. Explanation of assets/images folder

The `assets/images` folder stores image assets used by the site. For Day 1, the hero image should be placed at `assets/images/profile.png`.

## 8. Explanation of profile.png usage

- The hero section uses `assets/images/profile.png` as a real `<img>` element layered behind the text.
- The image is styled with `object-fit` so it can be scaled and cropped in a responsive way.
- On desktop we use `object-fit: cover` for cinematic fill and on smaller screens we switch to `object-fit: contain` to preserve the full portrait.
- If the image cannot load, the page falls back to a dark gradient background so the layout remains intact.

## 9. Explanation of full-screen hero design

- The hero fills the browser height with `min-height: 100vh`.
- Content is centered for a bold introduction.
- The image scrolls away naturally as the user navigates down the page.
- The design uses minimal text and premium spacing to feel cinematic.

## 10. Explanation of overlay system

- A dark overlay ensures text remains readable on top of the hero background.
- A second gradient layer adds visual depth and subtle cinematic lighting.
- Overlay layers are placed above the background and below the text content.

## 11. Explanation of z-index layering

- The hero background is the lowest layer.
- The overlay layer is stacked above the background.
- The hero text content is above the overlay using a higher `z-index`.
- The navigation bar sits above everything else to stay visible while scrolling.

## 12. HTML concepts used

- Semantic elements: `<nav>`, `<main>`, `<section>`, `<h1>`.
- In-page anchors for navigation targets.
- Accessibility features such as `aria-label` and a skip link.
- Clear and maintainable structure for future sections.

## 13. CSS concepts used

- CSS variables for colors, spacing, and transitions.
- Background image styling with gradients and fallback color.
- Flexbox for layout and button alignment.
- Responsive media queries for tablet and mobile screens.
- Keyframe animations for premium motion.

## 14. JavaScript concepts used

- DOM selection with `querySelector` and `querySelectorAll`.
- Event listeners for `DOMContentLoaded` and click events.
- Smooth scrolling using `scrollIntoView()`.
- Image load/error detection for graceful fallback states.
- Adding classes dynamically to trigger CSS transitions.

## 15. Responsive design explanation

- Breakpoints are applied at `900px` and `560px`.
- Typography scales using `clamp()` to remain readable.
- Buttons become full-width and stack vertically on mobile.
- Navigation wraps gracefully on smaller screens.

## 16. Animation explanation

- The hero content fades up on page load.
- The scroll indicator moves gently to guide the user downward.
- Button hover states use subtle elevation and glow.
- Reduced motion preferences are respected.

## 17. Color system explanation

- Dark gray and black tones form the primary background palette.
- `#541212` is used for subtle red depth.
- `#468A9A` is used for understated blue accents.
- Primary text remains light (`#EEEEEE`), with muted gray for secondary copy.

## 18. UI/UX design philosophy

- Keep the initial impression bold, clean, and professional.
- Emphasize readability with strong contrast and clear typography.
- Use minimal UI elements to support an immersive hero experience.
- Keep interactions gentle and premium.

## 19. How to add/replace profile image

1. Place your chosen image at `assets/images/profile.png`.
2. Prefer a portrait-oriented image for the best hero composition.
3. Refresh `index.html` in the browser to see the updated background.

## 20. How to run locally

- Open `index.html` directly in your browser.
- No local server is required for this static landing page.

Optional server command:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 21. How GitHub hosting works

- GitHub Pages serves static sites from a branch such as `main`.
- Push this repo to GitHub.
- Enable Pages in settings, choose the branch and folder, and publish.
- The site is served at your GitHub Pages URL.

## 22. How Vercel deployment works

- Vercel supports static HTML/CSS/JS projects.
- Connect your GitHub repository to Vercel.
- Deploy without a build step.
- Vercel provides a live staging and production URL.

## 23. What was learned during Day 1

- How to build a cinematic landing page with plain HTML/CSS.
- How to layer overlays for text readability on background images.
- How to make navigation smooth with JavaScript.
- How to plan a simple but scalable portfolio structure.

## 24. Current limitations

- Only the landing page is built so far.
- Contact and project sections are placeholders.
- Advanced accessibility and image optimization can be improved later.

## 25. Planned Day 2 improvements

- Add an About section and full project showcase.
- Create a functional contact form.
- Add responsive image loading with `srcset`.
- Improve keyboard navigation and focus styling.
- Add more portfolio sections for skills, experience, and case studies.
