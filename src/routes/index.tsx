import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Bot, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-student.jpg";
import productStudy from "@/assets/product-study.jpg";
import productEntrance from "@/assets/product-entrance.jpg";
import productTeacher from "@/assets/product-teacher.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nano Syllabus — Your AI study companion for Nepal" },
      { name: "description", content: "An AI co-pilot built around Nepal's curriculum, syllabus, question banks, and teacher notes. Learn faster, prepare smarter." },
      { property: "og:title", content: "Nano Syllabus — AI study companion" },
      { property: "og:description", content: "Curriculum-aware AI for students across Nepal." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Built for Nepal's curriculum
            </div>
            <h1 className="mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
              Your pocket-sized<br />
              <span className="italic text-muted-foreground">study companion.</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base text-muted-foreground md:text-lg">
              Nano Syllabus is an AI co-pilot that understands your textbooks, syllabus,
              and question banks — so studying actually feels doable.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://calendly.com/nanosyllabus/demo"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90"
              >
                Start learning free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-muted"
              >
                Explore products
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
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
              <img src={heroImg} alt="Student learning with Nano Syllabus" width={1280} height={1280} className="h-auto w-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background p-4 shadow-lg md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Asking…</p>
                  <p className="text-sm">Explain Newton's 3rd law in Nepali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / trust strip */}
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

      {/* Features */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Why students choose us</p>
          <h2 className="mt-3 text-4xl md:text-5xl">A tutor that actually knows your syllabus.</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Built on NEB & SEE", body: "Trained on Nepal's official textbooks and chapter-wise notes — answers stay relevant to your exam." },
            { icon: GraduationCap, title: "Past papers, solved", body: "10 years of question banks with step-by-step explanations in English and Nepali." },
            { icon: Bot, title: "Always on, always patient", body: "Ask the same doubt 10 times. Your AI tutor never gets tired and never judges." },
            { icon: Sparkles, title: "Smart revision", body: "Personalised flashcards, summaries, and quizzes — built from what you actually struggle with." },
            { icon: CheckCircle2, title: "Teacher-reviewed", body: "Notes co-created with top teachers across Kathmandu, Pokhara and Biratnagar." },
            { icon: Star, title: "Free to start", body: "Begin with the free plan. Upgrade only when you're ready for entrance prep." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-background p-8 transition-colors hover:bg-muted/50">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section className="border-t border-border bg-muted/30">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">An ecosystem</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Three products. One mission.</h2>
            </div>
            <Link to="/products" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: productStudy, tag: "01 — Study", title: "Study Companion", body: "Your daily co-pilot for class 6–12. Ask, summarise, revise." },
              { img: productEntrance, tag: "02 — Entrance", title: "Entrance Preparation", body: "Targeted practice for IOE, CEE, KU and Loksewa." },
              { img: productTeacher, tag: "03 — Teacher", title: "Teacher AI Clone", body: "Learn from an AI that mirrors your favourite teacher's notes." },
            ].map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-2 text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {[
            { quote: "I finally understood derivatives. The AI explained it like my favourite tuition sir would.", who: "Aayusha, +2 Science, Kathmandu" },
            { quote: "Solved 6 years of IOE past papers in two weeks. I cleared the entrance on first try.", who: "Bibek, IOE Pulchowk" },
          ].map((t) => (
            <figure key={t.who} className="rounded-3xl border border-border bg-card p-8">
              <blockquote className="font-display text-2xl leading-snug md:text-3xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-balance text-4xl md:text-6xl">Ready to make studying feel light?</h2>
            <p className="mt-4 text-base text-background/70 md:text-lg">
              Join thousands of students across Nepal already learning with Nano Syllabus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/nanosyllabus/demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm text-foreground hover:opacity-90"
              >
                Book a 15-min demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-3 text-sm hover:bg-background/10">
                Talk to us
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        </div>
      </section>
    </Layout>
  );
}
