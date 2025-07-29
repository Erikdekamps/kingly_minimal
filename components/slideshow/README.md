# Slideshow

Renders a responsive, accessible slideshow/carousel using the Splide.js library.
It includes a title, navigation controls, and a slot for slide items.

## Features

- **Library-Powered:** Uses the excellent [Splide.js](https://splidejs.com/)
  library for robust, accessible carousel functionality.
- **Composable:** Renders its title using the canonical `kingly_minimal:heading`
  component.
- **Accessible:** The Splide container is an ARIA `region` with an accessible
  name. Navigation arrows are buttons, and the script respects
  the `prefers-reduced-motion` user setting.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The container is defined as a `region`
  landmark with an accessible name, helping users understand the content's
  structure.
- **2.1.1 Keyboard (A):** Splide.js provides full keyboard control for
  navigating slides.
- **2.2.2 Pause, Stop, Hide (A):** The component does not autoplay by default,
  and if it were enabled, Splide's `reducedMotion` option would pause it for
  users who prefer it.
- **2.4.6 Headings and Labels (AA):** Uses a semantic `<h2>` (via the `heading`
  component) to provide a descriptive title for the slideshow section.
