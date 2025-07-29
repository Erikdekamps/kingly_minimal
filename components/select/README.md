# Select

Renders a styled `<select>` dropdown element with a custom arrow.

## Usage

This is a "pass-through" component, intended to be used by Drupal's Form API via
the `select.html.twig` bridge template. It is designed to be placed within
the `content` slot of the `form-element` component.

## Features

- **Custom Arrow:** Replaces the native browser dropdown arrow with a custom,
  themeable SVG icon for a consistent look across all browsers.
- **Themeable:** The custom arrow icon is defined as a CSS variable, allowing it
  to change for dark mode.

## WCAG Compliance

- **1.4.11 Non-text Contrast (AA):** The select's border and custom arrow have a
  3:1 contrast ratio against the background.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **4.1.2 Name, Role, Value (A):** Renders a `<select>`, giving it the correct
  role and state.
