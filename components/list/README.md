# List

A flexible component for rendering ordered (`<ol>`) or unordered (`<ul>`) lists.

## Usage

This component is a wrapper and is designed to be used with Twig's `embed` tag.
The actual list items should be provided by including
the `kingly_minimal:list-item` component inside the `content` slot.

### Unordered List (default)

```twig
{% embed 'kingly_minimal:list' %}
  {% block content %}
    {{ include('kingly_minimal:list-item', { content: 'First item' }) }}
    {{ include('kingly_minimal:list-item', { content: 'Second item' }) }}
  {% endblock %}
{% endembed %}
```

## Ordered List

```twig
{% embed 'kingly_minimal:list' with { type: 'ol' } %}
  {% block content %}
    {{ include('kingly_minimal:list-item', { content: 'First item' }) }}
    {{ include('kingly_minimal:list-item', { content: 'Second item' }) }}
  {% endblock %}
{% endembed %}
```

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** By rendering a semantic <ul> or <ol>,
  this component creates a programmatically determined list, which is essential
  for screen readers.
