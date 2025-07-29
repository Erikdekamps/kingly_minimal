# Node Teaser

Renders a content item in a compact "teaser" format for listings.

## Features

- **Composable:** This is a highly composed component. It delegates rendering
  to:
- `kingly_minimal:heading` for the title.
- `kingly_minimal:image` for the author's picture.
- `kingly_minimal:text` for the main body/summary.
- **Semantic Markup:** Uses `<article>` for the teaser wrapper, `<footer>` for
  metadata, and a semantic `<h2>` (via the `heading` component) for the title.
- **Accessible:** The title is a proper, accessible link.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** The use of `<article>`, `<footer>`, and
  a semantic `<h2>` provides a clear, programmatically determinable structure.
- **2.4.4 Link Purpose (In Context) (A):** The linked title provides a clear
  purpose.
- **2.4.6 Headings and Labels (AA):** Uses a semantically appropriate `<h2>` for
  the title of each item in a list, creating a correct document outline.
- **3.2.4 Consistent Identification (AA):** Renders all teasers in a list with a
  consistent layout.
