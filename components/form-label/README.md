# Form Label

Renders a `<label>` for a form element, including an optional "required" marker.

## Usage

This component is designed to be included by the `form-element` component to
standardize how form labels are rendered.

```twig
{{ include('kingly_minimal:form-label', {
  text: 'Your Name',
  for_id: 'edit-name',
  required: true,
  attributes: create_attribute().addClass('some-class')
}) }}
```

## Features

- **Accessible:** Automatically adds a for attribute to programmatically link
  the label to its input.
- **Required Marker:** Adds both a visual * and visually-hidden text for "
  Required" fields, ensuring the requirement is clear to all users.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The use of the for attribute is the
  correct way to programmatically associate a label with its form control.
- **3.3.2 Labels or Instructions (A):** This component ensures all form controls
  get a proper label. The handling of the "required" state provides necessary
  instructions to the user.
