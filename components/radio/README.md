# Radio Button

Renders a standard HTML `<input type="radio">` element.

## Usage

This component is a simple "pass-through" component. It is intended to be used
by Drupal's Form API via the `input--type-radio.html.twig` bridge template. Like
the checkbox component, it should be rendered inside a `<label>` for a larger
click target.

## WCAG Compliance

- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **4.1.2 Name, Role, Value (A):** Renders an `<input>` with `type="radio"`,
  giving it the correct role.
- **1.3.1 Info and Relationships (A):** Relies on a parent `<label>` (and often
  a `<fieldset>`) to be properly associated with its text and group.
