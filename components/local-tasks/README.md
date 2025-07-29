# Local Tasks (Tabs)

Renders the primary and secondary local task tabs (e.g., View, Edit, Revisions).

## Features

- **Accessible:** Renders the tabs within a `<nav>` element with a
  proper `aria-labelledby` attribute. The active tab is identified
  with `aria-current="page"`.
- **Modern Styling:** Uses a modern, clean tab style with a prominent bottom
  border on the active tab for clear visual indication.

## WCAG Compliance

- **2.4.7 Focus Visible (AA):** All tab links have a clear and consistent focus
  indicator.
- **2.4.8 Location (AAA):** The active tab is programmatically identified
  with `aria-current="page"`.
- **4.1.2 Name, Role, Value (A):** The `<nav>` landmark with its accessible name
  provides the correct role and context for the tab list.
