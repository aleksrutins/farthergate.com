import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import lit from "@astrojs/lit";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lit(), sentry({
    dsn: "https://6b96fa36f8f107f874e2387b573f334c@o4505523519619072.ingest.sentry.io/4506413517832192",
    sourceMapsUploadOptions: {
      project: "farthergate",
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  }), spotlightjs()]
});