# Main Menu

Renders the main site navigation menu.

## Features

- **Contextual Wrapper:** This component's primary purpose is to provide a
  semantic `<nav>` wrapper and apply context-specific layout styles for the main
  navigation region. It includes the canonical `kingly_minimal:menu` component
  to do the actual rendering of the list.
- **Accessible:** Provides an accessible name for the navigation landmark by
  using the block's `label` for a visually hidden `<h2>` and
  an `aria-labelledby` attribute.
- **Responsive:** The SCSS handles the layout shift from a vertical (mobile) to
  horizontal (desktop) menu display.

## WCAG Compliance

- **3.2.3 Consistent Navigation (AA):** Provides the main site navigation in a
  consistent location on all pages.
- **4.1.2 Name, Role, Value (A):** The `<nav role="navigation">` with its
  accessible name correctly identifies the component's purpose. The
  included `menu` component handles `aria-current` for the active link.
