# List Item

A simple component that renders a list item (`<li>`) tag.

## Usage

This component is designed to be placed inside the `content` slot of
the `kingly_minimal:list` component.

```twig
{% embed 'kingly_minimal:list' %}
  {% block content %}
    {# Simple text content #}
    {% embed 'kingly_minimal:list-item' %}
      {% block content %}
        List item text.
      {% endblock %}
    {% endembed %}

    {# Complex content, like a link #}
    {% embed 'kingly_minimal:list-item' %}
      {% block content %}
        {{ include('kingly_minimal:link', { text: 'A linked item', url: '#' }) }}
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}  
```

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** When used correctly inside a list
  component, this component helps create a programmatically determined list
  structure.
