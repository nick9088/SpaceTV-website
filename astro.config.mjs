import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import 'animate.css';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [VitePWA({
        registerType: "autoUpdate",
        workbox: {
    globDirectory: "dist",
    // globPatterns for the files you want to cache inmediately
    // after service worker registration.
    globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
    // Don't fallback on document based (e.g. `/some-page`) requests
    // This removes an errant console.log message from showing up.
    navigateFallback: null
        }
    })],
  }
});