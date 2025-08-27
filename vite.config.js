import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import postcssConfig from './postcss.config.js';

// Helper: Get the absolute path to the theme directory in an ES Module context.
const themePath = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      liveReload([
        path.resolve(themePath, '**/*.twig'),
        path.resolve(themePath, '**/*.theme'),
        path.resolve(themePath, '**/*.php'),
        path.resolve(themePath, '*.info.yml'),
        path.resolve(themePath, '*.settings.yml'),
      ]),
      // Inlined plugin to prevent empty JS files from SCSS entries.
      {
        name: 'vite-css-only-plugin',
        generateBundle(options, bundle) {
          for (const fileName in bundle) {
            const chunk = bundle[fileName];
            if (chunk.type === 'chunk' && chunk.facadeModuleId?.endsWith('.scss')) {
              delete bundle[fileName];
            }
          }
        },
      },
      ViteImageOptimizer({}),
    ],
    build: {
      outDir: '.',
      emptyOutDir: false,
      // Minify only for standard production builds.
      minify: isProduction,
      // Generate sourcemaps for any build that is NOT a standard production build.
      sourcemap: !isProduction,
      rollupOptions: {
        input: Object.fromEntries(
          globSync('{scss,components}/**/*.scss', {
            ignore: '**/_*',
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
              return `dist/css/${relativePath}`;
            }
            return 'dist/assets/[name].[hash][extname]';
          },
          entryFileNames: 'dist/js/[name].js',
        },
      },
    },
    css: {
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
  };
});
