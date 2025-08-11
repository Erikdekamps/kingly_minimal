import autoprefixer from 'autoprefixer';
import liveReload from 'vite-plugin-live-reload';
import path from 'node:path';
import react from '@vitejs/plugin-react'
import twig from 'vite-plugin-twig-drupal';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { globSync } from 'glob';
import { join } from "node:path"

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
    twig({
      namespaces: {
        components: join(__dirname, "components"),
        // Other namespaces as required.
      },
      // Optional if you are using React storybook renderer. The default is 'html' and works with storybook's html
      // renderer.
      // framework: 'react'
      functions: {
        // You can add custom functions - each is a function that is passed the active Twig instance and should call
        // e.g. extendFunction to register a function
        reverse: (twigInstance) => twigInstance.extendFunction("reverse", () => (text) => text.split(' ').reverse().join(' ')),
        // e.g. extendFilter to register a filter
        clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
      },
      globalContext: {
        // Global variables that should be present in all templates.
        active_theme: 'my_super_theme',
        is_front_page: false,
      },
    }),
    react(),
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

          // FIX: Correctly handle the theme variations entry point.
          // The file is `theme.scss`, so the output asset name will be `scss/theme.css`.
          if (entryPath === 'scss/theme.css') {
            return 'dist/css/theme.css';
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
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
      ],
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

  resolve: {
    alias: {
      '@': themePath,
    },
  },
});
