# Views View

Renders the generic structure for a Drupal View, including its title, header,
rows, and pager.

## Usage

This component is designed to be used by the `views-view.html.twig` bridge
template. It accepts all the standard variables from Drupal's Views rendering
system and provides a consistent wrapper.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** Provides a consistent and predictable
  structure for Views output, helping users understand the relationships between
  a view's header, filters, content, and pager.
- **2.4.6 Headings and Labels (AA):** Renders the view's title in a
  semantic `<h2>` tag (via the `heading` component), contributing to the page's
  document outline.
