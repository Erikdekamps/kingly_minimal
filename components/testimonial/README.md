# Testimonial

Renders a testimonial as a card with an author image, quote, star rating, and
metadata.

## Features

- **Composable:** Uses the `kingly_minimal:heading` component to render the
  author's name, improving the card's semantic structure.
- **CSS-driven Rating:** The star rating is rendered using CSS for a clean,
  lightweight implementation that supports fractional ratings (e.g., 4.5 stars).
- **Semantic:** Uses `<article>`, `<blockquote>`, and `<footer>` for a
  meaningful document structure.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The semantic
  HTML (`article`, `blockquote`, `h3`) provides a clear, programmatically
  determinable structure.
- **1.1.1 Non-text Content (A):** The star rating has an `aria-label` (e.g., "
  4.5 out of 5 stars") to convey its meaning to screen reader users.
- **2.4.6 Headings and Labels (AA):** Using a semantic `<h3>` for the author's
  name provides a proper heading for the testimonial content.
