# Field

Renders a generic Drupal field, including its label and items. This component
provides a consistent wrapper and default styling for any field that does not
have a more specific component override (like `field-tags`).

## Usage

This component is designed to be used by the base `field.html.twig` bridge
template. It accepts all the standard variables from Drupal's field rendering
system.

```twig
{# From field.html.twig #}
{{ include('kingly_minimal:field', {
  label_hidden: label_hidden,
  label: label,
  title_attributes: title_attributes,
  items: items,
  multiple: multiple,
  attributes: attributes,
}, with_context = false) }}
```

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The component programmatically
  associates a field's label with its content, creating a clear structure.
- **3.3.2 Labels or Instructions (A):** Ensures that all fields have a visible
  or visually hidden label, as configured by the display settings.
