// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://alto-jardin.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  
  // SEO optimizations
  experimental: {
    assets: true,
  },
});