// src/index.ts
import type { Plugin, LoadContext, PluginOptions } from '@docusaurus/types';
import type { ThemeConfig } from '@docusaurus/preset-classic';
import path from 'path';

export interface SeqeraThemeOptions extends PluginOptions {
  customCss?: string | string[];
  enableTailwind?: boolean;
  enableOpenApiDocs?: boolean;
}

export default function seqeraTheme(
  context: LoadContext,
  options: SeqeraThemeOptions = {}
): Plugin {
  const { enableTailwind = true, customCss } = options;

  return {
    name: '@seqera/docusaurus-theme',

    getThemePath() {
      // In published package, theme is in lib/theme
      return path.resolve(__dirname, './theme');
    },

    getTypeScriptThemePath() {
      // Points to source for TypeScript resolution during development
      return path.resolve(__dirname, '../src/theme');
    },

    getClientModules() {
      const modules: string[] = [
        // CSS files are in the package root
       path.resolve(__dirname, '../src/css/main.css')
        // path.resolve('../src/css/typography.css'),
        // path.resolve('../src/css/fonts/inter.css'),
        // path.resolve('../src/css/fonts/degular.css'),
      ];

      if (customCss) {
        if (Array.isArray(customCss)) {
          modules.push(...customCss);
        } else {
          modules.push(customCss);
        }
      }

      return modules;
    },

    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            '@theme': path.resolve(__dirname, './theme'),
            '@seqera/components': path.resolve(__dirname, './components'),
          },
        },
      };
    },

    configurePostCss(postcssOptions) {
      if (enableTailwind) {
        postcssOptions.plugins = [
          ...postcssOptions.plugins,
          require('@tailwindcss/postcss'),
        ];
      }
      return postcssOptions;
    },
  };
}

// Don't export components directly from index - they should be imported from their paths
// This prevents them from being loaded during Docusaurus config phase

// Export types
export type { ThemeConfig };