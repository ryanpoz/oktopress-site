export const SITE = { url: 'https://www.oktopress.com', name: 'OKtoPress', checker: 'https://check.oktopress.com',
  description: 'Free art checker for print shops and their customers: check print resolution and ink colours before you order.' };
import { getCollection } from 'astro:content';
export const getPosts = async () => (await getCollection('blog', ({ data }) => import.meta.env.PROD ? !data.draft : true))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
export const readingTime = (t = '') => Math.max(1, Math.round(t.split(/\s+/).filter(Boolean).length / 220));
export const fmt = (d: Date) => d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
