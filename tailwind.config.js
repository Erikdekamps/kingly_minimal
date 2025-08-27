/** @type {import('tailwindcss').Config} */
export default {
  content: ['./templates/**/*.twig', './components/**/*.twig'],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '768px',
        lg: '991px',
        xl: '1280px'
      },
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
        'error-border': 'var(--color-error-border)'
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)'
      },
      fontSize: {
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        h6: 'var(--font-size-h6)',
        h5: 'var(--font-size-h5)',
        h4: 'var(--font-size-h4)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)'
      },
      fontFamily: {
        base: 'var(--font-family-base)',
        heading: 'var(--font-family-heading)'
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)'
      },
      lineHeight: {
        base: 'var(--line-height-base)',
        heading: 'var(--line-height-heading)'
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
        circle: 'var(--border-radius-circle)'
      },
      borderWidth: {
        thin: 'var(--border-width-thin)',
        medium: 'var(--border-width-medium)',
        thick: 'var(--border-width-thick)',
        DEFAULT: 'var(--border-width)'
      },
      boxShadow: {
        DEFAULT: 'var(--box-shadow)'
      },
      // Note: `sizing` is a custom theme key. This will generate utilities like
      // `tw-sizing-target-min`, `tw-w-avatar`, `tw-h-avatar` etc.
      width: {
        avatar: 'var(--sizing-avatar)',
        'branding-logo-sm': 'var(--sizing-branding-logo-sm)',
        'branding-logo-lg': 'var(--sizing-branding-logo-lg)',
        'icon-sm': 'var(--sizing-icon-sm)',
        'icon-md': 'var(--sizing-icon-md)'
      },
      height: {
        avatar: 'var(--sizing-avatar)',
        'branding-logo-sm': 'var(--sizing-branding-logo-sm)',
        'branding-logo-lg': 'var(--sizing-branding-logo-lg)',
        'icon-sm': 'var(--sizing-icon-sm)',
        'icon-md': 'var(--sizing-icon-md)'
      },
      minHeight: {
        'target': 'var(--sizing-target-min)'
      },
      transitionDuration: {
        fast: 'var(--transition-duration-fast)',
        medium: 'var(--transition-duration-medium)',
        slow: 'var(--transition-duration-slow)'
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-function)'
      },
      zIndex: {
        default: 'var(--z-index-default)',
        sticky: 'var(--z-index-sticky)',
        'modal-backdrop': 'var(--z-index-modal-backdrop)',
        modal: 'var(--z-index-modal)',
        'skip-link': 'var(--z-index-skip-link)'
      }
    }
  },
  prefix: 'tw-',
  plugins: []
};
