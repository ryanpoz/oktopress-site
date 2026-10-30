# OKtoPress website

Astro static site for www.oktopress.com. Vercel runs `npm run build` on every push to `main`; no local Node needed.

## How to add a blog post
1. Copy `src/content/blog/example-post.md` to `src/content/blog/your-post-slug.md` (the file name becomes `/blog/your-post-slug`).
2. Edit the frontmatter: `title`, `description`, `pubDate` (YYYY-MM-DD), `tags`, optional `faqs`.
3. Set `draft: false` (drafts are hidden on the live site).
4. Write the post in Markdown below the `---` line; put images in `public/images/`.
5. `git add . && git commit -m "New post" && git push`: Vercel builds and publishes it in about a minute.

## Notes
- Brand colours and fonts live in CSS variables at the top of `src/styles/global.css`.
- Spelling: "color" in titles/URLs, "colour" in body text.
- Waitlist form posts to `https://check.oktopress.com/api/waitlist` (needs CORS on the checker for www.oktopress.com and oktopress.com).
