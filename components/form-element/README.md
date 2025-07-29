# Form Element

A generic wrapper for a form field that provides consistent layout for its
label, description, and error messages.

## Usage

This component is designed to be used with Twig's `embed` feature from a bridge
template (like `form-element.html.twig`). The actual form
input (`<input>`, `<select>`, etc.) is placed inside the component's `content`
slot.

```twig
{# From form-element.html.twig #}
{% embed 'kingly_minimal:form-element' with {
  label: label,
  description: description,
  errors: errors,
  attributes: attributes,
} %}
  {% block content %}
    {{ children }} {# The <input>, <select>, etc. goes here #}
  {% endblock %}
{% endembed %}
```

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** By correctly rendering a <label> with a
  for attribute that points to the child input's id, it programmatically
  associates the label with its control.
- **3.3.2 Labels or Instructions (A):** Ensures that form controls are presented
  with all necessary labels, instructions (via the description prop), and error
  messages.
- **4.1.2 Name, Role, Value (A):** Provides the necessary structural context for
  a child input to be understood by assistive technologies.
