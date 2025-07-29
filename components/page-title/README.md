# Page Title

Renders the main `<h1>` title for a page.

## Features

- **Composable:** This component acts as a wrapper and delegates the actual
  rendering of the heading to the canonical `kingly_minimal:heading` component.
- **Semantic:** It ensures the main page title is always rendered with an `<h1>`
  tag for accessibility and SEO.
- **Consistent:** By using the `heading` component, it guarantees the page
  title's visual style is always in sync with the theme's design tokens.

## WCAG Compliance

This component helps to meet the following success criteria:

- **2.4.6 Headings and Labels (AA):** Provides the primary `<h1>` for the page,
  which serves as the main entry point for the content and is a critical
  accessibility landmark.
- **2.4.2 Page Titled (A):** Ensures that every webpage has a descriptive
  title (the `<h1>`) that identifies its topic or purpose.
