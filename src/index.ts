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
  const { enableTailwind = true, enableOpenApiDocs = true, customCss } = options;

  return {
    name: '@seqera/docusaurus-theme',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getTypeScriptThemePath() {
      return path.resolve(__dirname, '../src/theme');
    },

    getClientModules() {
      const modules: string[] = [
        path.resolve(__dirname, '../css/main.css'),
        path.resolve(__dirname, '../css/typography.css'),
        path.resolve(__dirname, '../css/fonts/inter.css'),
        path.resolve(__dirname, '../css/fonts/degular.css'),
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

// Export theme components for direct use
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Grid } from './components/Grid';
export { default as MultiqcModules } from './components/MultiqcModules';

// Export types
export type { ThemeConfig };

// Export preset configuration helper
export function createSeqeraPreset(options: SeqeraPresetOptions = {}) {
  const {
    docs = {},
    theme = {},
    openapi = {},
    platformApi = {},
    platformEnterprise = {},
    ...rest
  } = options;

  return {
    themes: [
      ['@seqera/docusaurus-theme', theme],
      ...(options.enableOpenApiDocs ? ['docusaurus-theme-openapi-docs'] : []),
    ],
    plugins: [
      ...(options.enableOpenApiDocs
        ? [
            [
              'docusaurus-plugin-openapi-docs',
              {
                id: 'api',
                docsPluginId: 'classic',
                config: openapi,
              },
            ],
          ]
        : []),
      ...(platformApi.enabled
        ? [
            [
              '@docusaurus/plugin-content-docs',
              {
                id: 'platform-api',
                routeBasePath: '/platform-api',
                path: platformApi.path || 'platform-api-docs/docs',
                ...platformApi,
              },
            ],
          ]
        : []),
      ...(platformEnterprise.enabled
        ? [
            [
              '@docusaurus/plugin-content-docs',
              {
                id: 'platform-enterprise',
                routeBasePath: '/platform-enterprise',
                path: platformEnterprise.path || 'platform-enterprise_docs',
                ...platformEnterprise,
              },
            ],
          ]
        : []),
    ],
    preset: [
      'classic',
      {
        docs: {
          remarkPlugins: [
            require('remark-code-import'),
            require('remark-math'),
            require('docusaurus-remark-plugin-tab-blocks'),
          ],
          rehypePlugins: [require('rehype-katex')],
          ...docs,
        },
        theme: {
          customCss: theme.customCss,
        },
        ...rest,
      },
    ],
  };
}

export interface SeqeraPresetOptions {
  docs?: any;
  theme?: SeqeraThemeOptions;
  openapi?: any;
  platformApi?: {
    enabled?: boolean;
    path?: string;
    [key: string]: any;
  };
  platformEnterprise?: {
    enabled?: boolean;
    path?: string;
    [key: string]: any;
  };
  enableOpenApiDocs?: boolean;
  [key: string]: any;
}