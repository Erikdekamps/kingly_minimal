# Status Messages

Displays Drupal's system messages (status, warning, and error).

## Features

- **Accessible:** Uses `role="status"` for informational messages
  and `role="alert"` for more urgent warnings and errors. This ensures that
  screen readers automatically announce these messages when they appear.
- **Grouped by Type:** Messages are grouped by type (status, warning, error) for
  clarity.
- **WCAG AAA Colors:** Uses the theme's high-contrast, AAA-compliant color
  variables for text and backgrounds, ensuring readability.

## WCAG Compliance

- **1.4.11 Non-text Contrast (AA) / 1.4.6 Contrast (Enhanced) (AAA):** The
  background and text colors for each message type are defined
  in `_variables.scss` to meet or exceed contrast requirements.
- **4.1.3 Status Messages (AA):** The use of `role="status"` and `role="alert"`
  ensures that messages are conveyed to assistive technologies without
  interrupting their workflow.
