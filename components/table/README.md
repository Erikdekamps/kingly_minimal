# Table

Renders a structured data table with a responsive wrapper.

## Features

- **Responsive:** The table is wrapped in a container that allows for horizontal
  scrolling on small screens. This prevents wide tables from breaking the page
  layout, which is a robust and accessible approach to responsive tables.
- **Accessible:** The component accepts a `caption` prop to provide a summary of
  the table's content, which is a key accessibility feature.
- **Drupal Native:** Designed to be a drop-in replacement for Drupal's core
  table rendering, accepting all the standard variables (`header`, `rows`,
  etc.).

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** Renders a proper `<table>`
  with `<thead>`, `<tbody>`, `<th>`, and `<tr>` elements, creating a
  programmatically determinable data structure.
- **1.3.2 Meaningful Sequence (A):** The responsive scrolling wrapper ensures a
  meaningful reading sequence is maintained even when the table is wider than
  the viewport.
- **1.4.10 Reflow (AA):** By allowing horizontal scrolling, the component
  ensures that no content is lost and no two-dimensional scrolling is required
  on small viewports.
