# Gallery

Renders a responsive grid of items with selectable layout patterns. This
component provides the `<ul>` wrapper and applies the correct grid styles based
on a `layout` prop.

## Usage

This component is designed to be used with Twig's `embed` feature, typically
from a paragraph template. The individual gallery items (e.g., media entities)
should be wrapped in `<li>` tags and placed in the `content` slot.

```twig
{% embed 'kingly_minimal:gallery' with {
  layout: 'grid-3-col',
} %}
  {% block content %}
    {% for item in content.field_gallery_items %}
      <li class="gallery__item">{{ item }}</li>
    {% endfor %}
  {% endblock %}
{% endembed %}
```

## Features

- **Layout Variants:** Supports multiple grid
  layouts (`grid-2-col`, `grid-3-col`, `grid-4-col`) and more complex "featured"
  layouts.
- **Responsive:** All layouts are fully responsive and adapt to different screen
  sizes.
- **Semantic:** Renders as a `<ul>`, which is the correct semantic element for a
  gallery of items.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** The use of a `<ul>` and `<li>` structure
  creates a programmatically determined list, which is essential for screen
  reader users to understand the number of items in the gallery.
