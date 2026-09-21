import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.diaztech.net',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // /privacy-policy is intentionally unlinked (still Wix boilerplate, not
      // real content yet) — leaving it out of the sitemap so it isn't actively
      // pointed at for indexing. Remove this filter once it has real content.
      filter: (page) => !page.includes('/privacy-policy'),
    }),
  ],
});
