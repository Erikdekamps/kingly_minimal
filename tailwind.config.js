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
    },
  },
  prefix: 'tw-',
  plugins: [],
};
