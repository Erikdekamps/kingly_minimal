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
 * for SCSS entry points.
 */
function cssOnlyPlugin() {
  return {
    name: 'css-only',
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const file = bundle[fileName];
        if (file.type === 'chunk') {
          if (file.facadeModuleId?.endsWith('.scss')) {
            delete bundle[fileName];
          }
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
      // Add the new component JS and Twig files to the watchlist.
      path.resolve(__dirname, 'components/**/*.js'),
      path.resolve(__dirname, 'components/**/*.twig'),
    ]),
    cssOnlyPlugin(),
  ],

  build: {
    // IMPORTANT: We set the output directory to the project root because we are
    // outputting files to multiple locations ('dist/' and 'components/').
    outDir: '.',
    // IMPORTANT: We must disable emptyOutDir. If this were true, Vite would
    // delete your source files in the 'components' directory on build.
    // You will now need to manually clean the 'dist' directory if needed.
    emptyOutDir: false,

    rollupOptions: {
      input: Object.fromEntries(
        // Find all SCSS files that are not partials in both 'scss' and 'components'.
        globSync('{scss,components}/**/!(_)*.scss').map(file => [
          // Use the file path without extension as the entry name.
          // e.g., 'scss/layout/page' or 'components/main-menu/main-menu'
          file.slice(0, file.length - path.extname(file).length),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),

      output: {
        assetFileNames: (assetInfo) => {
          // assetInfo.name contains the entry name we defined in `input`,
          // plus the .css extension. e.g., 'components/main-menu/main-menu.css'

          // Check if the source asset is from the 'components' directory.
          if (assetInfo.name.startsWith('components/')) {
            // Output the CSS file directly back into its source component folder.
            // Vite uses the `[name]` placeholder from the input key.
            return '[name].css';
          }

          // Otherwise, it's from the 'scss' directory.
          if (assetInfo.name.startsWith('scss/')) {
            // We want to output it to 'dist/css/' while maintaining its
            // subdirectory structure. We first strip the 'scss/' prefix.
            const newPath = assetInfo.name.substring('scss/'.length);
            return `dist/css/${newPath}`;
          }

          // A fallback, though the rules above should cover everything.
          return 'dist/css/[name].css';
        },
        // This rule is for any legitimate JS entries.
        entryFileNames: '[name].js',
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        (await import('autoprefixer')).default({ grid: 'autoplace' }),
      ],
    },
  },
});
