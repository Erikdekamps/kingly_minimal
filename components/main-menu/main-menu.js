/**
 * @file
 * Handles the mobile menu toggle functionality for the main menu component.
 *
 * This script adds a click event listener to the mobile menu toggle button.
 * It toggles the visibility of the main menu and applies ARIA attributes for
 * accessibility.
 */
((Drupal, once) => {
  // Use strict mode to prevent common sources of bugs.
  'use strict';

  /**
   * Attaches the mobile menu behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Finds the mobile menu toggle and attaches a click handler.
   */
  Drupal.behaviors.kinglyMinimalMainMenu = {
    attach(context) {
      // Find all main menu components within the current context.
      const components = once(
        'main-menu',
        '[data-component-id="kingly_minimal:main-menu"]',
        context,
      );

      // Process each component instance.
      components.forEach((component) => {
        // Find the toggle button and the menu within this component.
        const menuToggle = component.querySelector('.mobile-menu-toggle');
        const menu = component.querySelector('.menu-wrapper');

        // If either part is missing, we can't proceed.
        if (!menuToggle || !menu) {
          return;
        }

        // Add the click event listener to the toggle button.
        menuToggle.addEventListener('click', () => {
          // Check the current expanded state of the button.
          const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

          // Toggle the ARIA attribute for accessibility.
          menuToggle.setAttribute('aria-expanded', !isExpanded);

          // Toggle the 'is-open' class on the menu wrapper.
          // The CSS will handle the slide-down animation based on this class.
          menu.classList.toggle('is-open');
        });
      });
    },
  };
})(Drupal, once);
