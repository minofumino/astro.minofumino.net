import { defineConfig } from 'astro/config';
import rehypeImgCaption from './src/plugins/rehype-img-caption.mjs';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  markdown: {
    rehypePlugins: [rehypeImgCaption],
    shikiConfig: { theme: 'github-light'}
  },
});