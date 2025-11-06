import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rj4ck.github.io/portfolio',
  base: '/portfolio',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
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
  ],
  // Asegurar que los scripts de Partytown se copien correctamente
  vite: {
    ssr: {
      noExternal: ['@astrojs/partytown']
    }
  }
});
