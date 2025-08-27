<?php

/**
 * @file
 * Functions to support Olivero theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function kingly_minimal_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  $form['#attached']['library'][] = 'olivero/color-picker';

  $color_config = [
    'colors' => [],
    'schemes' => [
      'default' => [
        'label' => 'Blue Lagoon (Default)',
        'colors' => [],
      ],
    ],
  ];

  // Get the color definitions.
  $color_definitions = _kingly_minimal_get_color_definitions();

  foreach ($color_definitions as $key => $definition) {
    // Add the color definitions to the color configuration.
    $color_config['colors'][$key] = $definition['title'];
    // Add the default values for the color schemes.
    $color_config['schemes']['default']['colors'][$key] = $definition['default'];
  }

  $form['#attached']['drupalSettings']['olivero']['colorSchemes'] = $color_config['schemes'];

  $form['kingly_theme_settings']['kingly_theme_utilities'] = [
    '#type' => 'details',
    '#title' => t('Kingly theme Utilities'),
    '#open' => FALSE,
  ];
  $form['kingly_theme_settings']['kingly_theme_utilities']['kingly_theme_color_scheme'] = [
    '#type' => 'fieldset',
    '#title' => t('Kingly theme Color Scheme Settings'),
  ];
  $form['kingly_theme_settings']['kingly_theme_utilities']['kingly_theme_color_scheme']['description'] = [
    '#type' => 'html_tag',
    '#tag' => 'p',
    '#value' => t('These settings adjust the look and feel of the Kingly theme. Changing the color below will change the base hue, saturation, and lightness values the Kingly theme uses to determine its internal colors.'),
  ];
  $form['kingly_theme_settings']['kingly_theme_utilities']['kingly_theme_color_scheme']['color_scheme'] = [
    '#type' => 'select',
    '#title' => t('Kingly Color Scheme'),
    '#empty_option' => t('Custom'),
    '#empty_value' => '',
    '#options' => [
      'default' => t('Blue Lagoon (Default)'),
      'firehouse' => t('Firehouse'),
    ],
    '#input' => FALSE,
    '#wrapper_attributes' => [
      'style' => 'display:none;',
    ],
  ];

  foreach ($color_config['colors'] as $key => $title) {
    $form['kingly_theme_settings']['kingly_theme_utilities']['kingly_theme_color_scheme'][$key] = [
      '#type' => 'textfield',
      '#maxlength' => 7,
      '#size' => 10,
      '#title' => $title,
      '#description' => t('Enter color in hexadecimal format (#abc123).') . '<br/>' . t('Derivatives will be formed from this color.'),
      '#config_target' => "kingly_minimal.settings:$key",
      '#attributes' => [
        // Regex copied from Color::validateHex()
        'pattern' => '^[#]?([0-9a-fA-F]{3}){1,2}$',
      ],
      '#wrapper_attributes' => [
        'data-drupal-selector' => 'olivero-color-picker',
      ],
    ];
  }
}
