# Footer: Link List

Displays a titled list of links, designed for use in the site footer columns.

## Features

- **Composable:** This component is built by embedding
  the `kingly_minimal:footer-widget` component, ensuring it inherits the
  standard footer widget title styling and structure.
- **Accessible:** It accepts an optional `aria_label` for each link. This is a
  critical feature for meeting WCAG AAA standards for links with generic text
  like "Learn More," as it provides a distinct, descriptive accessible name for
  screen reader users.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** By using a `<ul>` for the links, it
  creates a programmatically determined list. The `footer-widget` provides a
  semantic `<h3>` heading for the list.
- **2.4.9 Link Purpose (Link Only) (AAA):** The optional `aria_label` prop
  allows developers to provide a clear, unambiguous accessible name for links
  whose purpose might not be clear from the link text alone.
- **2.5.5 Target Size (Enhanced) (AAA):** The links are styled with sufficient
  padding and a minimum height to ensure they meet the 44x44 CSS pixel target
  size.
