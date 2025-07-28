/**
 * @file
 * Initializes the Splide.js slideshow component.
 *
 * This script uses a Drupal behavior to find all slideshow components, read their
 * responsive configuration from data attributes, and initialize a Splide.js
 * instance for each one. It also moves the generated arrows into the header.
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
        // Find the header element by looking at the parent of the .splide element.
        const parentContainer = slideshow.closest('.slideshow');
        const header = parentContainer ? parentContainer.querySelector('.slideshow__header') : null;

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
          type: 'loop',
          direction: 'ltr',
          perPage: perPageMobile,
          gap: gap,
          pagination: false,
          arrows: true,
          autoplay: false,

          // WCAG: Respect user's motion preferences.
          reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: 'pause',
          },

          mediaQuery: 'min',
          breakpoints: {
            768: { // Corresponds to the 'md' breakpoint
              perPage: perPageTablet,
            },
            991: { // Corresponds to the 'lg' breakpoint
              perPage: perPageDesktop,
            },
          },
        });

        // Use the 'mounted' event to move the arrows after Splide has
        // created them. This is the official, recommended way to modify
        // the DOM after initialization.
        splide.on('mounted', function () {
          // MOVED: Query for arrows *inside* the mounted event to ensure they exist.
          const arrowsContainer = slideshow.querySelector('.splide__arrows');

          if (header && arrowsContainer) {
            // Append the arrows container to the header.
            header.appendChild(arrowsContainer);
          }
        });

        // Mount the instance to activate it.
        splide.mount();
      });
    },
  };

})(Drupal, once, Splide);
