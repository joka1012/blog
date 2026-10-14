// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kai-jones.com',
	base: '/blog',
	integrations: [mdx(), sitemap()],
	  markdown: {
    gfm: true,
  },
});
