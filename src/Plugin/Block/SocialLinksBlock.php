<?php

namespace Drupal\kingly_minimal\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Social Links' block that renders an SDC.
 *
 * @Block(
 *   id = "kingly_minimal_social_links_block",
 *   admin_label = @Translation("Social Links"),
 *   category = @Translation("Kingly Minimal")
 * )
 */
class SocialLinksBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    // This block's entire purpose is to render the 'social-links' Single
    // Directory Component. By returning a render array with the #component
    // key, we leverage the SDC module to handle the rendering, ensuring
    // that the component's Twig template, props, and libraries are all
    // correctly applied. This completely decouples the block's output
    // from the block_content entity system.
    return [
      '#component' => 'kingly_minimal:social-links',
    ];
  }

}
