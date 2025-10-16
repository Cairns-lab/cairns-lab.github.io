import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cairn\'s Lab',
  tagline: 'The Centre for Complex Disease and Precision Medicine',
  favicon: 'img/CL_logo.png',

  // So it does not replace the main branch when pushed
  deploymentBranch: 'gh-pages',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cairns-lab.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cairns-lab', // Usually your GitHub org/user name.
  projectName: 'cairns-lab.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
     [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'docs/Projects',
        routeBasePath: 'Projects',
        sidebarPath: './sidebars/projectSidebar.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'papers',
        path: 'docs/Papers',
        routeBasePath: 'Papers',
        sidebarPath: './sidebars/paperSidebar.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'members',
        path: 'docs/Members',
        routeBasePath: 'Members',
        sidebarPath: './sidebars/memberSidebar.ts',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/CL_logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Cairn\'s Lab',
      logo: {
        alt: 'Cairn\'s Lab Logo',
        src: 'img/CL_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          docsPluginId: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'paperSidebar',
          docsPluginId: 'papers',
          position: 'left',
          label: 'Papers',
        },
        {
          type: 'docSidebar',
          sidebarId: 'memberSidebar',
          docsPluginId: 'members',
          position: 'left',
          label: 'Members',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Cairns-lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cairn's Lab.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
