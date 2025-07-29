# Textfield

Renders a standard HTML `<input>` element for text entry.

## Usage

This is a "pass-through" component, intended to be used by Drupal's Form API via
the `input--*.html.twig` bridge templates. It is designed to be placed within
the `content` slot of the `form-element` component.

## WCAG Compliance

- **1.4.11 Non-text Contrast (AA):** The input's border has a 3:1 contrast ratio
  against the background.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **4.1.2 Name, Role, Value (A):** Renders an `<input>` with the correct `type`
  attribute, giving it the correct role and state.
