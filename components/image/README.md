# Image

Renders a responsive image, optionally wrapped in a link and with a caption.
This is the canonical component for all images in the theme.

## Features

- **Drupal Native:** Can accept a pre-rendered image array from Drupal (via
  the `render_array` prop) or a responsive image style machine name (
  via `twig_tweak`).
- **Semantic:** Automatically uses a `<figure>` and `<figcaption>` when
  a `caption` is provided.
- **Accessible:** Requires `alt` text and helps prevent Cumulative Layout
  Shift (CLS) by including `width` and `height` attributes.
- **Performant:** Adds `loading="lazy"` to images by default.

## WCAG Compliance

- **1.1.1 Non-text Content (A):** The `alt` prop is a critical part of the
  component's API, ensuring developers provide necessary text alternatives for
  images.
