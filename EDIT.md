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
