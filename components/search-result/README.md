# Search Result

Renders a single search result item with a title, snippet, and metadata.

## Features

- **Composable:** Uses the `kingly_minimal:heading` component to render a
  consistent, linked title.
- **Semantic:** Wraps the result in an `<article>` tag and uses a
  semantic `<h3>` for the title.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The `<article>` and `<h3>` tags provide
  a clear, programmatically determinable structure for each result.
- **2.4.4 Link Purpose (In Context) (A):** The linked title clearly identifies
  the destination of the link.
- **2.4.6 Headings and Labels (AA):** Using `<h3>` for each result title creates
  a logical heading structure on the search results page.
