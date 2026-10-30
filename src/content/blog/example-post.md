---
# EXAMPLE POST: draft: true keeps it out of the live site. Copy this file to start a new post.
title: "Example post: how frontmatter works"
description: "One or two sentences for search results and social cards."
pubDate: 2026-10-29
# updatedDate: 2026-11-05     # optional
author: "Ryan Poznikoff"
tags: ["example", "how-to"]
draft: true
# Optional FAQ: shows at the bottom and adds FAQ structured data.
faqs:
  - q: "Is this a real question?"
    a: "No, it's an example of the FAQ format."
---

This is an **example draft**. It shows in `npm run dev` but is hidden from the production build because `draft: true`.

The file name becomes the URL: `example-post.md` → `/blog/example-post`. Use lowercase words with dashes, and "color" in titles and URLs.

## A heading

Write normal Markdown: paragraphs, [links](/dpi-checker), lists, and images placed in `public/` like `![alt text](/images/my-photo.jpg)`.
