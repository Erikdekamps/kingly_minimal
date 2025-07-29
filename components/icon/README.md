# Icon

Renders a reusable inline SVG icon from a predefined library.

## Features

- **Centralized Library:** All icons are stored as a map within the component's
  Twig file, making them easy to manage and self-contained.
- **Themeable:** The icon's color is controlled by the parent element's
  CSS `color` property via `fill: currentColor`, making it easy to style in
  context.
- **Accessible:** For meaningful icons, it includes a visually hidden accessible
  label. For purely decorative icons, `aria-hidden="true"` should be passed in
  the attributes to hide it from screen readers.

## WCAG Compliance

- **1.1.1 Non-text Content (A):** Provides an accessible name for meaningful
  icons via the `label` prop or a sensible default. It also supports being
  hidden from assistive technology when decorative.
