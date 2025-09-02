/**
 * @file
 * Toggles the mobile navigation menu.
 *
 * This script finds the header component, its toggle button, and the navigation
 * wrapper. It adds a click event listener to the button that toggles the
 * `aria-expanded` attribute and a `is-open` class on the navigation wrapper to
 * trigger the CSS slide-down animation.
 */
(function (Drupal, once) {
  'use strict';

  /**
   * Initializes the header component behavior.
   * @param {HTMLElement} headerEl - The header component element.
   */
  function initHeader(headerEl) {
    const toggleButton = headerEl.querySelector('.header__toggle');
    const navWrapper = headerEl.querySelector('.header__nav-wrapper');

    if (!toggleButton || !navWrapper) {
      return;
    }

    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

      // Toggle ARIA attribute for accessibility.
      toggleButton.setAttribute('aria-expanded', !isExpanded);

      // Toggle class to trigger CSS animation.
      navWrapper.classList.toggle('is-open');
    });
  }

  /**
   * Drupal behavior for the header component.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.kinglyHeader = {
    attach(context) {
      once('kingly-header', '[data-component-id="kingly_minimal:header"]', context).forEach(initHeader);
    },
  };

})(Drupal, once);
