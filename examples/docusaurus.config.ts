// example/docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Seqera Theme Example',
  tagline: 'Testing the @seqera/docusaurus-theme package',
  favicon: 'img/favicon.ico',
  url: 'https://localhost:3000',
  baseUrl: '/',
  organizationName: 'seqera',
  projectName: 'theme-example',
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Use the local theme package
  themes: [
    [
      // In development: use the local package via npm link
      // In production: use '@seqera/docusaurus-theme'
      process.env.USE_LOCAL_THEME ? 
        require.resolve('../src/index.ts') : 
        '@seqera/docusaurus-theme',
      {
        enableTailwind: true,
        enableOpenApiDocs: false, // Set to true if you want to test OpenAPI
        customCss: './src/css/custom.css',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/seqera/docusaurus-theme/tree/main/example/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Theme Example',
      logo: {
        alt: 'Seqera Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/showcase', label: 'Components', position: 'left'},
        {
          href: 'https://github.com/seqera/docusaurus-theme',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Seqera',
        src: 'img/seqera-icon.svg',
        srcDark: 'img/seqera-icon-light.svg',
        href: 'https://seqera.io',
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
              label: 'Components',
              to: '/showcase',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/seqera/docusaurus-theme',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Seqera. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'docker', 'groovy', 'java', 'python', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;