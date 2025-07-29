# Menu

Renders a nested list of menu items recursively. This is the canonical component
for all menus in the theme.

## Features

- **Recursive Rendering:** Uses a Twig macro to render a menu tree of any depth.
- **Context Agnostic:** This component is purely presentational. It has no
  knowledge of whether it's being used for a "main" menu or a "footer" menu.
  Contextual styling is applied by parent wrapper components (
  e.g., `main-menu`, `footer-menu`).
- **Accessible:** Adds `aria-current="page"` to the active link to
  programmatically identify the user's current location in the site, which is a
  WCAG AAA requirement.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** Renders the menu as a proper
  nested `<ul>` list, preserving the parent/child relationships between menu
  items.
- **2.4.8 Location (AAA):** The use of `aria-current="page"` on the active link
  clearly and programmatically identifies the user's location.
- **2.5.5 Target Size (Enhanced) (AAA):** The default styling for links provides
  a minimum target size of 44x44 CSS pixels.
