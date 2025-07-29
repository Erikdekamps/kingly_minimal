# Link

A simple, unstyled utility component for rendering an `<a>` tag. This is the
canonical component for creating non-button links throughout the theme.

## Usage

This is a low-level utility component, designed to be included by other
components.

```twig
{{ include('kingly_minimal:link', {
  text: 'Read more',
  url: '/about-us',
  attributes: create_attribute().addClass('some-class')
}) }}
```

## Features

- **Simple & Reusable:** Provides a single, consistent way to generate <a> tags.
- **Unstyled by Default:** It carries no visual styling itself, inheriting
  styles from its parent context. This makes it highly reusable.

## WCAG Compliance

This component helps to meet the following success criteria:

- **2.4.4 Link Purpose (In Context) (A):** The component requires a text prop,
  ensuring that all links have a clear, accessible name. Additional context can
  be provided via aria-label in the attributes prop.
- **4.1.2 Name, Role, Value (A):** Renders a native <a> element with a valid
  href, giving it the correct link role.
