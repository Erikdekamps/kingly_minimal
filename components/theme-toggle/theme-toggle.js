/**
 * @file
 * Handles the theme toggling functionality.
 *
 * This script adds a click event listener to the theme toggle button. It toggles
 * the `data-theme` attribute on the <html> element, saves the user's
 * preference in localStorage, and updates the button's ARIA state for
 * accessibility. It is fully AJAX-aware.
 */
(function (Drupal, once) {
  'use strict';

  // The key used to store the theme preference in localStorage.
  const THEME_STORAGE_KEY = 'theme-preference';

  /**
   * Sets the theme on the <html> element and updates ARIA attributes.
   *
   * @param {string} theme
   *   The theme to apply ('light' or 'dark').
   * @param {HTMLElement} button
   *   The specific button instance being interacted with.
   */
  const applyTheme = (theme, button) => {
    document.documentElement.dataset.theme = theme;
    // We check if the button is present before changing its attribute.
    if (button) {
      button.setAttribute('aria-pressed', theme === 'dark');
    }
  };

  /**
   * Saves the theme preference to localStorage.
   *
   * @param {string} theme
   *   The theme to save ('light' or 'dark').
   */
  const saveThemePreference = (theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  /**
   * Attaches the theme toggle behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Finds all theme-toggle buttons and attaches the click handler.
   */
  Drupal.behaviors.themeToggle = {
    attach: function (context) {
      // Use once() to ensure the behavior is attached only once per button.
      // The 'theme-toggle' key is a unique identifier for this behavior.
      const toggleButtons = once('theme-toggle', '.theme-toggle', context);

      // The initial theme is set by the inline script in html.html.twig.
      // We retrieve it here to correctly set the initial state of any buttons
      // found on the page, including those loaded via AJAX.
      const initialTheme = document.documentElement.dataset.theme || 'light';

      toggleButtons.forEach((button) => {
        // Set the initial ARIA state for this specific button.
        button.setAttribute('aria-pressed', initialTheme === 'dark');

        // Add the click event listener.
        button.addEventListener('click', () => {
          // Determine the new theme based on the current state.
          const currentTheme = document.documentElement.dataset.theme || 'light';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          // Apply the new theme and save the preference.
          // Pass `button` to ensure the correct element is updated.
          applyTheme(newTheme, button);
          saveThemePreference(newTheme);
        });
      });
    },
  };
})(Drupal, once);
