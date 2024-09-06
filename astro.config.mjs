import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://thunderous-sopapillas-81fa75.netlify.app/",
  integrations: [preact()]
});