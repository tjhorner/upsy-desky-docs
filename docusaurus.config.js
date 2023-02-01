// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Upsy Desky',
  tagline: 'Make your standing desk smarter',
  favicon: 'img/favicon.ico',

  url: 'https://upsy-desky.tjhorner.dev',
  baseUrl: '/',

  organizationName: 'tjhorner', // Usually your GitHub org/user name.
  projectName: 'upsy-desky-docs', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'Upsy Desky',
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/tjhorner/upsy-desky',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/ZHfXKQrSxF',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ZHfXKQrSxF',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tjhorner/upsy-desky',
              },
            ],
          },
          {
            title: 'Shop',
            items: [
              {
                label: 'Buy Upsy Desky on Tindie',
                href: 'https://www.tindie.com/products/tjhorner/upsy-desky/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TJ Horner`,
      },
      prism: {
        additionalLanguages: ['yaml'],
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    }),
};

module.exports = config;
