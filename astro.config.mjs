// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mykol-word.github.io',
  base: '/michael-ward',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
