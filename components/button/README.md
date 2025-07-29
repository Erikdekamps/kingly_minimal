# Button

Renders a versatile and accessible button or link. This component is the
standard for all user-triggered actions and links styled as buttons.

## Features

- **Polymorphic:** Renders as a `<button>` element by default, or as an `<a>`
  tag if a `url` prop is provided.
- **Style Variants:** Supports `primary` (default) and `secondary` (outline)
  styles.
- **Icon Support:** Can include leading (`icon_before`) and/or
  trailing (`icon_after`) icons, which are automatically spaced correctly.
- **Accessible:** Fully keyboard accessible with clear focus states and correct
  ARIA attributes for disabled states.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.4.11 Non-text Contrast (AA):** The border of the secondary button and the
  focus ring have a contrast ratio of at least 3:1 against the background.
- **2.1.1 Keyboard (A):** The component is fully focusable and operable using a
  keyboard.
- **2.4.4 Link Purpose (In Context) (A):** When rendered as a link, the `text`
  prop provides a clear and accessible name.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied on
  keyboard focus.
- **2.5.5 Target Size (Enhanced) (AAA):** The button's padding and min-height
  ensure a target size of at least 44x44 CSS pixels.
- **4.1.2 Name, Role, Value (A):** The component renders with the correct
  role (`button` or implicitly `link`), its accessible name is provided by
  the `text` prop, and its state (e.g., disabled) is programmatically
  determinable.
