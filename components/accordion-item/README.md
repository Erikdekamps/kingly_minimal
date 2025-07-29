# Accordion Item

A single collapsible panel for use within an `accordion` container. This
component uses the native HTML `<details>` and `<summary>` elements, enhanced
with JavaScript, for a robust and accessible foundation.

## Usage

This component is designed to be placed inside the `content` slot of
the `kingly_minimal:accordion` component. It accepts a `heading` and `content`
as props. The parent `accordion` component's JavaScript will control its
open/closed state.

```twig
{% embed 'kingly_minimal:accordion' %}
  {% block content %}
    {{ include('kingly_minimal:accordion-item', {
      heading: 'Item Title',
      content: '<p>The content that will be revealed.</p>',
      is_open: false,
      attributes: create_attribute().setAttribute('id', 'my-item')
    }) }}
  {% endblock %}
{% endembed %}
```

## WCAG Compliance

This component helps to meet the following success criteria:

- **1.3.1 Info and Relationships (A):** Uses semantic `<details>`
  and `<summary>` elements to programmatically define the relationship between
  the trigger and the content panel. The `open` attribute, managed by the
  parent `accordion.js`, communicates the expanded/collapsed state.
- **2.1.1 Keyboard (A):** The `<summary>` element is natively keyboard-focusable
  and the controlling JavaScript ensures it can be operated with `Enter`
  and `Space`.
- **2.4.3 Focus Order (A):** The logical DOM structure ensures a predictable
  focus order when tabbing through items and into the content of open panels.
- **2.4.7 Focus Visible (AA):** A clear, high-contrast focus ring is applied to
  the `<summary>` element on keyboard focus.
- **4.1.2 Name, Role, Value (A):** The `<summary>` element acts as the `button`
  that controls the expandable region. Its state (expanded/collapsed) is
  programmatically determinable via the `open` attribute on the `<details>`
  element.
