# Text (Prose)

A component for rendering long-form "prose" or "WYSIWYG" rich text content with
consistent, readable styling.

## Usage

This component should be used to wrap any rendered output from a rich text
field (e.g., a "Formatted text, long" field). It applies a `.prose` class that
styles standard HTML elements like `<p>`, `<ul>`, `<blockquote>`, and headings
with consistent typography and spacing.

## Features

- **Consistent Typography:** Ensures that all user-generated content has
  consistent styling that matches the theme's design tokens.
- **Vertical Rhythm:** Uses the "lobotomized owl" selector (`* + *`) to apply
  consistent vertical spacing between all elements, preventing margin collapse
  issues.
- **Semantic:** Renders a `<div>` by default but can use any tag via
  the `element` prop.

## WCAG Compliance

- **1.4.4 Resize text (AA):** All font sizes are defined with relative
  units (`rem`), ensuring that text can be resized without loss of content or
  functionality.
- **1.4.12 Text Spacing (AA):** The line height and paragraph spacing meet the
  minimum requirements for this criterion, ensuring readability.
