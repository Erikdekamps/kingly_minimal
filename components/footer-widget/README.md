# Footer Widget

Provides a reusable wrapper with a styled title for components used in the
footer columns. This component is designed to be used with Twig's `embed`
feature.

## Features

- **Composable:** Uses the `kingly_minimal:heading` component to render its
  title, ensuring consistency.
- **Embeddable:** Designed to be the parent in a Twig `embed`, where other
  components (like `footer-link-list` or `footer-contact`) provide the content
  for the `content` slot.

## WCAG Compliance

- **2.4.6 Headings and Labels (AA):** Provides a semantic `<h3>` for each widget
  in the footer, creating a clear and navigable structure for screen reader
  users browsing by headings.
