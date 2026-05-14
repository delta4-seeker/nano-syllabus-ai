import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import blogCover from "@/assets/blog-cover-1.jpg";
import productStudy from "@/assets/product-study.jpg";
import productEntrance from "@/assets/product-entrance.jpg";
import productTeacher from "@/assets/product-teacher.jpg";
import aboutImg from "@/assets/about-students.jpg";
import heroImg from "@/assets/hero-student.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs · Nano Syllabus" },
      { name: "description", content: "Study tips, exam guides, and stories from students across Nepal." },
      { property: "og:title", content: "Nano Syllabus Blog" },
      { property: "og:description", content: "Notes from the team and students." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  { cover: productEntrance, tag: "Guide", date: "May 12, 2026", title: "How to crack IOE entrance in 90 days", excerpt: "A week-by-week plan that worked for 200+ students last year." },
  { cover: blogCover, tag: "Study tip", date: "May 04, 2026", title: "The 25-minute revision habit", excerpt: "Why short, daily revisions beat 3-hour weekend marathons." },
  { cover: aboutImg, tag: "Story", date: "Apr 22, 2026", title: "From Doti to Pulchowk: Aakriti's story", excerpt: "How a student from rural Nepal cleared IOE without coaching." },
  { cover: productStudy, tag: "NEB", date: "Apr 11, 2026", title: "Class 12 Physics: chapters that actually matter", excerpt: "A data-driven look at the past 10 years of NEB papers." },
  { cover: productTeacher, tag: "Teachers", date: "Mar 30, 2026", title: "Why we built a Teacher AI clone", excerpt: "Honouring the teachers who shaped us, at scale." },
  { cover: heroImg, tag: "Product", date: "Mar 15, 2026", title: "Inside our doubt-solving engine", excerpt: "How we made an AI that explains in Nepali like your favourite sir." },
];

function BlogsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Blogs"
        title="Notes from the team."
        subtitle="Study tips, exam strategies, and stories from students across Nepal."
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.title}
              to="/blogs"
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5">{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl leading-tight md:text-3xl">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
