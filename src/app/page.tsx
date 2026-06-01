import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-student.png";
import productEntrance from "@/assets/product-entrance.jpg";
import productStudy from "@/assets/product-study.jpg";
import productTeacher from "@/assets/product-teacher.jpg";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description:
    "An AI co-pilot built around Nepal's curriculum, syllabus, question banks, and teacher notes. Learn faster and prepare smarter.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nano Syllabus",
  url: "https://nanosyllabus.com",
  logo: "https://nanosyllabus.com/nanosyllabus_logo.png",
  description:
    "An AI co-pilot built around Nepal's curriculum, syllabus, question banks, and teacher notes.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@nanosyllabus.com",
    telephone: "+977-9800000000",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Built for Nepal&apos;s curriculum
            </div>
            <h1 className="mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
              Your pocket-sized
              <br />
              <span className="italic text-muted-foreground">study companion.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              Nano Syllabus is an AI co-pilot that understands your textbooks, syllabus, and
              question banks, so studying actually feels doable.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Start learning free
                <ArrowRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/products"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore products
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                Loved by 10k+ students
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <span className="hidden sm:inline">SEE • NEB • CEE • IOE</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-transparent to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
              <Image
                src={heroImg}
                alt="Student learning with Nano Syllabus"
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background p-4 shadow-lg md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Asking…</p>
                  <p className="text-sm">Explain Newton&apos;s 3rd law in Nepali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Curriculum-aware</span>
          <span>SEE • Class 10</span>
          <span>NEB +2</span>
          <span>IOE entrance</span>
          <span>CEE entrance</span>
          <span>Teacher-reviewed</span>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Why students choose us
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">A tutor that actually knows your syllabus.</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Built on NEB & SEE",
              body: "Trained on Nepal's official textbooks and chapter-wise notes. Answers stay relevant to your exam.",
            },
            {
              icon: GraduationCap,
              title: "Past papers, solved",
              body: "10 years of question banks with step-by-step explanations in English and Nepali.",
            },
            {
              icon: Bot,
              title: "Always on, always patient",
              body: "Ask the same doubt 10 times. Your AI tutor never gets tired and never judges.",
            },
            {
              icon: Sparkles,
              title: "Smart revision",
              body: "Personalised flashcards, summaries, and quizzes built from what you actually struggle with.",
            },
            {
              icon: CheckCircle2,
              title: "Teacher-reviewed",
              body: "Notes co-created with top teachers across Kathmandu, Pokhara, and Biratnagar.",
            },
            {
              icon: Star,
              title: "Free to start",
              body: "Begin with the free plan. Upgrade only when you're ready for entrance prep.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-background p-8 transition-colors hover:bg-muted/50"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                An ecosystem
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Three products. One mission.</h2>
            </div>
            <Link
              href="/products"
              className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:inline-flex"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: productStudy,
                tag: "01 · Study",
                title: "Study Companion",
                body: "Your daily co-pilot for class 6 to 12. Ask, summarise, revise.",
              },
              {
                img: productEntrance,
                tag: "02 · Entrance",
                title: "Entrance Preparation",
                body: "Targeted practice for IOE, CEE, KU, and Loksewa.",
              },
              {
                img: productTeacher,
                tag: "03 · Teacher",
                title: "Teacher AI Clone",
                body: "Learn from an AI that mirrors your favourite teacher's notes.",
              },
            ].map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={product.img}
                    alt={product.title}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {product.tag}
                  </p>
                  <h3 className="mt-2 text-2xl">{product.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              quote:
                "I finally understood derivatives. The AI explained it like my favourite tuition sir would.",
              who: "Aayusha, +2 Science, Kathmandu",
            },
            {
              quote:
                "Solved 6 years of IOE past papers in two weeks. I cleared the entrance on first try.",
              who: "Bibek, IOE Pulchowk",
            },
          ].map((testimonial) => (
            <figure key={testimonial.who} className="rounded-3xl border border-border bg-card p-8">
              <blockquote className="font-display text-2xl leading-snug md:text-3xl">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                {testimonial.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-balance text-4xl md:text-6xl">
              Ready to make studying feel light?
            </h2>
            <p className="mt-4 text-base text-background/70 md:text-lg">
              Join thousands of students across Nepal already learning with Nano Syllabus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-background px-5 py-3 text-sm text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                Book a 15-min demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-background/30 px-5 py-3 text-sm transition-colors hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                Talk to us
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        </div>
      </section>
    </>
  );
}
