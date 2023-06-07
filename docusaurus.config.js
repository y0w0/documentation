// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radxa Docs',
  tagline: 'Documentations for Radxa products',
  url: 'https://docs.radxa.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'radxa-docs', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      zh: {
        htmlLang: 'zh-CN',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/radxa-docs/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/radxa-docs/documentation/edit/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/footer.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'KB2V2SQ6N9',

        // Public API key: it is safe to commit it
        apiKey: '9fdd9855b5bfb8447d4079ca17e40bdc',
        // Your index name
        indexName: 'radxa',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,

      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Radxa',
          src: 'logo.svg',
          width: 90,
          height: 20,
        },
        items: [
          {
            type: 'doc',
            label: 'Welcome',
            docId: 'welcome',
          },
          {
            position: 'right',
            label: 'Home',
            to: 'http://www.radxa.com/',
            target: '_self',
          },
          {
            position: 'right',
            label: 'Products',
            to: 'http://www.radxa.com/product',
            target: '_self',
          },
          {
            position: 'right',
            label: 'News',
            to: 'http://www.radxa.com/news',
            target: '_self',
          },
          {
            position: 'right',
            label: 'Support',
            to: 'https://forum.radxa.com/',
          },
          {
            position: 'right',
            label: 'Community',
            to: 'http://www.radxa.com/association',
            target: '_self',
          },
          {
            position: 'right',
            label: 'About',
            to: 'http://www.radxa.com/about',
            target: '_self',
          },
          {
            position: 'right',
            label: 'Services',
            to: 'http://www.radxa.com/services',
            target: '_self',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },]
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Radxa',
            items: [
              {
                label: 'Home',
                to: 'http://www.radxa.com/',
                target: '_self',
              },
              {
                label: 'News',
                to: 'http://www.radxa.com/news',
                target: '_self',
              },
              {
                label: 'About',
                to: 'http://www.radxa.com/about',
                target: '_self',
              },
              {
                label: 'Products',
                to: 'http://www.radxa.com/product',
                target: '_self',
              },
              {
                label: 'Community',
                to: 'http://www.radxa.com/association',
                target: '_self',
              },
              {
                label: 'Services',
                to: 'http://www.radxa.com/services',
                target: '_self',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Wiki',
                href: 'https://wiki.radxa.com/',
              },
              {
                label: 'Forum',
                href: 'https://forum.radxa.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/radxa',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'About Radxa',
                to: 'http://www.radxa.com/about',
              },
              {
                label: 'Contact Radxa',
                to: 'http://www.radxa.com/about?contact_us',
              },
              {
                html: `
                   <div class='footer_box'>
                    <div class='footer_center'>
                        <div class='log'></div>
                        <div class='iconBox'>
                          <div class='men'>Follow us</div>
                          <ul>
                            <li>
                              <a class='a_on1 iconpg' href='https://github.com/radxa'></a>
                            </li>
                            <li>
                              <a class='a_on2 iconpg' href='https://discord.com/invite/mn73YNWdHY'></a>
                            </li>
                            <li>
                              <a class='a_on3 iconpg' href='https://t.me/rockpi4'></a>
                            </li>
                            <li class='a_on4_li'>
                              <div class='a_on4 iconpg'></div>
                              <div class='vxMa'></div>
                            </li>
                            <li class='a_on5_li'>
                              <div class='a_on5 iconpg'></div>
                              <div class='qqMa'></div>
                            </li>
                          </ul>
                        </div>
                    </div>
                   </div>
                  `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash'],
      },
      typography: {
        fontFamily: ["Helvetica", "pingFangSC", "Microsoft YaHei", "微软雅黑", "Arial", "sans-serif"]
      }
    }),
};

module.exports = config;
