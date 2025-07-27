/**
 * @file
 * Accordion component behavior.
 *
 * This script initializes all accordion containers, finds all items within them,
 * and attaches click event listeners to the headers. It enforces an "exclusive"
 * accordion behavior, where opening one item will close all others within the
 * same container.
 */
(function (Drupal, once) {
  'use strict';

  /**
   * A class representing a single accordion container and its items.
   */
  class Accordion {
    /**
     * Constructs a new Accordion instance.
     * @param {HTMLElement} container - The accordion container element.
     */
    constructor(container) {
      this.container = container;
      // Find all direct accordion-item children.
      this.items = Array.from(
        this.container.querySelectorAll(':scope > .accordion-item'),
      );
      this.headers = this.items.map((item) =>
        item.querySelector('.accordion-item__header'),
      );
    }

    /**
     * Attaches event listeners to the accordion headers.
     */
    init() {
      this.headers.forEach((header, index) => {
        if (!header) return;

        header.addEventListener('click', (event) => {
          // CORRECTION: Prevent the browser's default <details> toggle.
          // Our script will now be the single source of truth for the state.
          event.preventDefault();
          this.toggleItem(index);
        });

        // Add keyboard support for Enter and Space keys.
        header.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            // CORRECTION: Also prevent default here to stop scrolling on Space.
            event.preventDefault();
            this.toggleItem(index);
          }
        });
      });
    }

    /**
     * Toggles an accordion item and closes others.
     * @param {number} index - The index of the item to toggle.
     */
    toggleItem(index) {
      const targetItem = this.items[index];
      const isOpening = !targetItem.hasAttribute('open');

      // First, close all items. This ensures the "exclusive" behavior.
      this.items.forEach((item) => {
        item.removeAttribute('open');
      });

      // Then, if the target item was originally closed, open it.
      if (isOpening) {
        targetItem.setAttribute('open', '');
      }
    }
  }

  /**
   * Attaches the accordion behavior to all accordion containers.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.accordion = {
    attach: function (context) {
      const accordionContainers = once(
        'accordion',
        '.accordion-container',
        context,
      );

      accordionContainers.forEach((container) => {
        const accordion = new Accordion(container);
        accordion.init();
      });
    },
  };
})(Drupal, once);
