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
        if (file.type === 'chunk' && file.facadeModuleId?.endsWith('.scss')) {
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
    // We set the output directory to the project root. This is required because
    // we are writing to multiple top-level directories (dist/ and components/).
    outDir: '.',
    // CRITICAL: We must disable emptyOutDir. If this were true, Vite would
    // delete your source files in 'components/' on build. We accept the build
    // warning because this configuration is necessary for our architecture.
    emptyOutDir: false,

    rollupOptions: {
      input: Object.fromEntries(
        globSync('{scss,components}/**/!(_)*.scss').map(file => [
          file.slice(0, file.length - path.extname(file).length),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),

      output: {
        assetFileNames: (assetInfo) => {
          // If the source is from the 'components' directory...
          if (assetInfo.name.startsWith('components/')) {
            // Output the CSS file directly back into its source component folder.
            // Vite uses `[name]` which corresponds to our input key, e.g., 'components/button/button'.
            return '[name].css';
          }

          // If the source is from the 'scss' directory...
          if (assetInfo.name.startsWith('scss/')) {
            // Output to 'dist/css/' while maintaining subdirectories.
            const newPath = assetInfo.name.substring('scss/'.length);
            return `dist/css/${newPath}`;
          }

          // A fallback for any other assets.
          return 'dist/css/[name].css';
        },
        // JS entries would go into 'dist/js/'.
        entryFileNames: 'dist/js/[name].js',
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        (await import('autoprefixer')).default({ grid: 'autoplace' }),
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
      },
    },
  },
});
