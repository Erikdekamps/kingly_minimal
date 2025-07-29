# Theme Toggle

A button for toggling between light and dark themes.

## Features

- **JavaScript Powered:** Requires `theme-toggle.js` to handle the theme
  switching logic and persistence in `localStorage`.
- **CSS-driven Animation:** The icon switch (sun to moon) is a pure CSS
  transition driven by the button's `aria-pressed` state, not DOM manipulation.
- **Accessible:** The component is a `<button>` with a clear `aria-label`. Its
  state is conveyed to assistive technologies via the `aria-pressed` attribute.

## WCAG Compliance

- **2.1.1 Keyboard (A):** The button is fully keyboard focusable and operable.
- **2.4.7 Focus Visible (AA):** A clear focus ring is applied on keyboard focus.
- **2.5.5 Target Size (Enhanced) (AAA):** The button is styled to have a 44x44
  CSS pixel target size.
- **4.1.2 Name, Role, Value (A):** The component has the correct `button` role,
  a clear accessible name (`aria-label`), and a programmatically determinable
  state (`aria-pressed`).
