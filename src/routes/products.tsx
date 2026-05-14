import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import productStudy from "@/assets/product-study.jpg";
import productEntrance from "@/assets/product-entrance.jpg";
import productTeacher from "@/assets/product-teacher.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Nano Syllabus" },
      { name: "description", content: "Study Companion, Entrance Preparation, and Teacher AI Clone — Nano Syllabus' product ecosystem." },
      { property: "og:title", content: "Nano Syllabus Products" },
      { property: "og:description", content: "Three products built for students of Nepal." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    img: productStudy,
    tag: "01 — Study",
    title: "Study Companion",
    body: "Daily co-pilot for class 6–12. Chapter-wise summaries, doubt solving in Nepali & English, and adaptive quizzes from your textbook.",
    points: ["Chapter-wise notes", "Doubt solver in Nepali", "Smart flashcards", "Progress tracking"],
  },
  {
    img: productEntrance,
    tag: "02 — Entrance",
    title: "Entrance Preparation",
    body: "Focused mock tests and analytics for IOE, CEE, KU and Loksewa — based on the last 10 years of papers.",
    points: ["10 yrs of past papers", "Adaptive mock tests", "Weakness analytics", "Topper strategies"],
  },
  {
    img: productTeacher,
    tag: "03 — Teacher",
    title: "Teacher AI Clone",
    body: "An AI that learns from a teacher's notes and explains the way they would. Built with Nepal's top educators.",
    points: ["Teacher-style explanations", "Voice notes", "Personal study plan", "1:1 feel, anytime"],
  },
];

function ProductsPage() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Products</p>
        <h1 className="mt-3 text-5xl md:text-7xl">An ecosystem for learning.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Nano Syllabus is starting with three products — each designed to solve a real
          problem for students and educators in Nepal.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="space-y-6">
          {products.map((p, i) => (
            <article key={p.title} className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
              <div className={`overflow-hidden rounded-2xl bg-muted ${i % 2 ? "md:order-2" : ""}`}>
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                <h2 className="mt-2 text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="https://calendly.com/nanosyllabus/demo"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background hover:opacity-90"
                  >
                    Try it out <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="font-display text-3xl">More coming soon.</p>
          <p className="mt-2 text-muted-foreground">Want to be the first to know? <Link to="/contact" className="underline">Get in touch</Link>.</p>
        </div>
      </section>
    </Layout>
  );
}
