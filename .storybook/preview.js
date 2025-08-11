/** @type { import('@storybook/html').Preview } */

// Import the global stylesheets required for components to render correctly.
// This ensures that all CSS Custom Properties, resets, and layout styles
// are available within the Storybook environment, just as they would be in Drupal.
import '../scss/base.scss';
import '../scss/layout/page.scss';
import '../scss/layout/header.scss';
import '../scss/layout/footer.scss';

// Import the theme variations stylesheet. This allows our components to
// correctly respond to different themes selected in Storybook's toolbar.
import '../scss/theme.scss';

// Import our custom icon component so it is available to other components,
// like the button, when rendered in Storybook.
import '../components/icon/icon.twig';
import '../components/link/link.twig';


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
