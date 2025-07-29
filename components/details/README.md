# Details

Renders a collapsible `<details>` element, which is the HTML standard for
disclosure widgets. This component is commonly used in Drupal to render
fieldsets in forms, providing a way to group and hide advanced or less-important
options.

## Features

- **Native & Accessible:** Uses the `<details>` and `<summary>` HTML elements,
  which have built-in accessibility and keyboard support, requiring no custom
  JavaScript for basic functionality.
- **Styled:** Provides a clean, modern appearance that replaces the default
  browser styling, including a custom rotating chevron icon to indicate the
  open/closed state.
- **Form Integration:** The component's styling accounts for form states, such
  as `required` and `error`, by changing its appearance when Drupal adds the
  relevant classes.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The native `<details>` and `<summary>`
  elements programmatically link the control (`<summary>`) with the content it
  discloses. The `open` attribute communicates the state.
- **2.1.1 Keyboard (A):** The `<summary>` element is natively keyboard-focusable
  and can be operated with `Enter` and `Space`.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied to
  the `<summary>` element on keyboard focus.
- **3.3.2 Labels or Instructions (A):** The `<summary>` element acts as the
  label for the collapsible section.
- **4.1.2 Name, Role, Value (A):** The `<details>` element has an
  implicit `group` role, and the `<summary>` has a `button` role. Its
  expanded/collapsed state is programmatically available via the `open`
  attribute.
