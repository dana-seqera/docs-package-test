const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seqera Documentation',
  tagline: 'Testing @seqera/docusaurus-theme with multiple doc instances',
  favicon: 'img/favicon.ico',
  url: 'https://localhost:3000',
  baseUrl: '/',
  organizationName: 'seqera',
  projectName: 'docs-example',
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Use the theme package
  themes: [
    [
      '@seqera/docusaurus-theme',
      {
        enableTailwind: true,
        enableOpenApiDocs: false,
        // customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false, // Disable default docs
        blog: false,
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    // Platform API documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platform-api',
        path: 'platform-api/docs',
        routeBasePath: 'platform-api',
        sidebarPath: require.resolve('./platform-api/docs/sidebar/sidebar.js'),
        editUrl: 'https://github.com/seqera/docs/edit/main/examples/',
      },
    ],
    // Platform Enterprise documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platform-enterprise',
        path: 'platform-enterprise',
        routeBasePath: 'platform-enterprise',
        sidebarPath: require.resolve('./platform-enterprise/enterprise-sidebar.json'),
        editUrl: 'https://github.com/seqera/docs/edit/main/examples/',
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Seqera Docs',
      items: [
        {
          to: '/platform-enterprise',
          label: 'Platform Enterprise',
          position: 'left',
        },
        {
          to: '/platform-api',
          label: 'Platform API',
          position: 'left',
        },
        {
          to: '/test',
          label: 'Component Test',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Platform Enterprise',
              to: '/platform-enterprise',
            },
            {
              label: 'Platform API',
              to: '/platform-api',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Seqera',
              href: 'https://seqera.io',
            },
            {
              label: 'Nextflow',
              href: 'https://nextflow.io',
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
  },
};

module.exports = config;