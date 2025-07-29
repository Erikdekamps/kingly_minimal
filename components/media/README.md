# Media (Dispatcher)

A dispatcher component that inspects a media entity and renders the appropriate sub-component (e.g., `media--image`, `media--video`). This is the primary entry point for rendering media entities in the theme.

## Usage

This component is designed to be used with Twig's `embed` feature from a paragraph or field template. The raw media entity object is passed as a prop, and the rendered field content is placed in the `content` slot.

```twig
{# From a paragraph template #}
{% embed 'kingly_minimal:media' with {
  media_entity: paragraph.field_media.entity,
} %}
  {% block content %}
    {{ content.field_media }}
  {% endblock %}
{% endembed %}
```
