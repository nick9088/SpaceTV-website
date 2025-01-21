import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import 'animate.css';
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webmanifest({
    /**
     * required
     **/
    name: 'SpaceTV',

    /**
     * optional
     **/
    icon: 'src/images/icon.svg', // source for favicon & icons

    short_name: 'SpaceTV',
    description: 'your daily soundtrack, 24/7',
    start_url: '/',
    theme_color: '#222222',
    background_color: '#222222',
    display: 'fullscreen',
  })]
});
