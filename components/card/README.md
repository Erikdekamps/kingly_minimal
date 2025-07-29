# Card

A versatile component for displaying content in a card-like format. It is highly
composable, using other SDCs like `image` and `text` to render its content.

## Features

- **Polymorphic:** Renders as a clickable `<a>` tag if a `link` prop is
  provided. Otherwise, it renders as a semantic `<article>` element.
- **Layout Variants:** Supports a `vertical` (default) and `horizontal` layout
  via the `variant` prop.
- **Accessible Linking:** When rendered as a link, the entire card is clickable.
  The combination of the image's alt text, the visible title, body text, and CTA
  text provides a rich, accessible name for the link, making its purpose clear
  without needing a separate `aria-label`. This is known as the "stretched-link"
  pattern.
- **Composable:** Delegates image rendering to `kingly_minimal:image` and body
  text rendering to `kingly_minimal:text` for consistency.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** Uses a semantic `<article>` tag when not
  a link, and a heading (`<h3>`) for the card's title.
- **2.4.4 Link Purpose (In Context) (A):** When the card is a link, the
  combination of all its text content (title, body, CTA) and the image's alt
  text gives the link a comprehensive and unambiguous accessible name.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied to
  the entire card when it is a link and receives keyboard focus.
