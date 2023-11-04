// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const prism = require('prism-react-renderer');
const lightCodeTheme = prism.themes.github;
const darkCodeTheme = prism.themes.dracula;

async function createConfig()
{
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'NExp Docs',
    tagline: 'The Node Experience',
    url: 'https://nexp.digichanges.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: false,

    organizationName: 'DigiChanges',
    projectName: 'nexp-docs',
    staticDirectories: ['public', 'static'],

    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    markdown: {
      mermaid: true,
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
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
            src: 'img/nexp.svg',
            srcDark: 'img/download.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'documentation/home',
              position: 'left',
              label: 'Documentation',
            },
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
                  to: '/docs/documentation/home',
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
          copyright: `Copyright © ${new Date().getFullYear()} <a href= 'https://digichanges.com'>DigiChanges</a>, Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        typesense: {
          typesenseCollectionName: 'nexp.docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
          typesenseServerConfig: {
            nodes: [
              {
                host: 'typesense-production-1d39.up.railway.app',
                port: 443,
                protocol: 'https',
              },
            ],
            apiKey: '_celc8lyc5ez1xiymjk2ft$l-ar1q0v4',
          }
        }
      }),

    plugins: [],

    themes: ['docusaurus-theme-search-typesense', '@docusaurus/theme-mermaid'],
  }
}

module.exports = createConfig;
