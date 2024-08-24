import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rj4ck.github.io/portfolio',
  base: '/portfolio',
  routes: [
    '/:lang',
    '/:lang/curriculum',
  ],
  redirects: {
    '': '/portfolio/en'
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ]
});
