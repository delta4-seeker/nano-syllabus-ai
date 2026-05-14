import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import aboutImg from "@/assets/about-students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nano Syllabus" },
      { name: "description", content: "We're making education in Nepal easy, accessible, and joyful." },
      { property: "og:title", content: "About Nano Syllabus" },
      { property: "og:description", content: "Our mission, story and team." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-3 max-w-4xl text-balance text-5xl md:text-7xl">
          Education in Nepal, made <em className="font-display italic text-muted-foreground">easy</em> and accessible.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Nano Syllabus exists because every student in Nepal — from Jhapa to Jumla —
          deserves a brilliant tutor in their pocket. We're building an AI ecosystem
          that meets students where they are.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="overflow-hidden rounded-3xl border border-border">
          <img src={aboutImg} alt="Nepali students" loading="lazy" className="h-auto w-full object-cover" />
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Mission</p>
            <p className="mt-3 font-display text-2xl">Make world-class study support free or affordable for every Nepali student.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Vision</p>
            <p className="mt-3 font-display text-2xl">A future where geography and income no longer decide who learns well.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How</p>
            <p className="mt-3 font-display text-2xl">By blending Nepal's curriculum with AI that's patient, accurate, and friendly.</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-10 md:grid-cols-4">
          {[
            { n: "10k+", l: "Active students" },
            { n: "75", l: "Districts reached" },
            { n: "120+", l: "Teacher contributors" },
            { n: "4.9★", l: "Average rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl">{s.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
