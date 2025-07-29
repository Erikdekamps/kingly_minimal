# Branding

Displays the site branding, including a logo and site name. The entire component
is a link that navigates to the homepage.

## Features

- **SEO Optimized:** Renders the site name as a `<h1>` tag on the front page and
  a `<div>` on all other pages, ensuring there is only one `<h1>` per page.
- **Accessible:** The main link has a clear `aria-label` to provide an
  unambiguous accessible name (e.g., "Kingly Minimal - Home"). The SVG logo is
  treated as decorative.
- **Configurable:** Shows or hides the site name and slogan based on props
  passed from Drupal's block configuration.

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.1.1 Non-text Content (A):** The SVG logo is treated as
  decorative (`aria-hidden="true"`) because the parent link provides a
  comprehensive accessible name via its `aria-label`.
- **2.4.4 Link Purpose (In Context) (A):** The link's `aria-label` clearly
  identifies its destination as the site's homepage, distinguishing it from
  other navigation links.
- **2.4.6 Headings and Labels (AA):** Correctly uses a `<h1>` for the site name
  on the front page, which is a critical landmark for that page. On other pages,
  it avoids using a heading tag to prevent conflicts with the page's
  primary `<h1>`.
- **3.2.4 Consistent Identification (AA):** When placed in a consistent
  location (like the page header), this component provides a reliable, recurring
  landmark for site identification and navigation.
- **4.1.2 Name, Role, Value (A):** The component renders as a link with a clear,
  programmatically determined accessible name.
