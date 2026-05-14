import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Nano Syllabus" },
      { name: "description", content: "Study tips, exam guides, and stories from students across Nepal." },
      { property: "og:title", content: "Nano Syllabus Blog" },
      { property: "og:description", content: "Notes from the team and students." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  { tag: "Guide", date: "May 12, 2026", title: "How to crack IOE entrance in 90 days", excerpt: "A week-by-week plan that worked for 200+ students last year." },
  { tag: "Study tip", date: "May 04, 2026", title: "The 25-minute revision habit", excerpt: "Why short, daily revisions beat 3-hour weekend marathons." },
  { tag: "Story", date: "Apr 22, 2026", title: "From Doti to Pulchowk: Aakriti's story", excerpt: "How a student from rural Nepal cleared IOE without coaching." },
  { tag: "NEB", date: "Apr 11, 2026", title: "Class 12 Physics: chapters that actually matter", excerpt: "A data-driven look at the past 10 years of NEB papers." },
  { tag: "Teachers", date: "Mar 30, 2026", title: "Why we built a Teacher AI clone", excerpt: "Honouring the teachers who shaped us — at scale." },
  { tag: "Product", date: "Mar 15, 2026", title: "Inside our doubt-solving engine", excerpt: "How we made an AI that explains in Nepali like your favourite sir." },
];

function BlogsPage() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Blogs</p>
        <h1 className="mt-3 text-5xl md:text-7xl">Notes from the team.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Study tips, exam strategies, and stories from students across Nepal.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.title} to="/blogs" className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-muted/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-2 py-0.5">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <div>
                <h2 className="font-display text-3xl leading-tight">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
