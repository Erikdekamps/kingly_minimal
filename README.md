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
