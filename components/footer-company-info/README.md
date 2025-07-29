# Footer: Company Info

Displays the company name and a short description, typically used as the first
widget in the site footer.

## Features

- **Composable:** This component is built by embedding
  the `kingly_minimal:footer-widget` component. This means it inherits the
  standard footer widget title styling and structure, ensuring consistency
  across all footer elements.
- **Content-Driven:** It accepts the company name and description as props,
  making it easy to populate from a block or `page.html.twig`.

## WCAG Compliance

- **2.4.6 Headings and Labels (AA):** By embedding the `footer-widget`, this
  component renders a semantic `<h3>` for the company name, contributing to a
  logical heading structure in the site's footer landmark.
