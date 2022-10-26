// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Bussin' Biscuits",
  tagline: "FLL Team 53020",
  url: "https://bussinbiscuits.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fox.png",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bussinbiscuits", // Usually your GitHub org/user name.
  projectName: "bussinbiscuits.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bussinbiscuits/bussinbiscuits.github.io",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Team 53020",
        logo: {
          alt: "My Site Logo",
          src: "img/fox.png",
        },
        items: [
          {
            to: "/docs/category/tutorials",
            label: "Tutorials",
            position: "left",
          },

          { to: "/docs/technic", label: "Technic Tips", position: "left" },
          {
            to: "/docs/links",
            label: "Links",
            position: "left",
          },
          {
            href: "https://github.com/bussinbiscuits/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "First Lego League",
                href: "https://firstlegoleague.org/",
              },
              {
                label: "Season Resources",
                href: "https://www.firstlegoleague.org/season",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FLL Team 53020.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
