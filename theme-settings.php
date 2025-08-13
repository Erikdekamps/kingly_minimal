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
 * page. It organizes the exhaustive color settings into collapsible fieldsets
 * for a manageable user experience.
 */
function kingly_minimal_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  // Add a select element to choose the theme variation.
  $form['theme_variation'] = [
    '#type' => 'select',
    '#title' => t('Theme Variation'),
    '#description' => t('Select a visual theme for the site. This will apply a corresponding CSS class to the body tag, activating the chosen theme styles.'),
    '#default_value' => theme_get_setting('theme_variation'),
    '#options' => [
      'theme-default' => t('Default Minimal'),
      'theme-ocean' => t('Ocean'),
    ],
    '#weight' => -10,
  ];

  // Main container for all color settings.
  $form['color_settings'] = [
    '#type' => 'details',
    '#title' => t('Theme Color Overrides'),
    '#description' => t('Override the default theme colors. <strong>Note:</strong> These settings only apply to the "Default Minimal" theme variation. They will be ignored if another theme variation like "Ocean" is selected.'),
    '#open' => FALSE,
    '#weight' => -5,
  ];

  // Helper function to create color form elements.
  $create_color_element = function (string $key, string $title, string $default_value, ?string $description = NULL) {
    return [
      '#type' => 'color',
      '#title' => $title,
      '#description' => $description,
      '#default_value' => theme_get_setting($key) ?: $default_value,
    ];
  };

  // --------------------------------------------------------------------------
  // Global Colors
  // --------------------------------------------------------------------------
  $form['color_settings']['global_colors'] = [
    '#type' => 'details',
    '#title' => t('Global Colors'),
    '#open' => FALSE,
  ];
  $form['color_settings']['global_colors']['light'] = [
    '#type' => 'details',
    '#title' => t('Light Mode'),
    '#open' => FALSE,
  ];
  $form['color_settings']['global_colors']['light']['color_text'] = $create_color_element('color_text', t('Text Color'), '#222222');
  $form['color_settings']['global_colors']['light']['color_background'] = $create_color_element('color_background', t('Background Color'), '#ffffff');
  $form['color_settings']['global_colors']['light']['color_primary'] = $create_color_element('color_primary', t('Primary Color'), '#004a94');
  $form['color_settings']['global_colors']['light']['color_primary_hover'] = $create_color_element('color_primary_hover', t('Primary Hover Color'), '#003b76');
  $form['color_settings']['global_colors']['light']['color_border'] = $create_color_element('color_border', t('Border Color'), '#e1e1e1');
  $form['color_settings']['global_colors']['light']['color_light_gray'] = $create_color_element('color_light_gray', t('Light Gray Color'), '#f4f5f6');
  $form['color_settings']['global_colors']['light']['color_rating'] = $create_color_element('color_rating', t('Rating Color'), '#f59e0b');
  $form['color_settings']['global_colors']['light']['focus_ring_color'] = $create_color_element('focus_ring_color', t('Focus Ring Color'), '#004a94');
  $form['color_settings']['global_colors']['light']['feedback_status'] = [
    '#type' => 'details',
    '#title' => t('Status Colors'),
  ];
  $form['color_settings']['global_colors']['light']['feedback_status']['color_status'] = $create_color_element('color_status', t('Status BG'), '#e6f4ea');
  $form['color_settings']['global_colors']['light']['feedback_status']['color_status_text'] = $create_color_element('color_status_text', t('Status Text'), '#0d4f21');
  $form['color_settings']['global_colors']['light']['feedback_status']['color_status_border'] = $create_color_element('color_status_border', t('Status Border'), '#d0e8d8');
  $form['color_settings']['global_colors']['light']['feedback_warning'] = [
    '#type' => 'details',
    '#title' => t('Warning Colors'),
  ];
  $form['color_settings']['global_colors']['light']['feedback_warning']['color_warning'] = $create_color_element('color_warning', t('Warning BG'), '#fff8e1');
  $form['color_settings']['global_colors']['light']['feedback_warning']['color_warning_text'] = $create_color_element('color_warning_text', t('Warning Text'), '#614d00');
  $form['color_settings']['global_colors']['light']['feedback_warning']['color_warning_border'] = $create_color_element('color_warning_border', t('Warning Border'), '#f2eacb');
  $form['color_settings']['global_colors']['light']['feedback_error'] = [
    '#type' => 'details',
    '#title' => t('Error Colors'),
  ];
  $form['color_settings']['global_colors']['light']['feedback_error']['color_error'] = $create_color_element('color_error', t('Error BG'), '#fdecea');
  $form['color_settings']['global_colors']['light']['feedback_error']['color_error_text'] = $create_color_element('color_error_text', t('Error Text'), '#8c101c');
  $form['color_settings']['global_colors']['light']['feedback_error']['color_error_border'] = $create_color_element('color_error_border', t('Error Border'), '#eecfca');

  $form['color_settings']['global_colors']['dark'] = [
    '#type' => 'details',
    '#title' => t('Dark Mode'),
  ];
  $form['color_settings']['global_colors']['dark']['dark_color_text'] = $create_color_element('dark_color_text', t('Text Color'), '#e1e1e1');
  $form['color_settings']['global_colors']['dark']['dark_color_background'] = $create_color_element('dark_color_background', t('Background Color'), '#121212');
  $form['color_settings']['global_colors']['dark']['dark_color_primary'] = $create_color_element('dark_color_primary', t('Primary Color'), '#74c0fc');
  $form['color_settings']['global_colors']['dark']['dark_color_primary_hover'] = $create_color_element('dark_color_primary_hover', t('Primary Hover Color'), '#a5d8ff');
  $form['color_settings']['global_colors']['dark']['dark_color_border'] = $create_color_element('dark_color_border', t('Border Color'), '#333333');
  $form['color_settings']['global_colors']['dark']['dark_color_light_gray'] = $create_color_element('dark_color_light_gray', t('Light Gray Color'), '#1e1e1e');
  $form['color_settings']['global_colors']['dark']['dark_focus_ring_color'] = $create_color_element('dark_focus_ring_color', t('Focus Ring Color'), '#74c0fc');
  $form['color_settings']['global_colors']['dark']['feedback_status'] = [
    '#type' => 'details',
    '#title' => t('Status Colors'),
  ];
  $form['color_settings']['global_colors']['dark']['feedback_status']['dark_color_status'] = $create_color_element('dark_color_status', t('Status BG'), '#163b1f');
  $form['color_settings']['global_colors']['dark']['feedback_status']['dark_color_status_text'] = $create_color_element('dark_color_status_text', t('Status Text'), '#c4f5cf');
  $form['color_settings']['global_colors']['dark']['feedback_status']['dark_color_status_border'] = $create_color_element('dark_color_status_border', t('Status Border'), '#2a5e37');
  $form['color_settings']['global_colors']['dark']['feedback_warning'] = [
    '#type' => 'details',
    '#title' => t('Warning Colors'),
  ];
  $form['color_settings']['global_colors']['dark']['feedback_warning']['dark_color_warning'] = $create_color_element('dark_color_warning', t('Warning BG'), '#4d3f0c');
  $form['color_settings']['global_colors']['dark']['feedback_warning']['dark_color_warning_text'] = $create_color_element('dark_color_warning_text', t('Warning Text'), '#ffeeb1');
  $form['color_settings']['global_colors']['dark']['feedback_warning']['dark_color_warning_border'] = $create_color_element('dark_color_warning_border', t('Warning Border'), '#705b11');
  $form['color_settings']['global_colors']['dark']['feedback_error'] = [
    '#type' => 'details',
    '#title' => t('Error Colors'),
  ];
  $form['color_settings']['global_colors']['dark']['feedback_error']['dark_color_error'] = $create_color_element('dark_color_error', t('Error BG'), '#5a1e22');
  $form['color_settings']['global_colors']['dark']['feedback_error']['dark_color_error_text'] = $create_color_element('dark_color_error_text', t('Error Text'), '#fdd8db');
  $form['color_settings']['global_colors']['dark']['feedback_error']['dark_color_error_border'] = $create_color_element('dark_color_error_border', t('Error Border'), '#802a31');

  // --------------------------------------------------------------------------
  // Layout Colors
  // --------------------------------------------------------------------------
  $form['color_settings']['layout_colors'] = [
    '#type' => 'details',
    '#title' => t('Layout Colors'),
  ];
  $form['color_settings']['layout_colors']['footer'] = [
    '#type' => 'details',
    '#title' => t('Footer'),
  ];
  $form['color_settings']['layout_colors']['footer']['light'] = [
    '#type' => 'details',
    '#title' => t('Light Mode'),
    '#open' => FALSE,
  ];
  $form['color_settings']['layout_colors']['footer']['light']['footer_bg_color'] = $create_color_element('footer_bg_color', t('Background Color'), '#f4f5f6');
  $form['color_settings']['layout_colors']['footer']['light']['footer_text_color'] = $create_color_element('footer_text_color', t('Text Color'), '#222222');
  $form['color_settings']['layout_colors']['footer']['light']['footer_border_color'] = $create_color_element('footer_border_color', t('Border Color'), '#e1e1e1');
  $form['color_settings']['layout_colors']['footer']['dark'] = [
    '#type' => 'details',
    '#title' => t('Dark Mode'),
  ];
  $form['color_settings']['layout_colors']['footer']['dark']['dark_footer_bg_color'] = $create_color_element('dark_footer_bg_color', t('Background Color'), '#1e1e1e');
  $form['color_settings']['layout_colors']['footer']['dark']['dark_footer_text_color'] = $create_color_element('dark_footer_text_color', t('Text Color'), '#e1e1e1');
  $form['color_settings']['layout_colors']['footer']['dark']['dark_footer_border_color'] = $create_color_element('dark_footer_border_color', t('Border Color'), '#333333');

  // --------------------------------------------------------------------------
  // Component Colors
  // --------------------------------------------------------------------------
  $form['color_settings']['component_colors'] = [
    '#type' => 'details',
    '#title' => t('Component Colors'),
  ];

  // Helper structure for component settings to reduce repetition.
  $component_settings = [
    'accordion_item' => [
      'title' => t('Accordion Item'),
      'light' => [
        'accordion_item_border_color' => [t('Border'), '#e1e1e1'],
        'accordion_item_header_bg_hover' => [t('Header BG Hover'), '#f4f5f6'],
        'accordion_item_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_accordion_item_border_color' => [t('Border'), '#333333'],
        'dark_accordion_item_header_bg_hover' => [
          t('Header BG Hover'),
          '#1e1e1e',
        ],
        'dark_accordion_item_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'branding' => [
      'title' => t('Branding'),
      'light' => [
        'branding_text_color' => [t('Text'), '#222222'],
        'branding_slogan_color' => [t('Slogan'), '#333333'],
      ],
      'dark' => [
        'dark_branding_text_color' => [t('Text'), '#e1e1e1'],
        'dark_branding_slogan_color' => [t('Slogan'), '#cae9ff'],
      ],
    ],
    'breadcrumbs' => [
      'title' => t('Breadcrumbs'),
      'light' => [
        'breadcrumbs_bg_color' => [t('Background'), '#f4f5f6'],
        'breadcrumbs_border_color' => [t('Border'), '#e1e1e1'],
        'breadcrumbs_text_color' => [t('Text'), '#222222'],
        'breadcrumbs_link_hover_text_color' => [t('Link Hover'), '#004a94'],
        'breadcrumbs_separator_color' => [t('Separator Icon'), '#222222'],
      ],
      'dark' => [
        'dark_breadcrumbs_bg_color' => [t('Background'), '#1e1e1e'],
        'dark_breadcrumbs_border_color' => [t('Border'), '#333333'],
        'dark_breadcrumbs_text_color' => [t('Text'), '#e1e1e1'],
        'dark_breadcrumbs_link_hover_text_color' => [
          t('Link Hover'),
          '#74c0fc',
        ],
        'dark_breadcrumbs_separator_color' => [t('Separator Icon'), '#e1e1e1'],
      ],
    ],
    'button' => [
      'title' => t('Button'),
      'light' => [
        'button_primary_bg_color' => [t('Primary BG'), '#004a94'],
        'button_primary_text_color' => [t('Primary Text'), '#ffffff'],
        'button_primary_border_color' => [t('Primary Border'), '#004a94'],
        'button_primary_bg_color_hover' => [t('Primary BG Hover'), '#003b76'],
        'button_primary_border_color_hover' => [
          t('Primary Border Hover'),
          '#003b76',
        ],
        'button_secondary_text_color' => [t('Secondary Text'), '#004a94'],
        'button_secondary_border_color' => [t('Secondary Border'), '#004a94'],
        'button_secondary_bg_color_hover' => [
          t('Secondary BG Hover'),
          '#004a94',
        ],
        'button_secondary_text_color_hover' => [
          t('Secondary Text Hover'),
          '#ffffff',
        ],
        'button_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_button_primary_bg_color' => [t('Primary BG'), '#74c0fc'],
        'dark_button_primary_text_color' => [t('Primary Text'), '#121212'],
        'dark_button_primary_border_color' => [t('Primary Border'), '#74c0fc'],
        'dark_button_primary_bg_color_hover' => [
          t('Primary BG Hover'),
          '#a5d8ff',
        ],
        'dark_button_primary_border_color_hover' => [
          t('Primary Border Hover'),
          '#a5d8ff',
        ],
        'dark_button_secondary_text_color' => [t('Secondary Text'), '#74c0fc'],
        'dark_button_secondary_border_color' => [
          t('Secondary Border'),
          '#74c0fc',
        ],
        'dark_button_secondary_bg_color_hover' => [
          t('Secondary BG Hover'),
          '#74c0fc',
        ],
        'dark_button_secondary_text_color_hover' => [
          t('Secondary Text Hover'),
          '#121212',
        ],
        'dark_button_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'card' => [
      'title' => t('Card'),
      'light' => [
        'card_bg_color' => [t('Background'), '#ffffff'],
        'card_text_color' => [t('Text'), '#222222'],
        'card_border_color' => [t('Border'), '#e1e1e1'],
        'card_focus_ring_color' => [t('Focus Ring'), '#004a94'],
        'card_cta_bg_color' => [t('CTA BG'), '#004a94'],
        'card_cta_bg_color_hover' => [t('CTA BG Hover'), '#003b76'],
        'card_cta_text_color' => [t('CTA Text'), '#ffffff'],
      ],
      'dark' => [
        'dark_card_bg_color' => [t('Background'), '#1e1e1e'],
        'dark_card_text_color' => [t('Text'), '#e1e1e1'],
        'dark_card_border_color' => [t('Border'), '#333333'],
        'dark_card_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
        'dark_card_cta_bg_color' => [t('CTA BG'), '#74c0fc'],
        'dark_card_cta_bg_color_hover' => [t('CTA BG Hover'), '#a5d8ff'],
        'dark_card_cta_text_color' => [t('CTA Text'), '#121212'],
      ],
    ],
    'checkbox' => [
      'title' => t('Checkbox'),
      'light' => ['checkbox_focus_ring_color' => [t('Focus Ring'), '#004a94']],
      'dark' => [
        'dark_checkbox_focus_ring_color' => [
          t('Focus Ring'),
          '#74c0fc',
        ],
      ],
    ],
    'comment' => [
      'title' => t('Comment'),
      'light' => [
        'comment_border_color' => [t('Border'), '#e1e1e1'],
        'comment_new_marker_bg_color' => [t('New Marker BG'), '#004a94'],
        'comment_new_marker_text_color' => [t('New Marker Text'), '#ffffff'],
        'comment_text_color' => [t('Text'), '#222222'],
      ],
      'dark' => [
        'dark_comment_border_color' => [t('Border'), '#333333'],
        'dark_comment_new_marker_bg_color' => [t('New Marker BG'), '#74c0fc'],
        'dark_comment_new_marker_text_color' => [
          t('New Marker Text'),
          '#121212',
        ],
        'dark_comment_text_color' => [t('Text'), '#e1e1e1'],
      ],
    ],
    'details' => [
      'title' => t('Details'),
      'light' => [
        'details_border_color' => [t('Border'), '#e1e1e1'],
        'details_summary_bg_color' => [t('Summary BG'), '#f4f5f6'],
        'details_focus_ring_color' => [t('Focus Ring'), '#004a94'],
        'details_text_color' => [t('Text'), '#222222'],
        'details_error_bg_color' => [t('Error BG'), '#fdecea'],
        'details_error_border_color' => [t('Error Border'), '#eecfca'],
        'details_error_text_color' => [t('Error Text'), '#8c101c'],
        'details_required_marker_color' => [t('Required Marker'), '#8c101c'],
      ],
      'dark' => [
        'dark_details_border_color' => [t('Border'), '#333333'],
        'dark_details_summary_bg_color' => [t('Summary BG'), '#1e1e1e'],
        'dark_details_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
        'dark_details_text_color' => [t('Text'), '#e1e1e1'],
        'dark_details_error_bg_color' => [t('Error BG'), '#5a1e22'],
        'dark_details_error_border_color' => [t('Error Border'), '#802a31'],
        'dark_details_error_text_color' => [t('Error Text'), '#fdd8db'],
        'dark_details_required_marker_color' => [
          t('Required Marker'),
          '#fdd8db',
        ],
      ],
    ],
    'field' => [
      'title' => t('Field'),
      'light' => ['field_label_text_color' => [t('Label Text'), '#222222']],
      'dark' => ['dark_field_label_text_color' => [t('Label Text'), '#e1e1e1']],
    ],
    'field_tags' => [
      'title' => t('Field Tags'),
      'light' => [
        'field_tag_bg_color' => [t('Tag BG'), '#f4f5f6'],
        'field_tag_text_color' => [t('Tag Text'), '#222222'],
      ],
      'dark' => [
        'dark_field_tag_bg_color' => [t('Tag BG'), '#1e1e1e'],
        'dark_field_tag_text_color' => [t('Tag Text'), '#e1e1e1'],
      ],
    ],
    'footer_contact' => [
      'title' => t('Footer Contact'),
      'light' => [
        'footer_contact_link_text_color' => [t('Link Text'), '#222222'],
        'footer_contact_link_text_color_hover' => [
          t('Link Text Hover'),
          '#004a94',
        ],
      ],
      'dark' => [
        'dark_footer_contact_link_text_color' => [t('Link Text'), '#e1e1e1'],
        'dark_footer_contact_link_text_color_hover' => [
          t('Link Text Hover'),
          '#74c0fc',
        ],
      ],
    ],
    'footer_link_list' => [
      'title' => t('Footer Link List'),
      'light' => [
        'footer_link_text_color' => [t('Link Text'), '#222222'],
        'footer_link_text_color_hover' => [t('Link Text Hover'), '#004a94'],
      ],
      'dark' => [
        'dark_footer_link_text_color' => [t('Link Text'), '#e1e1e1'],
        'dark_footer_link_text_color_hover' => [
          t('Link Text Hover'),
          '#74c0fc',
        ],
      ],
    ],
    'footer_menu' => [
      'title' => t('Footer Menu'),
      'light' => [
        'footer_menu_link_active_text_color' => [
          t('Active Link'),
          '#222222',
        ],
      ],
      'dark' => [
        'dark_footer_menu_link_active_text_color' => [
          t('Active Link'),
          '#e1e1e1',
        ],
      ],
    ],
    'footer_utility_links' => [
      'title' => t('Footer Utility Links'),
      'light' => [
        'utility_link_text_color' => [t('Link Text'), '#222222'],
        'utility_link_text_color_hover' => [t('Link Text Hover'), '#004a94'],
      ],
      'dark' => [
        'dark_utility_link_text_color' => [t('Link Text'), '#e1e1e1'],
        'dark_utility_link_text_color_hover' => [
          t('Link Text Hover'),
          '#74c0fc',
        ],
      ],
    ],
    'form_element' => [
      'title' => t('Form Element'),
      'light' => [
        'form_element_error_text_color' => [t('Error Text'), '#8c101c'],
        'form_element_error_label_color' => [t('Error Label'), '#8c101c'],
        'form_element_prefix_suffix_bg_color' => [
          t('Prefix/Suffix BG'),
          '#f4f5f6',
        ],
        'form_element_prefix_suffix_border_color' => [
          t('Prefix/Suffix Border'),
          '#e1e1e1',
        ],
        'form_element_prefix_suffix_text_color' => [
          t('Prefix/Suffix Text'),
          '#222222',
        ],
      ],
      'dark' => [
        'dark_form_element_error_text_color' => [t('Error Text'), '#fdd8db'],
        'dark_form_element_error_label_color' => [t('Error Label'), '#fdd8db'],
        'dark_form_element_prefix_suffix_bg_color' => [
          t('Prefix/Suffix BG'),
          '#1e1e1e',
        ],
        'dark_form_element_prefix_suffix_border_color' => [
          t('Prefix/Suffix Border'),
          '#333333',
        ],
        'dark_form_element_prefix_suffix_text_color' => [
          t('Prefix/Suffix Text'),
          '#e1e1e1',
        ],
      ],
    ],
    'form_label' => [
      'title' => t('Form Label'),
      'light' => [
        'form_label_text_color' => [t('Text'), '#222222'],
        'form_label_required_marker_color' => [t('Required Marker'), '#8c101c'],
      ],
      'dark' => [
        'dark_form_label_text_color' => [t('Text'), '#e1e1e1'],
        'dark_form_label_required_marker_color' => [
          t('Required Marker'),
          '#fdd8db',
        ],
      ],
    ],
    'hero' => [
      'title' => t('Hero'),
      'light' => [
        'hero_text_color' => [t('Text'), '#ffffff'],
        'hero_overlay_bg_color' => [t('Overlay BG'), 'rgba(0, 0, 0, 0.5)'],
      ],
      'dark' => [
        'dark_hero_overlay_bg_color' => [
          t('Overlay BG'),
          'rgba(0, 0, 0, 0.6)',
        ],
      ],
    ],
    'image' => [
      'title' => t('Image'),
      'light' => ['image_caption_text_color' => [t('Caption Text'), '#222222']],
      'dark' => [
        'dark_image_caption_text_color' => [
          t('Caption Text'),
          '#e1e1e1',
        ],
      ],
    ],
    'local_tasks' => [
      'title' => t('Local Tasks (Tabs)'),
      'light' => [
        'local_tasks_track_border_color' => [t('Track Border'), '#e1e1e1'],
        'local_tasks_link_text_color' => [t('Link Text'), '#222222'],
        'local_tasks_link_text_color_hover' => [
          t('Link Text Hover'),
          '#004a94',
        ],
        'local_tasks_link_text_color_active' => [
          t('Link Text Active'),
          '#004a94',
        ],
        'local_tasks_link_border_color_active' => [
          t('Link Border Active'),
          '#004a94',
        ],
        'local_tasks_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_local_tasks_track_border_color' => [t('Track Border'), '#333333'],
        'dark_local_tasks_link_text_color' => [t('Link Text'), '#e1e1e1'],
        'dark_local_tasks_link_text_color_hover' => [
          t('Link Text Hover'),
          '#74c0fc',
        ],
        'dark_local_tasks_link_text_color_active' => [
          t('Link Text Active'),
          '#74c0fc',
        ],
        'dark_local_tasks_link_border_color_active' => [
          t('Link Border Active'),
          '#74c0fc',
        ],
        'dark_local_tasks_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'media_document' => [
      'title' => t('Media: Document'),
      'light' => [
        'document_link_bg_color' => [t('Link BG'), '#f4f5f6'],
        'document_link_border_color' => [t('Link Border'), '#e1e1e1'],
        'document_link_text_color' => [t('Link Text'), '#222222'],
      ],
      'dark' => [
        'dark_document_link_bg_color' => [t('Link BG'), '#1e1e1e'],
        'dark_document_link_border_color' => [t('Link Border'), '#333333'],
        'dark_document_link_text_color' => [t('Link Text'), '#e1e1e1'],
      ],
    ],
    'menu' => [
      'title' => t('Menu'),
      'light' => [
        'menu_link_text_color' => [t('Link Text'), '#222222'],
        'menu_link_text_color_active' => [t('Active Link Text'), '#004a94'],
        'menu_link_bg_color_hover' => [t('Link BG Hover'), '#f4f5f6'],
      ],
      'dark' => [
        'dark_menu_link_text_color' => [t('Link Text'), '#e1e1e1'],
        'dark_menu_link_text_color_active' => [
          t('Active Link Text'),
          '#74c0fc',
        ],
        'dark_menu_link_bg_color_hover' => [t('Link BG Hover'), '#1e1e1e'],
      ],
    ],
    'node_teaser' => [
      'title' => t('Node Teaser'),
      'light' => ['node_teaser_border_color' => [t('Border'), '#e1e1e1']],
      'dark' => ['dark_node_teaser_border_color' => [t('Border'), '#333333']],
    ],
    'pager' => [
      'title' => t('Pager'),
      'light' => [
        'pager_link_text_color' => [t('Link Text'), '#004a94'],
        'pager_link_bg_color_hover' => [t('Link BG Hover'), '#f4f5f6'],
        'pager_focus_ring_color' => [t('Focus Ring'), '#004a94'],
        'pager_active_bg_color' => [t('Active BG'), '#004a94'],
        'pager_active_text_color' => [t('Active Text'), '#ffffff'],
        'pager_ellipsis_text_color' => [t('Ellipsis Text'), '#222222'],
      ],
      'dark' => [
        'dark_pager_link_text_color' => [t('Link Text'), '#74c0fc'],
        'dark_pager_link_bg_color_hover' => [t('Link BG Hover'), '#1e1e1e'],
        'dark_pager_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
        'dark_pager_active_bg_color' => [t('Active BG'), '#74c0fc'],
        'dark_pager_active_text_color' => [t('Active Text'), '#121212'],
        'dark_pager_ellipsis_text_color' => [t('Ellipsis Text'), '#e1e1e1'],
      ],
    ],
    'quote' => [
      'title' => t('Quote'),
      'light' => [
        'quote_border_left_color' => [t('Border Left'), '#004a94'],
        'quote_text_color' => [t('Text'), '#222222'],
      ],
      'dark' => [
        'dark_quote_border_left_color' => [t('Border Left'), '#74c0fc'],
        'dark_quote_text_color' => [t('Text'), '#e1e1e1'],
      ],
    ],
    'radio' => [
      'title' => t('Radio'),
      'light' => ['radio_focus_ring_color' => [t('Focus Ring'), '#004a94']],
      'dark' => ['dark_radio_focus_ring_color' => [t('Focus Ring'), '#74c0fc']],
    ],
    'search_result' => [
      'title' => t('Search Result'),
      'light' => [
        'search_result_border_color' => [t('Border'), '#e1e1e1'],
        'search_result_info_text_color' => [t('Info Text'), '#333333'],
      ],
      'dark' => [
        'dark_search_result_border_color' => [t('Border'), '#333333'],
        'dark_search_result_info_text_color' => [t('Info Text'), '#cae9ff'],
      ],
    ],
    'slideshow' => [
      'title' => t('Slideshow'),
      'light' => [
        'slideshow_arrow_bg_color' => [t('Arrow BG'), '#f4f5f6'],
        'slideshow_arrow_text_color' => [t('Arrow Text'), '#222222'],
        'slideshow_arrow_bg_color_hover' => [t('Arrow BG Hover'), '#004a94'],
        'slideshow_arrow_border_color_hover' => [
          t('Arrow Border Hover'),
          '#004a94',
        ],
        'slideshow_arrow_text_color_hover' => [
          t('Arrow Text Hover'),
          '#ffffff',
        ],
        'slideshow_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_slideshow_arrow_bg_color' => [t('Arrow BG'), '#1e1e1e'],
        'dark_slideshow_arrow_text_color' => [t('Arrow Text'), '#e1e1e1'],
        'dark_slideshow_arrow_bg_color_hover' => [
          t('Arrow BG Hover'),
          '#74c0fc',
        ],
        'dark_slideshow_arrow_border_color_hover' => [
          t('Arrow Border Hover'),
          '#74c0fc',
        ],
        'dark_slideshow_arrow_text_color_hover' => [
          t('Arrow Text Hover'),
          '#121212',
        ],
        'dark_slideshow_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'social_links' => [
      'title' => t('Social Links'),
      'light' => [
        'social_link_text_color' => [t('Icon'), '#222222'],
        'social_link_text_color_hover' => [t('Icon Hover'), '#004a94'],
        'social_link_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_social_link_text_color' => [t('Icon'), '#e1e1e1'],
        'dark_social_link_text_color_hover' => [t('Icon Hover'), '#74c0fc'],
        'dark_social_link_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'status_messages' => [
      'title' => t('Status Messages'),
      'light' => [
        'status_messages_status_text_color' => [t('Status Text'), '#0d4f21'],
        'status_messages_status_bg_color' => [t('Status BG'), '#e6f4ea'],
        'status_messages_status_border_color' => [
          t('Status Border'),
          '#d0e8d8',
        ],
        'status_messages_warning_text_color' => [t('Warning Text'), '#614d00'],
        'status_messages_warning_bg_color' => [t('Warning BG'), '#fff8e1'],
        'status_messages_warning_border_color' => [
          t('Warning Border'),
          '#f2eacb',
        ],
        'status_messages_error_text_color' => [t('Error Text'), '#8c101c'],
        'status_messages_error_bg_color' => [t('Error BG'), '#fdecea'],
        'status_messages_error_border_color' => [t('Error Border'), '#eecfca'],
      ],
      'dark' => [
        'dark_status_messages_status_text_color' => [
          t('Status Text'),
          '#c4f5cf',
        ],
        'dark_status_messages_status_bg_color' => [t('Status BG'), '#163b1f'],
        'dark_status_messages_status_border_color' => [
          t('Status Border'),
          '#2a5e37',
        ],
        'dark_status_messages_warning_text_color' => [
          t('Warning Text'),
          '#ffeeb1',
        ],
        'dark_status_messages_warning_bg_color' => [t('Warning BG'), '#4d3f0c'],
        'dark_status_messages_warning_border_color' => [
          t('Warning Border'),
          '#705b11',
        ],
        'dark_status_messages_error_text_color' => [t('Error Text'), '#fdd8db'],
        'dark_status_messages_error_bg_color' => [t('Error BG'), '#5a1e22'],
        'dark_status_messages_error_border_color' => [
          t('Error Border'),
          '#802a31',
        ],
      ],
    ],
    'table' => [
      'title' => t('Table'),
      'light' => [
        'table_border_color' => [t('Border'), '#e1e1e1'],
        'table_bg_color' => [t('Background'), '#ffffff'],
        'table_text_color' => [t('Text'), '#222222'],
        'table_header_bg_color' => [t('Header BG'), '#f4f5f6'],
      ],
      'dark' => [
        'dark_table_border_color' => [t('Border'), '#333333'],
        'dark_table_bg_color' => [t('Background'), '#1e1e1e'],
        'dark_table_text_color' => [t('Text'), '#e1e1e1'],
        'dark_table_header_bg_color' => [t('Header BG'), '#222222'],
      ],
    ],
    'testimonial' => [
      'title' => t('Testimonial'),
      'light' => [
        'testimonial_bg_color' => [t('Background'), '#ffffff'],
        'testimonial_border_color' => [t('Border'), '#e1e1e1'],
        'testimonial_text_color' => [t('Text'), '#222222'],
        'testimonial_author_title_color' => [
          t('Author Title'),
          'rgba(34, 34, 34, 0.7)',
        ],
        'testimonial_date_color' => [t('Date'), 'rgba(34, 34, 34, 0.6)'],
        'testimonial_star_inactive_color' => [t('Star Inactive'), '#e1e1e1'],
        'testimonial_star_active_color' => [t('Star Active'), '#f59e0b'],
      ],
      'dark' => [
        'dark_testimonial_bg_color' => [t('Background'), '#1e1e1e'],
        'dark_testimonial_border_color' => [t('Border'), '#333333'],
        'dark_testimonial_text_color' => [t('Text'), '#e1e1e1'],
        'dark_testimonial_author_title_color' => [
          t('Author Title'),
          'rgba(225, 225, 225, 0.7)',
        ],
        'dark_testimonial_date_color' => [
          t('Date'),
          'rgba(225, 225, 225, 0.6)',
        ],
        'dark_testimonial_star_inactive_color' => [
          t('Star Inactive'),
          '#333333',
        ],
      ],
    ],
    'text_prose' => [
      'title' => t('Text (Prose)'),
      'light' => [
        'text_blockquote_border_color' => [t('Blockquote Border'), '#e1e1e1'],
        'text_blockquote_text_color' => [
          t('Blockquote Text'),
          'rgba(34, 34, 34, 0.8)',
        ],
        'text_link_color_hover' => [t('Link Hover'), '#003b76'],
        'text_code_bg_color' => [t('Code BG'), '#f4f5f6'],
        'text_hr_border_color' => [t('HR Border'), '#e1e1e1'],
      ],
      'dark' => [
        'dark_text_blockquote_border_color' => [
          t('Blockquote Border'),
          '#333333',
        ],
        'dark_text_blockquote_text_color' => [
          t('Blockquote Text'),
          'rgba(225, 225, 225, 0.8)',
        ],
        'dark_text_link_color_hover' => [t('Link Hover'), '#a5d8ff'],
        'dark_text_code_bg_color' => [t('Code BG'), '#1e1e1e'],
        'dark_text_hr_border_color' => [t('HR Border'), '#333333'],
      ],
    ],
    'form_inputs' => [
      'title' => t('Text Inputs (Textfield, Textarea, Select)'),
      'light' => [
        'textfield_text_color' => [t('Text'), '#222222'],
        'textfield_bg_color' => [t('BG'), '#ffffff'],
        'textfield_border_color' => [t('Border'), '#e1e1e1'],
        'textfield_border_color_focus' => [t('Border Focus'), '#004a94'],
        'textfield_disabled_bg_color' => [t('Disabled BG'), '#f4f5f6'],
        'textfield_focus_ring_color' => [t('Focus Ring'), '#004a94'],
        'textfield_error_border_color' => [t('Error Border'), '#eecfca'],
        'select_arrow_color' => [t('Select Arrow'), '#222222'],
      ],
      'dark' => [
        'dark_textfield_text_color' => [t('Text'), '#e1e1e1'],
        'dark_textfield_bg_color' => [t('BG'), '#121212'],
        'dark_textfield_border_color' => [t('Border'), '#333333'],
        'dark_textfield_border_color_focus' => [t('Border Focus'), '#74c0fc'],
        'dark_textfield_disabled_bg_color' => [t('Disabled BG'), '#1e1e1e'],
        'dark_textfield_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
        'dark_textfield_error_border_color' => [t('Error Border'), '#802a31'],
        'dark_select_arrow_color' => [t('Select Arrow'), '#e1e1e1'],
      ],
    ],
    'theme_toggle' => [
      'title' => t('Theme Toggle'),
      'light' => [
        'toggle_text_color' => [t('Icon'), '#222222'],
        'toggle_text_color_hover' => [t('Icon Hover'), '#004a94'],
        'toggle_bg_color_hover' => [t('BG Hover'), 'rgba(34, 34, 34, 0.1)'],
        'toggle_focus_ring_color' => [t('Focus Ring'), '#004a94'],
      ],
      'dark' => [
        'dark_toggle_text_color' => [t('Icon'), '#e1e1e1'],
        'dark_toggle_text_color_hover' => [t('Icon Hover'), '#74c0fc'],
        'dark_toggle_bg_color_hover' => [
          t('BG Hover'),
          'rgba(225, 225, 225, 0.1)',
        ],
        'dark_toggle_focus_ring_color' => [t('Focus Ring'), '#74c0fc'],
      ],
    ],
    'timeline' => [
      'title' => t('Timeline'),
      'light' => [
        'timeline_line_color' => [t('Line'), '#e1e1e1'],
        'timeline_dot_border_color' => [t('Dot Border'), '#004a94'],
        'timeline_dot_bg_color' => [t('Dot BG'), '#ffffff'],
        'timeline_card_bg_color' => [t('Card BG'), '#ffffff'],
        'timeline_card_border_color' => [t('Card Border'), '#e1e1e1'],
        'timeline_card_text_color' => [t('Card Text'), '#222222'],
      ],
      'dark' => [
        'dark_timeline_line_color' => [t('Line'), '#333333'],
        'dark_timeline_dot_border_color' => [t('Dot Border'), '#74c0fc'],
        'dark_timeline_dot_bg_color' => [t('Dot BG'), '#121212'],
        'dark_timeline_card_bg_color' => [t('Card BG'), '#1e1e1e'],
        'dark_timeline_card_border_color' => [t('Card Border'), '#333333'],
        'dark_timeline_card_text_color' => [t('Card Text'), '#e1e1e1'],
      ],
    ],
    'views_view' => [
      'title' => t('Views View'),
      'light' => [
        'views_filters_bg_color' => [t('Filters BG'), '#f4f5f6'],
        'views_filters_border_color' => [t('Filters Border'), '#e1e1e1'],
        'views_empty_bg_color' => [t('Empty BG'), '#f4f5f6'],
      ],
      'dark' => [
        'dark_views_filters_bg_color' => [t('Filters BG'), '#1e1e1e'],
        'dark_views_filters_border_color' => [t('Filters Border'), '#333333'],
        'dark_views_empty_bg_color' => [t('Empty BG'), '#1e1e1e'],
      ],
    ],
  ];

  foreach ($component_settings as $key => $comp) {
    $form['color_settings']['component_colors'][$key] = [
      '#type' => 'details',
      '#title' => $comp['title'],
    ];
    if (isset($comp['light'])) {
      $form['color_settings']['component_colors'][$key]['light'] = [
        '#type' => 'details',
        '#title' => t('Light Mode'),
        '#open' => FALSE,
      ];
      foreach ($comp['light'] as $setting_key => $details) {
        $form['color_settings']['component_colors'][$key]['light'][$setting_key] = $create_color_element($setting_key, $details[0], $details[1]);
      }
    }
    if (isset($comp['dark'])) {
      $form['color_settings']['component_colors'][$key]['dark'] = [
        '#type' => 'details',
        '#title' => t('Dark Mode'),
      ];
      foreach ($comp['dark'] as $setting_key => $details) {
        $form['color_settings']['component_colors'][$key]['dark'][$setting_key] = $create_color_element($setting_key, $details[0], $details[1]);
      }
    }
  }
}
