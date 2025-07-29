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

  const THEME_STORAGE_KEY = 'theme-preference';

  /**
   * Reflects the current theme on all toggle buttons on the page.
   * @param {string} theme - The theme to apply ('light' or 'dark').
   */
  const reflectTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const isDark = theme === 'dark';

    // Update all toggle buttons on the page.
    document.querySelectorAll('.theme-toggle').forEach(button => {
      button.setAttribute('aria-pressed', isDark);
    });
  };

  /**
   * Saves the theme preference to localStorage.
   * @param {string} theme - The theme to save ('light' or 'dark').
   */
  const saveThemePreference = (theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  Drupal.behaviors.themeToggle = {
    attach(context) {
      const toggleButtons = once('theme-toggle', '.theme-toggle', context);

      // Set the initial state of newly added buttons correctly.
      const initialTheme = document.documentElement.dataset.theme || 'light';
      toggleButtons.forEach(button => {
        button.setAttribute('aria-pressed', initialTheme === 'dark');
      });

      // Add the click event listener to new buttons.
      toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
          const currentTheme = document.documentElement.dataset.theme || 'light';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          saveThemePreference(newTheme);
          reflectTheme(newTheme);
        });
      });
    },
  };
})(Drupal, once);
