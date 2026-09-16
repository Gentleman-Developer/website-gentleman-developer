# Gentleman Developer Website

## Goal Description

Create a premium, warm‑styled personal website for the "Gentleman Developer" showcasing mobile app and game projects. The site will feature elegant island‑and‑sea weave animations, visual motifs of suits, devices, and subtle heat/glow effects to evoke a refined "gentleman" aesthetic. The design uses modern UI patterns (glassmorphism, smooth gradients, micro‑animations) and is fully responsive on both mobile and desktop. No dark‑mode toggle; English only.

## User Review Required

> [!IMPORTANT]
> Design choices have been confirmed based on your input:
> - **Color palette**: `#FFD758` (warm amber), `#FCE59A` (light gold), `#2BBBD7` (vivid teal), `#218DAE` (deep teal). These will be used as primary, secondary, accent, and background colors.
> - **Animation style**: Island and sea weave animation using CSS keyframes for gentle wave motion, with subtle hover glows on interactive elements.
> - **Sections**: Hero, About, Projects (apps & game), Skills, Contact, with a prominent Google Play button linking to your app.
> - **Assets**: AI‑generated hero illustration (gentleman with device) and island/sea background.
> - **Fonts**: Google Font "Outfit" for headings, "Inter" for body text.
> - **Responsive design**: Mobile‑first layout that scales gracefully to larger screens.
> - **No dark mode**; site remains in warm light theme.

## Open Questions

> [!CAUTION]
> - Do you need any additional sections (e.g., Testimonials, Blog) beyond the ones listed?
> - Are there any specific images or logos you want to provide for the projects showcase?

## Proposed Changes

### Core Files

#### [NEW] [index.html](file:///c:/Users/gentl/Desktop/Cursor%20Gentleman%20OS/Gentleman%20Developer%20Website/index.html)
- Semantic HTML5 layout with sections: header, hero, about, projects, skills, contact, footer.
- Google Play button with link `https://play.google.com/store/apps/details?id=com.thegentleman.pasea`.
- Links to `styles.css` and `script.js`.

#### [NEW] [styles.css](file:///c:/Users/gentl/Desktop/Cursor%20Gentleman%20OS/Gentleman%20Developer%20Website/styles.css)
- CSS custom properties for the four colors.
- Gradient background representing sky‑to‑sea transition.
- Island & sea weave animation using `@keyframes wave` for a looping gentle wave.
- Glassmorphism cards for project tiles.
- Responsive grid layout (CSS Grid/Flexbox).
- Hover effects: subtle scale and glow.
- Font import statements for "Outfit" and "Inter".

#### [NEW] [script.js](file:///c:/Users/gentl/Desktop/Cursor%20Gentleman%20OS/Gentleman%20Developer%20Website/script.js)
- Smooth scroll behavior for navigation links.
- IntersectionObserver to trigger reveal animations when sections enter the viewport.
- Optional lightweight library for tilt effect on device cards (vanilla‑tilt).

### Visual Assets (AI‑Generated)

#### [NEW] [hero_image.png](file:///c:/Users/gentl/.gemini/antigravity/brain/76ac267d-6234-40b8-94af-70000458ea9e/hero_image.png)
- Gentleman in a tailored suit holding a smartphone, warm glow background.

#### [NEW] [island_sea.svg](file:///c:/Users/gentl/.gemini/antigravity/brain/76ac267d-6234-40b8-94af-70000458ea9e/island_sea.svg)
- Minimalist island silhouette with animated sea waves (SVG with CSS animation).

### SEO & Accessibility
- Meta tags: title, description, viewport, Open Graph image.
- ARIA labels for navigation and interactive elements.
- Alt text for all images.
- Keyboard‑accessible focus styles.

## Verification Plan

### Automated Checks
- Lint HTML, CSS, JS using `eslint` and `stylelint`.
- Run a headless browser test (Playwright) to ensure sections load and scroll animations fire without errors.

### Manual Verification
- Open the site on desktop and mobile browsers to verify responsive layout.
- Check that the island/sea animation runs smoothly and does not cause jank.
- Confirm Google Play button correctly redirects.
- Review overall visual polish and ensure the warm color scheme is consistent.
