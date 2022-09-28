// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NExp Docs',
  tagline: 'The Node Experience',
  url: 'https://nexp.digichanges.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DigiChanges', // Usually your GitHub org/user name.
  projectName: 'nexp-docs', // Usually your repo name.

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
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
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
      navbar: {
        title: 'NExp',
        logo: {
          alt: 'NExp Logo',
          src: 'https://raw.githubusercontent.com/DigiChanges/node-experience/docs/RABC/readme/NExp.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/coverpage',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'api/node-experience',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'tutorials/building',
            position: 'left',
            label: 'Tutorials',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/DigiChanges/node-experience',
            label: 'GitHub',
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
                label: 'Knowledge Base',
                to: '/docs/documentation/coverpage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nexp',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ZYCVXNWHh7',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/digichanges',
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
                href: 'https://github.com/DigiChanges/node-experience',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href= "https://digichanges.com">DigiChanges</a>, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
          appId: '5J7AQWV2BK', // The application ID provided by Algolia
          apiKey: 'b9d169f71bf43350ca45b3673ea3b2ea', // Public API key: it is safe to commit it
          indexName: 'nexp',
          contextualSearch: true, // Optional: see doc section below
          searchParameters: {}, // Optional: Algolia search parameters
          searchPagePath: 'search' // Optional: path for search page that enabled by default (`false` to disable it)
    },
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          nexp: { // Note: nexp key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "api/nexp.json", // Path to designated spec file
            outputDir: "docs/api", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],
}

module.exports = config;
