import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { mainNav, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = mainNav.map(({ href }) => ({
    url: `${siteConfig.url}${href}`,
    lastModified: "2026-05-15",
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: "2026-05-15",
  }));

  return [...staticPages, ...blogPages];
}
