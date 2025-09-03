/**
 * @file
 * Handles the mobile accordion functionality for the main menu.
 *
 * This script adds a click event listener to the sub-menu toggle buttons,
 * which are only visible on mobile. Clicking the toggle will add an `is-open`
 * class to the parent menu item and update the `aria-expanded` attribute for
 * accessibility, allowing CSS to handle the animation.
 */
(function (Drupal, once) {
  'use strict';

  /**
   * Initializes a single menu instance.
   * @param {HTMLElement} menuElement - The menu component's root element.
   */
  function initMenu(menuElement) {
    // Find all items that have a sub-menu and therefore a toggle button.
    const expandableItems = menuElement.querySelectorAll('.menu__item--expanded');

    expandableItems.forEach((item) => {
      const toggleButton = item.querySelector('.menu__sub-menu-toggle');
      if (toggleButton) {
        toggleButton.addEventListener('click', () => {
          const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

          // Toggle ARIA attribute for accessibility.
          toggleButton.setAttribute('aria-expanded', String(!isExpanded));

          // Toggle the class on the parent list item to trigger the animation.
          item.classList.toggle('is-open');
        });
      }
    });
  }

  /**
   * Drupal behavior for the menu component.
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.menu = {
    attach(context) {
      const menus = once('menu-init', '[data-component-id="kingly_minimal:menu"]', context);
      menus.forEach(initMenu);
    },
  };

})(Drupal, once);
