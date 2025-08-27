/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './templates/**/*.twig',
    './components/**/*.twig',
  ],
  theme: {
    extend: {
      // By extending the theme's screens, we ensure that Tailwind's responsive
      // utilities (like `md:text-center`) align perfectly with the breakpoints
      // defined in kingly_minimal.breakpoints.yml. This creates a single
      // source of truth for responsive design across CSS, JS, and Drupal's
      // responsive image styles.
      screens: {
        sm: '500px',
        md: '768px',
        lg: '991px',
        xl: '1280px',
      },
      // Map our existing CSS Custom Properties (Design Tokens) to Tailwind keys.
      // This allows us to use utility classes like `bg-primary` or `p-md`,
      // which will compile to `background-color: var(--color-primary);` or
      // `padding: var(--spacing-md);`. This preserves our single source of truth
      // in `_variables.scss` while leveraging Tailwind's class-based syntax.
      colors: {
        text: 'var(--color-text)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        border: 'var(--color-border)',
        'light-gray': 'var(--color-light-gray)',
        rating: 'var(--color-rating)',
        status: 'var(--color-status)',
        'status-text': 'var(--color-status-text)',
        'status-border': 'var(--color-status-border)',
        warning: 'var(--color-warning)',
        'warning-text': 'var(--color-warning-text)',
        'warning-border': 'var(--color-warning-border)',
        error: 'var(--color-error)',
        'error-text': 'var(--color-error-text)',
        'error-border': 'var(--color-error-border)',
        // Component-specific color tokens
        'footer-bg': 'var(--footer-bg-color)',
        'footer-text': 'var(--footer-text-color)',
        'footer-border': 'var(--footer-border-color)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      fontSize: {
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        h6: 'var(--font-size-h6)',
        h5: 'var(--font-size-h5)',
        h4: 'var(--font-size-h4)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)',
      },
      fontFamily: {
        base: 'var(--font-family-base)',
        heading: 'var(--font-family-heading)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
        circle: 'var(--border-radius-circle)',
      },
      lineHeight: {
        base: 'var(--line-height-base)',
        heading: 'var(--line-height-heading)',
      },
    },
  },
  plugins: [],
};
