import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import '@notiz/scully-plugin-lazy-images';
import '@notiz/scully-plugin-copy-static-content';
import '@notiz/scully-plugin-fouc';
import '@notiz/scully-plugin-rss';
import '@notiz/scully-plugin-medium-zoom';
import './projects/banner-generator';
import './projects/amp';
import {
  getSitemapPlugin,
  SitemapConfig,
} from '@gammastream/scully-plugin-sitemap';

const defaultPostRenderers = [
  'fouc',
  'seoHrefOptimise',
  'lazyImages',
  'mediumZoom',
  'copyStaticContent',
];

const SitemapPlugin = getSitemapPlugin();
const sitemapConfig: SitemapConfig = {
  urlPrefix: 'https://javier.pm',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'weekly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
  routes: {
    '/blog/:slug': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-blog.xml',
    },
    '/tags/:slug': {
      changeFreq: 'daily',
      priority: '0.9',
      sitemapFilename: 'sitemap-tags.xml',
    },
  },
};
setPluginConfig(SitemapPlugin, sitemapConfig);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'notiz',
  defaultPostRenderers,
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog',
      },
      postRenderers: [...defaultPostRenderers, 'amp', 'rss', 'bannerGenerator'],
      '/about/:slug': {
        type: 'contentFolder',
        slug: {
          folder: './content/about',
        },
      },
    },
    '/tags/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/tags',
      },
    },
  },
};
