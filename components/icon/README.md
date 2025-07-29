# Icon

Renders a reusable inline SVG icon from a predefined library.

## Features

- **Centralized Library:** All icons are stored as a map within the component's
  Twig file, making them easy to manage and self-contained.
- **Themeable:** The icon's color is controlled by the parent element's
  CSS `color` property via `fill: currentColor`, making it easy to style in
  context.
- **Accessible:** Includes a visually hidden accessible label. If a `label` prop
  is not provided, it defaults to a capitalized version of the icon's `name`
  prop. Decorative icons should be hidden with `aria-hidden="true"`.

## WCAG Compliance

- **1.1.1 Non-text Content (A):** Provides an accessible name for meaningful
  icons via the `label` prop. For purely decorative icons, the parent component
  should pass `aria-hidden="true"` in the attributes to hide it from screen
  readers.
