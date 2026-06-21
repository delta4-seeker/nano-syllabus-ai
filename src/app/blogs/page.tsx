import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog-posts";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Blogs",
  description: "Study tips, exam guides, and stories to help you clear coursework faster.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Notes from the team."
        subtitle="Study tips, exam strategies, and stories to help you study smarter."
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={post.cover}
                  alt={post.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl leading-tight md:text-3xl">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
