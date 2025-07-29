# Footer: Copyright

Displays a copyright notice for the site footer.

## Features

- **Dynamic Year:** Automatically replaces a `[year]` placeholder in the text
  with the current year, so the copyright notice is always up-to-date.
- **Configurable:** The text for the notice is passed in as a prop.

## Usage

```twig
{{ include('kingly_minimal:footer-copyright', {
  text: '© [year] Copyright: example.com'
}) }}
```

## WCAG Compliance

- **3.2.4 Consistent Identification (AA):** When placed in the footer, this
  component contributes to a consistent set of information present on every
  page.
