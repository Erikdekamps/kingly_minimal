# Node: Full

Renders the full content of a node, including its metadata and all fields. This
component is typically used for the "Full content" view mode on a node's
canonical page.

## Features

- **Composable:** Delegates the rendering of the author's picture to
  the `kingly_minimal:image` component.
- **Semantic:** Uses a semantic `<article>` wrapper and `<footer>` for the
  submission metadata.
- **Conditional Title:** Includes logic to hide the node title when it's being
  displayed as the main page content, as the `page-title` block will render it
  instead. This prevents duplicate `<h1>` tags.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The `<article>` and `<footer>` elements
  provide a programmatically determinable structure for the content.
- **3.2.4 Consistent Identification (AA):** Provides a consistent layout for all
  full node pages.
