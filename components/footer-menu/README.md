# Footer: Menu

Renders a menu styled specifically for the footer region.

## Features

- **Contextual Wrapper:** This component's primary purpose is to provide a
  semantic `<nav>` wrapper and apply context-specific style overrides to the
  canonical `kingly_minimal:menu` component, which it includes.
- **Accessible:** Provides an accessible name for the navigation landmark by
  using the block's `label` for a visually hidden `<h2>` and
  an `aria-labelledby` attribute. It includes a fallback `aria-label` for
  robustness.

## WCAG Compliance

- **3.2.3 Consistent Navigation (AA):** Provides a navigation element in a
  consistent location in the site footer.
- **4.1.2 Name, Role, Value (A):** The `<nav role="navigation">` with its
  accessible name correctly identifies the component's purpose. The
  included `menu` component handles `aria-current` for the active link.
