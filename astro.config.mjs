// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.waterna.co.uk',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
