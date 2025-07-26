// vite.config.js

import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

// Get the current directory path in an ES Module context.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * A custom Vite plugin to remove the empty JS wrappers that Vite creates
 * for SCSS entry points. This is necessary because we treat each SCSS file
 * as a separate entry point.
 */
function cssOnlyPlugin() {
  return {
    name: 'css-only',
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const file = bundle[fileName];
        // Find chunks that are JS files but originated from an SCSS entry point.
        if (
          file.type === 'chunk' &&
          file.isEntry &&
          file.facadeModuleId?.endsWith('.scss')
        ) {
          // Remove the empty JS file.
          delete bundle[fileName];
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    liveReload([
      path.resolve(__dirname, '**/*.twig'),
      path.resolve(__dirname, '*.theme'),
      path.resolve(__dirname, 'js/**/*.js'),
      path.resolve(__dirname, 'components/**/*.js'),
    ]),
    cssOnlyPlugin(),
  ],

  build: {
    outDir: '.',
    emptyOutDir: false,

    rollupOptions: {
      // Define all non-partial SCSS and JS files as inputs.
      input: Object.fromEntries(
        globSync('{scss,components}/**/!(_)*.{scss,js}').map((file) => [
          // Use the file path relative to the project root as the entry name.
          // e.g., 'components/button/button'
          file.slice(0, file.length - path.extname(file).length),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),

      output: {
        // --- Output logic for CSS files ---
        assetFileNames: (assetInfo) => {
          // The `assetInfo.name` holds the original entry point path.
          // e.g., 'components/button/button.scss'

          // For component SCSS files...
          if (assetInfo.name.startsWith('components/')) {
            // Place the compiled CSS back into its source directory.
            // [name] will be 'components/button/button', so the output is 'components/button/button.css'
            return '[name].css';
          }

          // For global SCSS files...
          if (assetInfo.name.startsWith('scss/')) {
            // Remove the 'scss/' prefix and output to 'dist/css/'.
            // e.g., 'scss/layout/page.scss' becomes 'dist/css/layout/page.css'
            const newPath = assetInfo.name.substring('scss/'.length);
            return `dist/css/${newPath}`;
          }

          // Fallback for any other assets.
          return 'dist/assets/[name].[ext]';
        },

        // --- Output logic for JS files ---
        entryFileNames: (chunkInfo) => {
          // The `chunkInfo.name` is the entry point key.
          // e.g., 'components/theme-toggle/theme-toggle'

          // For component JS files...
          if (chunkInfo.name.startsWith('components/')) {
            // Get the base filename and place it in 'dist/js/'.
            // e.g., 'components/theme-toggle/theme-toggle' becomes 'dist/js/theme-toggle.js'
            return `dist/js/${path.basename(chunkInfo.name)}.js`;
          }

          // Fallback for any other JS files (if we add them later).
          return 'dist/js/[name].js';
        },
      },
    },
  },

  css: {
    postcss: {
      plugins: [(await import('autoprefixer')).default({ grid: 'autoplace' })],
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'mixed-decls',
          'color-functions',
          'global-builtin',
          'import',
          'legacy-js-api',
        ],
        quietDeps: true,
      },
    },
  },
});
