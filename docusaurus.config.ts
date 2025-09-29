// Example: docusaurus.config.ts
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Seqera Documentation',
  tagline: 'Documentation for our products',
  favicon: 'img/favicon.ico',
  url: 'https://docs.example.com',
  baseUrl: '/',
  organizationName: 'my-org',
  projectName: 'my-docs',
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@seqera/docusaurus-theme',
      {
        enableTailwind: true,
        enableOpenApiDocs: true,
        customCss: './src/css/custom.css', // Your additional custom styles
      },
    ],
    'docusaurus-theme-openapi-docs', // If using OpenAPI
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/my-org/my-docs/tree/main/',
          // These plugins will be automatically included by the theme
          remarkPlugins: [
            require('remark-code-import'),
            require('remark-math'),
            require('docusaurus-remark-plugin-tab-blocks'),
          ],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'My Blog',
            description: 'Stay updated with our posts',
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Add your OpenAPI configuration if needed
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          myapi: {
            specPath: 'api/openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
    // Add additional documentation instances if needed
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platform-api',
        routeBasePath: '/platform-api',
        path: 'platform-api-docs',
        sidebarPath: './platform-api-sidebars.js',
        docItemComponent: '@theme/ApiItem', // For OpenAPI docs
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: '180px',
        height: '40px',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/platform-api',
          label: 'API',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/my-org/my-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Footer Logo',
        src: 'img/logo-icon.svg',
        srcDark: 'img/logo-icon-light.svg',
        href: 'https://example.com',
        width: 25,
        height: 25,
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/platform-api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://community.example.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/example',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/my-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Company. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'bash',
        'docker',
        'groovy',
        'java',
        'javascript',
        'json',
        'python',
        'typescript',
        'yaml',
      ],
    },
    // Add KaTeX stylesheets for math rendering
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn',
        crossorigin: 'anonymous',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;