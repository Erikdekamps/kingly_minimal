# Heading

Renders a semantic heading element (`<h1>` - `<h6>`, or `<div>`). This component
is the single source of truth for all heading styles in the theme, ensuring
visual consistency.

## Features

- **Semantic Control:** The `level` prop allows you to set the correct HTML
  tag (`h1`-`h6`) for accessibility and SEO, while the `display` prop controls
  the visual size. This decouples semantics from presentation.
- **Style Variants:** Can be styled to look like any heading level, regardless
  of its tag.
- **Linkable:** Can optionally render the heading as a link.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** By rendering the correct HTML heading
  tag, it programmatically defines the structure of the content.
- **2.4.6 Headings and Labels (AA):** Provides a consistent and robust way to
  implement a logical heading hierarchy throughout the site.
