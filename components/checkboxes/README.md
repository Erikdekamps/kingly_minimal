# Checkboxes Wrapper

A layout container for a group of checkbox form items. Its primary purpose is to
arrange multiple checkboxes in a responsive grid, improving the layout of forms
with many options.

## Usage

This component is designed to be used by
the `form-element--type-checkboxes.html.twig` bridge template. It embeds
the `form-element` component for the main fieldset/label and then places the
individual checkbox items (the `children` variable from Drupal) inside its
own `content` slot.

```twig
{% embed 'kingly_minimal:form-element' with { ... } %}
  {% block content %}
    {% embed 'kingly_minimal:checkboxes' %}
      {% block content %}
        {{ children }}
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** By containing a group of related
  checkbox items under a single fieldset/legend (provided by the
  parent `form-element` component), it helps define the group relationship.
- **1.4.4 Resize text (AA):** The responsive grid layout adapts to different
  text sizes and viewport widths, preventing loss of content or functionality.
