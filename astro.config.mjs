import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para Vercel (sin base path)
  site: import.meta.env.SITE || 'https://rj4ck-portfolio.vercel.app',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  output: "static",
  adapter: vercel(),
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
