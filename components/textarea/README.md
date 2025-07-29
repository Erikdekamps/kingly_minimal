# Textarea

Renders a standard HTML `<textarea>` element.

## Usage

This is a "pass-through" component, intended to be used by Drupal's Form API via
the `textarea.html.twig` bridge template. It is designed to be placed within
the `content` slot of the `form-element` component.

## WCAG Compliance

- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **4.1.2 Name, Role, Value (A):** Renders a `<textarea>`, giving it the correct
  role and state.
- **1.4.11 Non-text Contrast (AA):** The textarea's border has a 3:1 contrast
  ratio against the background.
