// App base URL (accounts, checker, API). Override at build time with PUBLIC_APP_BASE_URL.
export const APP_BASE_URL = ((import.meta.env.PUBLIC_APP_BASE_URL as string | undefined) || 'https://app.oktopress.com').replace(/\/$/, '');
export const SITE = { url: 'https://www.oktopress.com', name: 'OKtoPress', app: APP_BASE_URL, checker: APP_BASE_URL,
  login: APP_BASE_URL + '/login', signup: APP_BASE_URL + '/signup',
  description: 'OKtoPress turns your print shop website into a quote machine: art checks, leads, quotes, signed proof approvals and deposits, alongside your existing shop software.' };
import { getCollection } from 'astro:content';
export const getPosts = async () => (await getCollection('blog', ({ data }) => import.meta.env.PROD ? !data.draft : true))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
export const readingTime = (t = '') => Math.max(1, Math.round(t.split(/\s+/).filter(Boolean).length / 220));
export const fmt = (d: Date) => d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
