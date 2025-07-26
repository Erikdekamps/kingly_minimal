import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
// Corrected import: 'ViteImageOptimizer' with a capital 'V'.
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Get the absolute path to the theme directory in an ES Module context.
const themePath = path.resolve(fileURLToPath(import.meta.url));

/**
 * A custom Vite plugin to prevent the creation of empty JavaScript files when
 * SCSS files are used as entry points. Vite's default behavior is to create a
 * JS wrapper for every entry, which is unnecessary for our CSS-only workflow.
 *
 * @returns {import('vite').Plugin} The Vite plugin object.
 */
function viteCssOnlyPlugin() {
  return {
    name: 'vite-css-only-plugin',
    // We use the `generateBundle` hook, which runs after all files are generated
    // but before they are written to disk.
    generateBundle(options, bundle) {
      // Iterate over all the files in the generated bundle.
      for (const fileName in bundle) {
        const file = bundle[fileName];
        // Check if the file is a 'chunk' (a JS file) and if its original
        // source file path (facadeModuleId) ends with .scss.
        if (file.type === 'chunk' && file.facadeModuleId?.endsWith('.scss')) {
          // If it matches, delete it from the bundle.
          delete bundle[fileName];
        }
      }
    },
  };
}

// Export the main configuration object using defineConfig for type-safety.
export default defineConfig({
  plugins: [
    // Enables live reloading for Twig and other Drupal-specific files.
    liveReload([
      path.resolve(themePath, '**/*.twig'),
      path.resolve(themePath, '**/*.theme'),
      path.resolve(themePath, '*.info.yml'),
    ]),

    // Our custom plugin to remove JS wrappers for SCSS entries.
    viteCssOnlyPlugin(),

    // Automatically optimizes images (PNG, JPEG, SVG) during the build process.
    // Corrected usage: 'ViteImageOptimizer()' with a capital 'V'.
    ViteImageOptimizer({
      // Default settings are generally good. You can uncomment to override.
      // png: { quality: 85 },
      // jpeg: { quality: 85 },
      // jpg: { quality: 85 },
    }),
  ],

  // Configuration for the build process (`npm run build`).
  build: {
    // The output directory is the theme root. This allows us to write to
    // multiple locations ('dist/' and 'components/').
    outDir: '.',
    // CRITICAL: Prevent Vite from clearing the output directory on build.
    // If this were true, it would delete source files in the 'components' folder.
    emptyOutDir: false,
    // Generate source maps for easier debugging of compiled CSS in the browser.
    sourcemap: true,

    // Rollup options control the underlying bundling process.
    rollupOptions: {
      // Define all SCSS files that are not partials (don't start with '_')
      // as entry points for the build.
      // The glob pattern now includes both the 'scss' and 'components' directories.
      input: Object.fromEntries(
        globSync('{scss,components}/**/*.scss', {
          ignore: '**/_*', // Exclude all partials.
        }).map(file => [
          // Create a clean entry key.
          // e.g., 'scss/layout/page.scss' becomes 'scss/layout/page'
          // e.g., 'components/button/button.scss' becomes 'components/button/button'
          file.slice(0, file.length - path.extname(file).length),
          // Provide the full, absolute path to the file.
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),

      output: {
        // Define the naming convention for all compiled asset files (CSS).
        assetFileNames: (assetInfo) => {
          const entryPath = assetInfo.name;

          // If the entry came from the 'components' directory...
          if (entryPath.startsWith('components/')) {
            // ...output the compiled CSS directly back into its source folder.
            // Vite's [name] placeholder refers to the entry key from our `input` object.
            // e.g., key 'components/button/button' becomes 'components/button/button.css'
            return '[name].css';
          }

          // If the entry came from the 'scss' directory...
          if (entryPath.startsWith('scss/')) {
            // ...output it to the 'dist/css/' directory, preserving subdirectories.
            // We strip the leading 'scss/' from the path.
            const relativePath = path.relative('scss', entryPath);
            return `dist/css/${relativePath}`;
          }

          // A fallback for any other assets (like images from CSS).
          return 'dist/assets/[name].[hash][extname]';
        },
        // We do not have JS entry points, but Rollup requires this option.
        // Any JS files generated will be removed by our custom plugin.
        entryFileNames: 'dist/js/[name].js',
      },
    },
  },

  css: {
    // PostCSS configuration.
    postcss: {
      plugins: [
        // Add vendor prefixes for browser compatibility.
        (await import('autoprefixer')).default({ grid: 'autoplace' }),
      ],
    },
    // Pre-processor options for SCSS.
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'mixed-decls',
          'color-functions',
          'global-builtin',
          'import',
          'legacy-js-api',
        ],
        // Silence the noisy Sass deprecation warnings about division.
        quietDeps: true,
      },
    },
    // Note: Vite's built-in CSS minifier (`cssnano`) is used by default during
    // `vite build`. No need to add it here unless you need specific options.
  },

  // Define a common alias for easier imports.
  resolve: {
    alias: {
      '@': themePath,
    },
  },
});
