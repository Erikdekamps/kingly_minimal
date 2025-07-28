/**
 * @file
 * Initializes the Splide.js slideshow component.
 *
 * This script uses a Drupal behavior to find all slideshow components, read their
 * responsive configuration from data attributes, and initialize a Splide.js
 * instance for each one.
 */
(function (Drupal, once, Splide) {
  'use strict';

  /**
   * Attaches the slideshow behavior.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.kinglySlideshow = {
    attach(context) {
      // Find all slideshow elements that have not yet been initialized.
      const slideshowElements = once('slideshow-init', '.splide', context);

      slideshowElements.forEach((slideshow) => {
        // Read the responsive settings from the data attributes.
        const { columnsMobile, columnsTablet, columnsDesktop } = slideshow.dataset;

        // Parse the values as integers, providing sensible fallbacks.
        const perPageMobile = parseInt(columnsMobile, 10) || 1;
        const perPageTablet = parseInt(columnsTablet, 10) || 2;
        const perPageDesktop = parseInt(columnsDesktop, 10) || 3;

        // Read the theme's spacing variable for a consistent gap.
        const gap = getComputedStyle(document.documentElement).getPropertyValue('--spacing-lg').trim() || '2rem';

        // Initialize a new Splide instance with our custom configuration.
        const splide = new Splide(slideshow, {
          // A standard slider that does not loop.
          type: 'slide',
          // Explicitly set the slide direction to left-to-right. This is a
          // safeguard against potential issues and ensures perPage works as expected.
          direction: 'ltr',
          // Set the base (mobile) number of slides per page.
          perPage: perPageMobile,
          // Use the theme's variable for consistent spacing.
          gap: gap,
          // Disable pagination dots as they were not requested.
          pagination: false,
          // Ensure arrow navigation is enabled.
          arrows: true,
          // Define how the slideshow should change at different screen sizes.
          // These values should correspond to the theme's breakpoints.
          breakpoints: {
            // Tablet breakpoint (from kingly_minimal.breakpoints.yml).
            768: {
              perPage: perPageTablet,
            },
            // Desktop breakpoint (from kingly_minimal.breakpoints.yml).
            991: {
              perPage: perPageDesktop,
            },
          },
        });

        // Mount the instance to activate it.
        splide.mount();
      });
    },
  };

})(Drupal, once, Splide);
