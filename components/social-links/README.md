# Social Links

Renders a list of social media icons with links.

## Features

- **Self-Contained:** The SVG icon data is stored directly in the Twig template,
  making the component portable and easy to manage.
- **Auto-Detection:** Automatically matches a known icon to a link based on its
  URL (e.g., finds the "facebook" icon for a `facebook.com` link).
- **Accessible:** For links that open in a new tab, it provides both a
  visual `title` attribute and `visually-hidden` text warning for screen reader
  users.

## WCAG Compliance

- **2.4.4 Link Purpose (In Context) (A):** The accessible name for each link
  clearly identifies the social media site (e.g., "Facebook (opens in a new
  window)").
- **2.5.5 Target Size (Enhanced) (AAA):** The links are styled with a minimum
  width and height to ensure they meet the 44x44 CSS pixel target size.
- **3.2.5 Change on Request (AAA):** Explicitly warns users that the link will
  open in a new tab/window, preventing an unexpected change of context.
