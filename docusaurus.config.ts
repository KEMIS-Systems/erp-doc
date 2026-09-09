import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'KEMIS ERP',
  tagline: 'Manual do KEMIS ERP',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: confirmar o domínio definitivo de publicação (mesmo padrão do
  // firmou-docs, "docs.<produto>.app" — não há CNAME neste repo ainda).
  url: 'https://docs.kemis.app',
  baseUrl: '/',

  organizationName: 'KEMIS-Systems',
  projectName: 'erp-doc',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Sem editUrl: o repo é privado, um link de "editar esta página"
          // levaria a maioria de quem lê o manual a um 404 de acesso.
        },
        // Sem blog: isto é um manual de produto, não um feed de posts.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Instância de docs separada para o Portal do Fornecedor - aplicação
    // própria (fora do ERP), então fica fora do manual do ERP: conteúdo em
    // supplier-portal-docs/, rotas em /supplier-portal/..., acessada só
    // pelo link de topo "Portal do Fornecedor", nunca pelo sidebar do
    // Manual ERP.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'supplierPortal',
        path: 'supplier-portal-docs',
        routeBasePath: 'supplier-portal',
        sidebarPath: './sidebarsSupplierPortal.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KEMIS ERP',
      logo: {
        alt: 'KEMIS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual ERP',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'supplierPortal',
          sidebarId: 'supplierPortalSidebar',
          position: 'left',
          label: 'Portal do Fornecedor',
        },
        {
          href: 'https://kemis.app',
          label: 'Ir para o KEMIS ERP',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {label: 'Manual ERP', to: '/docs/intro'},
            {label: 'Portal do Fornecedor', to: '/supplier-portal'},
          ],
        },
        {
          title: 'KEMIS',
          items: [{label: 'Site', href: 'https://kemis.app'}],
        },
      ],
      copyright: `© ${new Date().getFullYear()} KEMIS. Documentação do KEMIS ERP.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
