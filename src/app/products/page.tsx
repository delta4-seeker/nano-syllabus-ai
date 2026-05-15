import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import productEntrance from "@/assets/product-entrance.jpg";
import productStudy from "@/assets/product-study.jpg";
import productTeacher from "@/assets/product-teacher.jpg";
import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    "Study Companion, Entrance Preparation, and Teacher AI Clone. The Nano Syllabus product ecosystem.",
  path: "/products",
});

const products = [
  {
    img: productStudy,
    tag: "01 · Study",
    title: "Study Companion",
    body: "Daily co-pilot for class 6 to 12. Chapter-wise summaries, doubt solving in Nepali and English, and adaptive quizzes from your textbook.",
    points: [
      "Chapter-wise notes",
      "Doubt solver in Nepali",
      "Smart flashcards",
      "Progress tracking",
    ],
  },
  {
    img: productEntrance,
    tag: "02 · Entrance",
    title: "Entrance Preparation",
    body: "Focused mock tests and analytics for IOE, CEE, KU, and Loksewa, based on the last 10 years of papers.",
    points: [
      "10 yrs of past papers",
      "Adaptive mock tests",
      "Weakness analytics",
      "Topper strategies",
    ],
  },
  {
    img: productTeacher,
    tag: "03 · Teacher",
    title: "Teacher AI Clone",
    body: "An AI that learns from a teacher's notes and explains the way they would. Built with Nepal's top educators.",
    points: [
      "Teacher-style explanations",
      "Voice notes",
      "Personal study plan",
      "1:1 feel, anytime",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="An ecosystem for learning."
        subtitle="Nano Syllabus is starting with three products, each designed to solve a real problem for students and educators in Nepal."
      />

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="space-y-6">
          {products.map((product, index) => (
            <article
              key={product.title}
              className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-10"
            >
              <div
                className={`overflow-hidden rounded-2xl bg-muted ${index % 2 ? "md:order-2" : ""}`}
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {product.tag}
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl">{product.title}</h2>
                <p className="mt-3 text-muted-foreground">{product.body}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={siteConfig.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
          <p className="mt-2 text-muted-foreground">
            Want to be the first to know?{" "}
            <Link
              href="/contact"
              className="underline decoration-1 underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
