import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.neocognitive.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
