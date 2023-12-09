// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Sabaoth Church Catania',
  tagline: 'Sito pensato e dedicato alla formazione e al supporto dei collaboratori Sabaoth',
  favicon: 'img/favicon.png',
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: ["it", "en"],
      },
    ],
  ],

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Sabaoth Catania", // Usually your GitHub org/user name.
  projectName: "sabaothct-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "dev",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "it",
    locales: ["it"],
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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: false,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/sabaoth.png",
      navbar: {
        title: " Documentazione",
        logo: {
          alt: "Sabaoth Church",
          src: "img/logoBK.svg",
          srcDark: "img/logo-bianco.png",
          height: 100,
          width: 45,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Introduzione",
          },
          {
            type: "docSidebar",
            sidebarId: "Donazione",
            position: "right",
            label: "Io Dono",
          },
          {
            type: "docSidebar",
            sidebarId: "TeamMedia",
            position: "left",
            label: "Team Media",
          },
          {
            type: "docSidebar",
            sidebarId: "Production",
            position: "left",
            label: "Team Production",
          },
          {
            type: "docSidebar",
            sidebarId: "Predicatori",
            position: "left",
            label: "Predicatori",
          },
          {
            type: "docSidebar",
            sidebarId: "Utilità",
            position: "right",
            label: "Utilità",
          },
          // {
          //   href: 'https://github.com/grnsmn/sabaoth-ct-docs/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Calendario Turni",
                to: "/docs/Team%20Media/Calendario%20Turni",
              },
              {
                label: "Utilità",
                to: "/docs/Team Media/Utilità/Maiuscole accentate",
              },
              {
                label: "Predicatori",
                to: "/docs/Predicatori/Indicazioni",
              },
              {
                label: "Proiezioni",
                to: "/docs/Team%20Media/Proiezione/Intro",
              },
              {
                label: "Post Production",
                to: "/docs/Team%20Media/PostProduzione/Intro",
              },
              {
                label: "Accensione Impianto",
                to: "/docs/Production/Accensione impianto",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/sabaothcatania",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/sabaothcatania",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@sabaothchurchcatania6496",
              },
              {
                label: "Spotify",
                href: "https://open.spotify.com/show/1nH7YyL2mE2uDOnWtJ8zQJ?si=i9OnLkSZSOaJrI9f2x56Bg&nd=1",
              },
            ],
          },
          {
            title: "Vuoi Contribuire ?",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/grnsmn/sabaoth-ct-docs/",
              },
              {
                label: "Dona con Paypal",
                href: "https://paypal.me/SabaothCatania",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sabaoth Catania Docs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
