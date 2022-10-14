// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig()
{
  const mdxMermaid = await import('mdx-mermaid');

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
            docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
            remarkPlugins: [mdxMermaid.default]
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
              to: "/docs/api/main",
              position: 'left',
              label: 'API',
            },
            {
              type: 'doc',
              docId: 'tutorials/tutorials',
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
        typesense: {
          typesenseCollectionName: 'nexp.docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
          typesenseServerConfig: {
            nodes: [
              {
                host: 'search.digichanges.com',
                port: 443,
                protocol: 'https',
              },
            ],
            apiKey: 'OYw7ElBA5VIncI8iRpo33DJkeRCRR3Lv',
          }
        }
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

    themes: ["docusaurus-theme-openapi-docs", "docusaurus-theme-search-typesense"],
  }
}

module.exports = createConfig;
