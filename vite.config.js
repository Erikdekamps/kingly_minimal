import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import autoprefixer from 'autoprefixer';

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
        if (file.type === 'chunk' && file.facadeModuleId?.endsWith('.scss')) {
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
      path.resolve(themePath, '*.info.yml'),
      path.resolve(themePath, '*.settings.yml'), // Watch for theme settings changes
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
      // The glob pattern now includes 'scss', 'scss/themes', and 'components'.
      input: Object.fromEntries(
        globSync('{scss,components}/**/*.scss', {
          ignore: '**/_*', // Exclude all partials.
        }).map(file => [
          file.slice(0, file.length - path.extname(file).length),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),

      output: {
        assetFileNames: (assetInfo) => {
          const entryPath = assetInfo.name;

          if (entryPath.startsWith('components/')) {
            return '[name].css';
          }

          if (entryPath.startsWith('scss/')) {
            const relativePath = path.relative('scss', entryPath);
            // Handle the new themes.scss entry point
            if (relativePath === 'themes.scss') {
              return 'dist/css/themes.css';
            }
            return `dist/css/${relativePath}`;
          }

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
