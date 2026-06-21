import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Talk to the Nano Syllabus team. Book a demo or ask us anything.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        subtitle="Whether you're a student, parent, or teacher, we'd love to hear from you."
      />

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-8 md:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Book a demo
              </p>
              <p className="mt-3 font-display text-2xl">15 minutes. Zero pitch. Just answers.</p>
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Pick a time on Calendly <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href={siteConfig.phoneHref}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
