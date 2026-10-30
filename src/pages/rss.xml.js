import rss from '@astrojs/rss';
import { getPosts, SITE } from '../site';
export async function GET(context) {
  const posts = await getPosts();
  return rss({ title: 'OKtoPress blog', description: SITE.description, site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/blog/${p.id}`, categories: p.data.tags })) });
}
