# Timeline

Renders a responsive, accessible timeline. It acts as a container
for `timeline-item` paragraphs.

## Features

- **Responsive:** On mobile, it renders as a simple, single-column vertical
  timeline. On desktop, it reflows into a more complex two-sided layout with the
  date on the left and content cards on the right.
- **Accessible:** The entire timeline is rendered as an ordered list (`<ol>`),
  which is the most semantic and accessible structure for a chronological set of
  items.
- **CSS-driven:** The connecting lines, dots, and card arrows are all created
  with CSS pseudo-elements, keeping the HTML clean.
