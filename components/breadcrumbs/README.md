# Breadcrumbs

Renders the breadcrumb trail for a page, providing a secondary navigation aid
that shows the user's location in the site hierarchy.

## Features

- **Accessible:** The component is wrapped in a `<nav>` element with a
  clear `aria-labelledby` attribute, identifying it as a navigation landmark.
  The current page is correctly identified with `aria-current="page"` and is not
  a link.
- **Full Bleed Design:** The component includes a full-width container strip
  with a background color, separating it visually from the header and main
  content.
- **Data-Driven:** It accepts the array of parent links from Drupal and appends
  the current page title as the final, non-linked item.
- **CSS-Driven Separators:** Uses CSS pseudo-elements to render the separators
  between links, keeping the HTML clean and semantic.

## WCAG Compliance

This component helps to meet the following success criteria:

- **2.4.5 Multiple Ways (AA):** Provides a secondary means of navigating the
  site, complementing the primary navigation menu.
- **2.4.8 Location (AAA):** The breadcrumb trail clearly indicates the user's
  current location within the site structure. The last item, representing the
  current page, is visually distinct, programmatically identified
  with `aria-current="page"`, and is not a link.
- **3.2.3 Consistent Navigation (AA):** When used on all applicable pages, the
  breadcrumb trail appears in a consistent location, aiding user orientation.
- **4.1.2 Name, Role, Value (A):** The `<nav>` element with `role="navigation"`
  and an `aria-labelledby` attribute correctly identifies the component's
  purpose to assistive technologies.
