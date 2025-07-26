/**
 * @file
 * Handles the theme toggling functionality.
 *
 * This script adds a click event listener to the theme toggle button. It toggles
 * the `data-theme` attribute on the <html> element, saves the user's
 * preference in localStorage, and updates the button's ARIA state for
 * accessibility.
 */
(function (Drupal) {
  'use strict';

  // The key used to store the theme preference in localStorage.
  const THEME_STORAGE_KEY = 'theme-preference';
  const a11y_pressed_button = document.querySelector('.theme-toggle');

  /**
   * Sets the theme on the <html> element.
   *
   * @param {string} theme
   *   The theme to apply ('light' or 'dark').
   */
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    // We check if the button is present before changing its attribute.
    if (a11y_pressed_button) {
      a11y_pressed_button.setAttribute('aria-pressed', theme === 'dark');
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
   *   Attaches the click event listener to the theme toggle button.
   */
  Drupal.behaviors.themeToggle = {
    attach: function (context) {
      // Use Drupal.once to ensure the event listener is attached only once.
      const toggleButtons = context.querySelectorAll('.theme-toggle:not(.js-processed)');
      if (!toggleButtons.length) {
        return;
      }

      // We only need to set the initial ARIA state once per page load, not per AJAX refresh.
      // The initial theme is set by the inline script in html.html.twig.
      const initialTheme = document.documentElement.dataset.theme || 'light';
      if (a11y_pressed_button) {
        a11y_pressed_button.setAttribute('aria-pressed', initialTheme === 'dark');
      }

      toggleButtons.forEach((button) => {
        button.classList.add('js-processed');
        button.addEventListener('click', () => {
          // Determine the new theme.
          const currentTheme = document.documentElement.dataset.theme || 'light';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          // Apply the new theme and save the preference.
          applyTheme(newTheme);
          saveThemePreference(newTheme);
        });
      });
    },
  };
})(Drupal);
