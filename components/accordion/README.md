# Accordion Container

A container component for a set of vertically stacked, collapsible
panels (`accordion-item` components). This component provides the wrapper and
the JavaScript logic to control the behavior of the items within it.

## Usage

This component acts as a wrapper. Individual `kingly_minimal:accordion-item`
components should be placed within its `content` slot. The JavaScript will
automatically discover the items and manage their state.

```twig
{% embed 'kingly_minimal:accordion' %}
  {% block content %}
    {{ include('kingly_minimal:accordion-item', {
      heading: 'First Item',
      content: '<p>Content for the first item.</p>'
    }) }}

    {{ include('kingly_minimal:accordion-item', {
      heading: 'Second Item',
      content: '<p>Content for the second item.</p>',
      is_open: true
    }) }}
  {% endblock %}
{% endembed %}
```

## WCAG Compliance

This component, in conjunction with its accordion-item child, helps to meet the
following success criteria:

- 2.1.1 Keyboard (A): The accordion can be fully operated with a keyboard. The
  Enter and Space keys can be used to toggle items.
- 3.2.5 Change on Request (AAA): Changes of context (opening/closing panels) are
  initiated only by user request.
- 4.1.2 Name, Role, Value (A): The backing accordion.js correctly manages the
  open attribute of the child <details> elements, ensuring their state is
  programmatically determinable.
