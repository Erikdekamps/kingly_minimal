# Checkbox

Renders a standard HTML `<input type="checkbox">` element.

## Usage

This component is a simple "pass-through" component. It is intended to be used
by Drupal's Form API via the `input--checkbox.html.twig` bridge template and
wrapped by the `form-element` component. It accepts a standard `attributes`
object, which will contain all the necessary properties provided by Drupal (
e.g., `name`, `value`, `checked`).

Its primary purpose is to provide a dedicated SDC for styling and to ensure that
all checkboxes in the theme are consistent.

## WCAG Compliance

This component, when used within the `form-element` component, helps to meet the
following success criteria:

- **1.3.1 Info and Relationships (A):** Relies on the parent `form-element`
  component to programmatically associate the `<input>` with its `<label>` via
  the `for` and `id` attributes.
- **2.1.1 Keyboard (A):** As a native HTML element, it is fully focusable and
  operable (using the `Space` key) with a keyboard.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **4.1.2 Name, Role, Value (A):** Renders an `<input>` with `type="checkbox"`,
  giving it the correct role. Its state (`checked`) is programmatically
  determinable.
