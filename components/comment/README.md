# Comment

Renders a single comment, including the author's picture and name, submission
metadata, and the comment content.

## Features

- **Composable:** This component composes other SDCs for consistency. It
  uses `kingly_minimal:image` to render the author's
  avatar, `kingly_minimal:heading` for the title, and `kingly_minimal:text` to
  render the main comment body.
- **Semantic Markup:** Uses `<article>` for the comment wrapper and `<footer>`
  for the submission metadata, providing a meaningful structure for assistive
  technologies.
- **Accessible:** Includes a permalink to the specific comment and a visually
  distinct marker for new comments.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** The use of `<article>`, `<footer>`,
  and `<h3>` provides a clear, programmatically determinable structure for the
  comment and its metadata.
- **2.4.4 Link Purpose (In Context) (A):** The "Permalink" link has a clear and
  unambiguous purpose.
- **2.4.6 Headings and Labels (AA):** Uses a `<h3>` for the comment title,
  creating a proper heading structure within the comment thread.
- **3.2.4 Consistent Identification (AA):** Renders all comments with a
  consistent layout and structure, making them easy for users to identify and
  parse.
