// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPage = repository.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS && !isUserPage ? `/${repository}` : '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://valuetodays.github.io',
  base,
  output: 'static',
  integrations: [sitemap()],
});
