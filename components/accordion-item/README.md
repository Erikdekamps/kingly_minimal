# Accordion Item

A single collapsible panel for use within an `accordion` container. This
component uses the native HTML `<details>` and `<summary>` elements for a robust
and accessible foundation.

## Usage

This component is designed to be placed inside the `content` slot of
the `kingly_minimal:accordion` component. It accepts a `heading` and `content`
as props.

```twig
{{ include('kingly_minimal:accordion-item', {
  heading: 'Item Title',
  content: '<p>The content that will be revealed.</p>',
  is_open: false,
  attributes: create_attribute().setAttribute('id', 'my-item')
}) }}
```

## WCAG Compliance

This component helps to meet the following success criteria:

- 1.3.1 Info and Relationships (A): Uses semantic <details> and <summary>
  elements to programmatically define the relationship between the trigger and
  the content panel. The open attribute communicates the expanded/collapsed
  state.
- 1.4.4 Resize text (AA): Built with relative units, ensuring the component
  remains functional and readable when text is resized up to 200%.
- 2.1.1 Keyboard (A): The <summary> element is natively keyboard-focusable and
  can be operated with Enter and Space.
- 2.4.3 Focus Order (A): The logical DOM structure ensures a predictable focus
  order when tabbing through items and into open panels.
- 2.4.6 Headings and Labels (AA): The heading prop is rendered within
  a <summary> element, which acts as the accessible name for the panel's
  content.
- 2.4.7 Focus Visible (AA): A clear, high-contrast focus ring is applied to
  the <summary> element on keyboard focus, inheriting from the theme's global
  focus styles.
