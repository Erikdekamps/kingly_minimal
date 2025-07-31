<?php

/**
 * @file
 * Functions to support Kingly Minimal theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 *
 * This function adds the theme settings form elements to the theme settings
 * page.
 */
function kingly_minimal_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  // Add a select element to choose the theme variation.
  $form['theme_variation'] = [
    '#type' => 'select',
    '#title' => t('Theme Variation'),
    '#description' => t('Select a visual theme for the site. This will apply a corresponding CSS class to the body tag, activating the chosen theme styles.'),
    // Use theme_get_setting() to retrieve the saved value for this theme.
    '#default_value' => theme_get_setting('theme_variation'),
    '#options' => [
      'theme-default' => t('Default Minimal'),
      'theme-ocean' => t('Ocean'),
      // Add future themes here, e.g.:.
      // 'theme-forest' => t('Forest'),.
    ],
  ];
}
