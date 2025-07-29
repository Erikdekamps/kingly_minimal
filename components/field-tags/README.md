# Field: Tags

Renders a list of items (typically taxonomy term links) as styled "tags". This
component provides a specific visual treatment for fields that represent a
collection of categories or keywords.

## Usage

This component is designed to be used by a specific field bridge template, such
as `field--field-tags.html.twig`. It overrides the generic `field` component to
provide this custom styling.

## WCAG Compliance

- **1.3.1 Info and Relationships (A):** Renders the tags within a list
  structure (via the field template), preserving the relationship between the
  items.
- **2.4.4 Link Purpose (In Context) (A):** When the tags are links (as is
  typical), their visible text provides a clear purpose for each link.
- **2.5.5 Target Size (Enhanced) (AAA):** The padding applied to the tag links
  helps to ensure they meet the minimum 44x44 CSS pixel target size for easier
  interaction.
