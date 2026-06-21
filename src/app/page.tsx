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
    "Nano Syllabus is an AI study companion that learns your exact syllabus, past papers, and exam pattern, for any university. Clear coursework faster and spend your time building your career and mastering ideas more deeply.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nano Syllabus",
  url: "https://nanosyllabus.com",
  logo: "https://nanosyllabus.com/nanosyllabus-logo.png",
  description:
    "An AI study companion that learns your exact syllabus, past papers, and exam pattern. Now piloting with universities in Nepal.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@nanosyllabus.com",
    telephone: "+1-307-443-6488",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St, Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
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
        <div className="glow glow-blue floaty-slow absolute -left-32 -top-24 h-[28rem] w-[28rem]" />
        <div className="glow glow-sky floaty absolute right-[-7rem] top-44 h-[22rem] w-[22rem]" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {siteConfig.pilotNote}
            </div>
            <h1 className="mt-6 text-balance text-5xl leading-[1.05] md:text-7xl">
              Master your syllabus.
              <br />
              <span className="italic text-muted-foreground">Build your future.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              Nano Syllabus is an AI study companion that learns your exact syllabus, past papers,
              and exam pattern, for any university. Clear your academics faster, so you can spend
              your time where it counts: building your career and mastering ideas more deeply.
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
                Loved by serious students
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <span className="hidden sm:inline">Any university · any syllabus</span>
            </div>
          </div>
          <div className="relative">
            <div className="glow glow-indigo floaty absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <Image
              src={heroImg}
              alt="Nano Syllabus AI tutor"
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              className="floaty-slow h-auto w-full scale-[1.1] drop-shadow-[0_45px_70px_rgba(15,40,90,0.20)] md:scale-[1.18]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Curriculum-aware</span>
          <span>Any syllabus</span>
          <span>Past papers, solved</span>
          <span>Exam-pattern aware</span>
          <span>Teacher-reviewed</span>
          <span>Pilot · Nepal universities</span>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="reveal-up max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Why students choose us
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">A tutor that actually knows your syllabus.</h2>
        </div>
        <div className="reveal-up mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Knows your exact syllabus",
              body: "Learns your course, textbooks, and chapter-wise notes, so every answer stays inside what your exam actually tests.",
            },
            {
              icon: GraduationCap,
              title: "Past papers, solved",
              body: "Years of question banks with step-by-step explanations, in the language you study in.",
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
              body: "Notes and answers co-created with experienced educators, so you can trust what you study.",
            },
            {
              icon: Star,
              title: "Free to start",
              body: "Begin with the free plan. Upgrade only when you're ready for exam and entrance prep.",
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
          <div className="reveal-up flex items-end justify-between gap-6">
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
          <div className="reveal-up mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: productStudy,
                tag: "01 · Study",
                title: "Study Companion",
                body: "Your daily co-pilot from school to university. Ask, summarise, revise.",
              },
              {
                img: productEntrance,
                tag: "02 · Entrance",
                title: "Entrance Preparation",
                body: "Targeted practice for your entrance and licensing exams, on your exam pattern.",
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
        <div className="reveal-up grid gap-10 md:grid-cols-2">
          {[
            {
              quote:
                "I used to lose whole evenings just keeping up with coursework. Now I clear it in an hour and spend the rest building real projects. That's the point: academics shouldn't cost me the time I need for my career.",
              who: "Diwash Joshi, CSIT",
            },
            {
              quote:
                "It answers straight from my TU syllabus, not some random foreign textbook. I finally study the exact thing I'm tested on, understand it deeper, and get my time back.",
              who: "Bikesh Maharjan, Electronics Engineering, TU",
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
          <div className="reveal-up relative z-10 max-w-2xl">
            <h2 className="text-balance text-4xl md:text-6xl">
              Spend less time on coursework. More on your future.
            </h2>
            <p className="mt-4 text-base text-background/70 md:text-lg">
              Clear your academics faster with a tutor that knows your syllabus. Currently piloting
              with universities in Nepal, and rolling out to more.
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
