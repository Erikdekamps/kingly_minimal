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
