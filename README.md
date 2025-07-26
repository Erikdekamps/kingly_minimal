# Kingly Minimal Theme

A minimal, modern Drupal 11 base theme with a Vite-powered, Single Directory
Component (SDC) architecture. It is designed for high performance,
maintainability, and accessibility.

## Features

* **Modern Frontend Stack:** Built with SCSS, CSS Custom Properties, and ES6+
  JavaScript.
* **Vite Integration:** Lightning-fast development server with Hot Module
  Replacement (HMR) and optimized production builds.
* **Single Directory Components (SDC):** A fully component-based architecture
  for maximum encapsulation, reusability, and maintainability. Component
  assets (`.twig`, `.yml`, `.scss`, `.js`) are co-located.
* **WCAG AAA-Ready:** Enhanced with a high-contrast color palette, proper focus
  management, and semantic markup to meet or exceed accessibility standards.
* **Responsive and Mobile-First:** Designed to work beautifully on all devices
  using modern CSS Grid layouts.
* **Light/Dark Mode Toggle:** Includes a theme-toggle component for
  user-preferred color schemes, with a FOUC-prevention script.
* **Clean Twig Templates:** Core and module template overrides are minimal,
  acting as bridges to pass data to SDCs.

## Frontend Development Guidelines

This theme follows a strict "Single Source of Truth" philosophy for all
design-related values. The goal is to create a highly maintainable and
consistent codebase by eliminating "magic numbers" and repeated declarations.

**The Core Principle:** Before adding any static value (
e.g., `font-weight: 600`, `min-height: 44px`, `transition-duration: 0.15s`) to a
component's stylesheet, you **must** first check if a suitable design token
already exists in `scss/base/_variables.scss`.

**How to Apply This:**

1. **Consult `_variables.scss`:** This file is the theme's design system
   dictionary. It contains a comprehensive and well-organized set of design
   tokens, including:

* **Colors:** The full application color palette, including feedback and border
  colors.
* **Typography:** Font families, a full `h1`-`h6` responsive font size scale,
  line heights, and font weights.
* **Sizing:** A scale for element sizes, including the minimum accessible target
  size (`--size-target-min`), avatars, and icons.
* **Spacing:** A standard `xs` to `xl` spacing scale for margins, padding, and
  gaps.
* **Borders & Focus:** Variables for border widths, radii, and a globally
  consistent focus ring.
* **Transitions:** A scale for animation durations and timing functions.
* **Layout:** Tokens for container widths and grid properties.
* **Z-Index:** A managed scale for stacking contexts.

2. **Use Existing Variables:** Always prefer using an existing variable over a
   hardcoded value.

* **Good:** `font-weight: var(--font-weight-semibold);`
* **Bad:** `font-weight: 600;`

3. **Add New Variables When Necessary:** If you need a value that is not already
   defined but is likely to be reused, add it as a new variable to the
   appropriate category in `_variables.scss`.
4. **Scope Appropriately:** Global design tokens belong in `:root`. Dark mode
   overrides go in `html[data-theme="dark"]`.

By adhering to this principle, we ensure that the theme remains easy to update,
scale, and re-brand. A change to a single variable in `_variables.scss` will
correctly propagate throughout the entire component library.

## Installation & Usage

1. **Place the Theme:**
   Place the `kingly_minimal` theme in your project's `/web/themes/custom`
   directory.

2. **Install Dependencies:**
   Navigate to the theme directory and install the required Node.js packages.
   ```bash
   cd /path/to/your/project/web/themes/custom/kingly_minimal
   npm install
   ```

3. **Development:**
   Run the Vite development server. This will watch for changes in your SCSS and
   JS files and provide live reloading.
   ```bash
   npm run dev
   ```

4. **Production Build:**
   When you are ready to deploy, run the build script. This will compile,
   minify, and optimize all assets for production.
   ```bash
   npm run build
   ```

## Theme Architecture

* **/components:** This is the heart of the theme. Each subdirectory is a Single
  Directory Component containing its own Twig, YAML, SCSS, and JS files. The
  Vite build process automatically compiles assets into their respective
  component directories.
* **/scss:** Contains global SCSS files, including variables, mixins, resets,
  and base layout styles. These are compiled to the `/dist` directory.
* **/dist:** The output directory for compiled global CSS assets. **This
  directory is automatically generated.**
