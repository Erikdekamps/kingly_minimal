# Hero

Renders a full-width hero section with a background image, centered text, and an
optional call-to-action button.

## Features

- **Composable:** Uses the `kingly_minimal:heading` component for its title and
  the `kingly_minimal:button` component for its call-to-action link.
- **Accessible:** The dark overlay ensures a minimum contrast ratio for the text
  against the background image, meeting WCAG AAA standards.
- **Configurable:** The height of the hero can be controlled via the `height`
  prop.

## WCAG Compliance

- **1.4.6 Contrast (Enhanced) (AAA):** The dark overlay (`.hero__overlay`) is a
  critical feature that ensures the text placed on top of a variable background
  image maintains a contrast ratio of at least 7:1.
- **2.4.6 Headings and Labels (AA):** Provides a prominent `<h2>` for the
  section, establishing a clear topic for the content that follows.
