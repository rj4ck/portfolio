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
  ],
  output: "hybrid",
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
