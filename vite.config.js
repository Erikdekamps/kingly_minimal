import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import postcssConfig from './postcss.config.js';

// Get the absolute path to the theme directory in an ES Module context.
const themePath = path.dirname(fileURLToPath(import.meta.url));

/**
 * A custom Vite plugin to prevent the creation of empty JavaScript files when
 * SCSS files are used as entry points.
 *
 * @returns {import('vite').Plugin} The Vite plugin object.
 */
function viteCssOnlyPlugin() {
  return {
    name: 'vite-css-only-plugin',
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const file = bundle[fileName];
        // FIX: This now correctly targets only SCSS entry points and avoids
        // deleting JS chunks that might be generated from JS entry files.
        if (
          file.type === 'chunk' &&
          Object.keys(file.modules).some((module) => module.endsWith('.scss')) &&
          Object.values(file.modules).every((module) => module.code === null)
        ) {
          delete bundle[fileName];
        }
      }
    },
  };
}

// Export the main configuration object using defineConfig for type-safety.
export default defineConfig({
  plugins: [
    liveReload([
      path.resolve(themePath, '**/*.twig'),
      path.resolve(themePath, '**/*.theme'),
      path.resolve(themePath, '**/*.php'), // Watch for theme-settings.php
      path.resolve(themePath, '*.info.yml'),
      path.resolve(themePath, '*.settings.yml'),
    ]),
    viteCssOnlyPlugin(),
    ViteImageOptimizer({}),
  ],

  build: {
    outDir: '.',
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      // Define all SCSS files that are not partials as entry points.
      // The glob pattern will automatically find our new scss/tailwind.scss.
      input: Object.fromEntries(
        globSync('{scss,components}/**/*.scss', {
          // Exclude all partials (files starting with _).
          ignore: '**/_*',
        }).map(file => [
          // This creates a clean name for the entry point, e.g., 'scss/layout/page'.
          file.slice(0, file.length - path.extname(file).length),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),

      output: {
        assetFileNames: (assetInfo) => {
          const entryPath = assetInfo.name;

          if (entryPath.startsWith('components/')) {
            // Place component CSS directly in its own directory, e.g., components/card/card.css
            return '[name].css';
          }

          if (entryPath.startsWith('scss/')) {
            // For other global SCSS files, place them in dist/css following their sub-path.
            const relativePath = path.relative('scss', entryPath);
            return `dist/css/${relativePath}`;
          }

          // Default for other assets like images.
          return 'dist/assets/[name].[hash][extname]';
        },
        entryFileNames: 'dist/js/[name].js',
      },
    },
  },

  css: {
    // Point to the dedicated PostCSS config file.
    postcss: postcssConfig,
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

  resolve: {
    alias: {
      '@': themePath,
    },
  },
});
