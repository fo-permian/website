import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    // Base path prefix for hosting at a subpath (e.g. github.io/<repo>).
    // Set BASE_PATH=/website in GitHub Actions during the preview period.
    // Once the site is on the custom domain (fopermian.com), unset BASE_PATH
    // so paths resolve from the root.
    paths: {
      base: process.env.BASE_PATH || ''
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
