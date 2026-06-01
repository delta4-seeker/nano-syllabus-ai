import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { createPageMetadata, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({
      title: "Blog",
      description: "Study tips and exam guides from Nano Syllabus.",
      path: "/blogs",
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
  });
}

function toIsoDate(dateStr: string): string {
  return new Date(dateStr).toISOString().split("T")[0];
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const isoDate = toIsoDate(post.date);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "Nano Syllabus",
      url: "https://nanosyllabus.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nano Syllabus",
      logo: {
        "@type": "ImageObject",
        url: "https://nanosyllabus.com/nanosyllabus_logo.png",
      },
    },
    url: `https://nanosyllabus.com/blogs/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nanosyllabus.com/blogs/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <Link
        href="/blogs"
        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blogs
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-2 py-0.5">{post.tag}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{post.intro}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src={post.cover}
              alt={post.title}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-12 max-w-3xl space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-card p-8 lg:sticky lg:top-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Study with us</p>
          <h2 className="mt-3 text-2xl">Turn reading into revision.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Ask follow-up questions, generate flashcards, and practice with a curriculum-aware tutor
            built for Nepal.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={siteConfig.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Contact the team
            </Link>
          </div>
        </aside>
      </div>
    </article>
    </>
  );
}
