import Image from "next/image";
import aboutImg from "@/assets/about-students.png";
import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Nano Syllabus makes academic learning fast, so students reclaim time for their careers and deeper mastery. Now piloting with universities in Nepal.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Clear academics fast, so you can{" "}
            <em className="italic text-muted-foreground">grow</em>.
          </>
        }
        subtitle={
          <>
            Students lose the time they need for their careers to coursework that never ends. Nano
            Syllabus flips that: an AI study companion that learns your exact syllabus and exam
            pattern, so you clear academics faster and spend your time building your career and
            mastering ideas more deeply. We&apos;re starting with a pilot across universities in
            Nepal, and building for students everywhere.
          </>
        }
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="overflow-hidden rounded-3xl border border-border">
          <Image
            src={aboutImg}
            alt="Students learning with Nano Syllabus"
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
              Make academic learning so fast that every student gets time back for their career and
              deeper understanding.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Vision</p>
            <p className="mt-3 font-display text-2xl">
              A world where staying on top of your course never costs you the time to build your
              future.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How</p>
            <p className="mt-3 font-display text-2xl">
              By binding AI to your exact syllabus, past papers, and exam pattern, so it is accurate,
              patient, and always on-course.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-10 md:grid-cols-4">
          {[
            { n: "Pilot", l: "Live with Nepal universities" },
            { n: "Any", l: "Syllabus, any university" },
            { n: "On-course", l: "Answers stay on your exam" },
            { n: "Built", l: "For students everywhere" },
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