* **/templates:** Contains Drupal theme hook template overrides (
  e.g., `page.html.twig`, `node.html.twig`). These templates are kept lean and
  primarily serve to include SDCs.

## Regions

The theme provides the following regions for block placement, including a
granular "brick" layout for the footer:

* `page_top`: Page top
* `branding`: Branding
* `main_navigation`: Main navigation
* `breadcrumbs`: Breadcrumbs
* `page_title`: Page title
* `system_messages`: System messages
* `tabs`: Tabs
* `content_top`: Content top
* `content`: Content
* `content_bottom`: Content bottom
* `footer_top_left`: Footer Top Left
* `footer_top_right`: Footer Top Right
* `footer_first`: Footer Column 1
* `footer_second`: Footer Column 2
* `footer_third`: Footer Column 3
* `footer_fourth`: Footer Column 4
* `footer_bottom_left`: Footer Bottom Left
* `footer_bottom_right`: Footer Bottom Right
* `hidden`: Hidden

## Accessibility Compliance (WCAG)

This theme has been enhanced to meet or exceed several WCAG success criteria.

- [x] **1.4.6 Contrast (Enhanced) - AAA:** The theme's color palette has been
  audited and adjusted. Both light and dark modes ensure all default text has
  a
  contrast ratio of at least 7:1 against its background.
- [x] **2.4.9 Link Purpose (Link Only) - AAA:** Components
  like `footer-link-list` accept an optional `aria_label` to provide a clear,
  distinct accessible name for links that might otherwise be ambiguous.
- [x] **2.5.5 Target Size (Enhanced) - AAA:** All interactive elements (links,
  buttons, icons) are designed to have a minimum target size of 44x44 CSS
  pixels.
- [x] **2.4.7 Focus Visible - AA / 2.4.13 Focus Appearance - AAA:** All
  interactive elements have a highly visible and consistent focus indicator.
- [x] **2.4.5 Multiple Ways - AA:** The theme provides both a primary
  navigation
  menu and breadcrumbs, offering users multiple ways to navigate the site.
- [x] **2.4.6 Headings and Labels - AA:** Semantic headings are used
  correctly.
  Form elements and navigation landmarks are programmatically associated with
  their labels (`aria_labelledby`).
- [x] **2.4.8 Location - AAA:** The active link in navigation
  menus (`main-menu`, `pager`, `local-tasks`) is programmatically identified
  using `aria-current="page"`.
- [x] **3.2.5 Change on Request - AAA:** Links that open in a new tab or
  window
  include a warning for all users, both visually (via `title` attribute) and
  for
  screen readers.
- [x] **3.2.3 Consistent Navigation - AA:** The main navigation and footer are
  presented consistently across all pages of the site.
- [x] **3.3.2 Labels or Instructions - A:** All form controls have associated
  labels. Navigation and other key regions have accessible names provided
  via `aria-label` or `aria_labelledby`.
- [x] **4.1.2 Name, Role, Value - A:** All UI components have the correct
  role (
  e.g., `button`, `navigation`, `alert`) and their state (
  e.g., `aria-pressed`, `aria-current`) is programmatically determinable.

## Componentization Roadmap

The following theme hook templates have been identified as candidates for
conversion to Single Directory Components. This roadmap outlines the path to
achieving 100% component-based rendering.

- **`field.html.twig`**: A generic `field` SDC could be created to handle the
  wrapper and label logic. This would standardize the display of all fields that
  don't have a specific override.
- **`views-view.html.twig`**: A `views-view` SDC can be created to abstract the
  complex structure of a view (header, footer, rows, pager). This would make
  styling different view displays more consistent.
- **`region.html.twig`**: While simple, creating a `region` SDC could be useful
  if regions ever required more complex logic or specific styling hooks beyond
  what a class provides.
- **`node-edit-form.html.twig`**: The two-column layout for the node edit form
  could be encapsulated in a `node-form-layout` SDC. This would allow for easy
  reuse of this layout for other entity forms.
- **`maintenance-page.html.twig`**: The maintenance page could be its
  own `maintenance-page` SDC, simplifying the template file and making its
  styling self-contained.
- **`block.html.twig`**: The default block template could be converted into
  a `block` SDC. This would be a low-priority conversion, as many blocks already
  have specific SDC bridges (e.g., `block--system-menu-block--main.html.twig`),
  but it would complete the component coverage.
