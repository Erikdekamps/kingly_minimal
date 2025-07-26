# Kingly minimal theme

A minimal, modern Drupal 11 base theme with a Vite-powered SCSS toolchain
generated with AI.

## Features

* Modern CSS with SCSS and CSS Custom Properties.
* Component-based library structure.
* Vite for fast development and optimized production builds.
* Clean, accessible Twig templates.
* Responsive Mobile Menu: The main navigation collapses into a hamburger-style
  toggle on mobile devices for a better user experience on small screens.
  Styled Breadcrumbs: Breadcrumbs are styled for clarity, removing default list
  numbering and using an inline layout with a custom separator icon.

## Accessibility Compliance

This theme has been enhanced to meet or exceed several WCAG AAA success criteria. The following checklist details the specific improvements made:

### WCAG AAA Checklist

- [x] **1.4.6 Contrast (Enhanced) - AAA:**
  - The theme's color palette has been audited and adjusted.
  - All default text has a contrast ratio of at least 7:1 against its background.
  - Link text, button text, and text within status messages all meet the 7:1 contrast ratio.
  - Both light and dark modes have been updated to comply.

- [x] **2.4.7 Focus Visible - AA / 2.4.13 Focus Appearance - AAA:**
  - All interactive elements (links, buttons, form controls) have a highly visible and consistent focus indicator.
  - The focus indicator uses a 2px solid outline with a 2px offset, ensuring it is not obscured and has high contrast.
  - The skip-to-content link has a clear focus style.

- [x] **2.4.5 Multiple Ways - AA:**
  - The theme provides both a primary navigation menu and breadcrumbs, offering users multiple ways to navigate the site.

- [x] **2.4.6 Headings and Labels - AA:**
  - Semantic headings are used correctly (e.g., `H1` on front page branding, visually hidden `H2`s for navigation regions).
  - Form elements and navigation landmarks are programmatically associated with their labels (`aria-labelledby`).

- [x] **2.4.8 Location - AAA:**
  - The active link in navigation menus (`main-menu`, `pager`, `local-tasks`) is programmatically identified using `aria-current="page"`, clearly informing users of their current location within the site structure.

- [x] **3.2.3 Consistent Navigation - AA:**
  - The main navigation and footer are presented consistently across all pages of the site.

- [x] **3.3.2 Labels or Instructions - A:**
  - All form controls have associated labels. Navigation and other key regions have accessible names provided via `aria-label` or `aria-labelledby`.

- [x] **4.1.2 Name, Role, Value - A:**
  - All UI components have the correct role (e.g., `button`, `navigation`, `alert`) and their state (e.g., `aria-pressed`, `aria-current`) is programmatically determinable.

## Regions

The theme provides the following regions for block placement:

* **Page top**: For a banner bar above the header.
* **Branding**: For the site logo and name.
* **Main navigation**: For the main menu.
* **Breadcrumbs**: For the breadcrumb trail.
* **Page title**: For the page title block.
* **System messages**: For system messages (status, warning, error).
* **Tabs**: For local task tabs (e.g., View/Edit).
* **Content top**: For content placed above the main content area.
* **Content**: The main content area of the page.
* **Content bottom**: For content placed below the main content area.
* **Footer top**: For a full-width region at the top of the footer.
* **Footer first**: The first column in the footer grid.
* **Footer second**: The second column in the footer grid.
* **Footer third**: The third column in the footer grid.
* **Footer fourth**: The fourth column in the footer grid.
* **Footer bottom**: For the bottom bar of the footer (e.g., copyright, footer
  menu).
* **Hidden**: A region for blocks that should not be displayed.

## Development Setup

The theme uses Vite to compile SCSS assets. Node.js and npm are required.

1. **Navigate to the theme directory:**
   ```bash
   cd /path/to/your/drupal/themes/custom/kingly_minimal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Build Commands

* **For development:** This command will start Vite in watch mode with live
  reloading.
  ```bash
  npm run dev
  ```

* **For production:** This command will build and minify all SCSS assets into
  the `dist/` directory.
  ```bash
  npm run build
  ```
