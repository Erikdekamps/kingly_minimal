# Footer: Contact Info

Displays a titled list of contact information with icons, designed for use in
the site footer.

## Features

- **Composable:** This component is built by embedding
  the `kingly_minimal:footer-widget` component. This ensures it inherits the
  standard footer widget title styling and structure. It also composes
  the `kingly_minimal:icon` component to render the icons for each contact
  method.
- **Content-Driven:** It accepts the title, address, email, and phone number as
  props, making it easy to configure.
- **Accessible:** Email and phone numbers are rendered as proper `mailto:`
  and `tel:` links.

## WCAG Compliance

- **1.3.1 Info and Relationships (
  A):` By using a `<ul>` for the contact details, it creates a programmatically determined list. The `
  footer-widget` provides a semantic `<h3>` heading for the list.
- **2.4.4 Link Purpose (In Context) (A):** The email and phone links have clear,
  understandable text.
- **2.5.5 Target Size (Enhanced) (AAA):** The links are styled with sufficient
  padding to ensure they meet the minimum 44x44 CSS pixel target size.
