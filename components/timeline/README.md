# Timeline

Renders a responsive, accessible timeline. It acts as a container for
timeline-item content, which is typically provided by a paragraph type.

## Features

- **Responsive:** On mobile, it renders as a simple, single-column vertical
  timeline. On desktop, it reflows into a two-sided layout with the date on the
  left and content cards on the right.
- **Accessible:** The entire timeline is rendered as an ordered list (`<ol>`),
  which is the most semantic and accessible structure for a chronological set of
  items.
- **CSS-driven:** The connecting lines, dots, and card arrows are all created
  with CSS pseudo-elements, keeping the HTML clean.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The use of an `<ol>` and `<li>`
  structure creates a programmatically determined, ordered list, which is
  essential for screen reader users to understand the sequence of events.
