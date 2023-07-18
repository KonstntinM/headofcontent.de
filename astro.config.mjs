import { defineConfig } from "astro/config";

// https://astro.build/config
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [vue(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
});
