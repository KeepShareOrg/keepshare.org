// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KeepShare',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://keepshare.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'keepshare.org', // Usually your GitHub org/user name.
  projectName: 'keepshare', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/keepshareorg/keepshare',
        },
        blog: false,
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
      navbar: {
        title: 'KeepShare',
        logo: {
          alt: 'KeepShare Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/keepshareorg/keepshare',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'html',
            value: `<a href="/console">Login in / Sign up</a>`,
            position: 'right',
            className: 'login-button',
          },
          {
            type: 'search',
            position: 'right',
            className: 'navbar__search',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `<div>KeepShare is 100% free, open-source software. Forever. <a href="https://github.com/keepshareorg/keepshare">View on Github</a></div>`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
