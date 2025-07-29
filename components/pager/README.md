# Pager

Renders a styled pagination control for navigating through lists of content.

## Features

- **Accessible:** The pager is wrapped in a `<nav>` element
  with `role="navigation"` and an `aria-labelledby` attribute. The current page
  is identified with `aria-current="page"`, and all links have descriptive
  titles (e.g., "Go to next page").
- **Full Featured:** Renders links for first, previous, next, last, numbered
  pages, and ellipses for truncated page lists.
- **Clean Markup:** The component logic handles Drupal's complex pager render
  array and produces clean, semantic HTML.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The pager is structured as an unordered
  list (`<ul>`), which programmatically defines it as a collection of items.
- **2.4.4 Link Purpose (In Context) (A):** Each link has a clear, descriptive
  accessible name (e.g., "Go to page 5", "Next page").
- **2.4.8 Location (AAA):** The current page item is programmatically identified
  with `aria-current="page"`.
- **2.5.5 Target Size (Enhanced) (AAA):** Each pager link is styled to have a
  minimum target size of 44x44 CSS pixels.
- **4.1.2 Name, Role, Value (A):** The `<nav>` landmark with its accessible name
  provides the correct role and context for the pager.
