import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sentry({
        dsn: "https://6b96fa36f8f107f874e2387b573f334c@o4505523519619072.ingest.sentry.io/4506413517832192",
        sourceMapsUploadOptions: {
            project: "farthergate",
            authToken: process.env.SENTRY_AUTH_TOKEN
        }
    }), spotlightjs(), react(), mdx()]
});