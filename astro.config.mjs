import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://penidago.com',
  integrations: [tailwind()],
  image: {
    domains: ['images.unsplash.com']
  }
});
