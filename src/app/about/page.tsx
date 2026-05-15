import Image from "next/image";
import aboutImg from "@/assets/about-students.png";
import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description: "We're making education in Nepal easy, accessible, and joyful.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Education in Nepal, made <em className="italic text-muted-foreground">easy</em> and
            accessible.
          </>
        }
        subtitle={
          <>
            Nano Syllabus exists because every student in Nepal, from Jhapa to Jumla, deserves a
            brilliant tutor in their pocket. We&apos;re building an AI ecosystem that meets students
            where they are.
          </>
        }
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="overflow-hidden rounded-3xl border border-border">
          <Image
            src={aboutImg}
            alt="Nepali students learning together"
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Mission</p>
            <p className="mt-3 font-display text-2xl">
              Make world-class study support free or affordable for every Nepali student.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Vision</p>
            <p className="mt-3 font-display text-2xl">
              A future where geography and income no longer decide who learns well.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How</p>
            <p className="mt-3 font-display text-2xl">
              By blending Nepal&apos;s curriculum with AI that&apos;s patient, accurate, and
              friendly.
            </p>
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
          ].map((stat) => (
            <div key={stat.l}>
              <p className="font-display text-5xl">{stat.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
