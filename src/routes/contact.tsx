import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nano Syllabus" },
      { name: "description", content: "Talk to the Nano Syllabus team. Book a demo or ask us anything." },
      { property: "og:title", content: "Contact Nano Syllabus" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 text-5xl md:text-7xl">Let's talk.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you're a student, parent, or teacher — we'd love to hear from you.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Book a demo</p>
              <p className="mt-3 font-display text-2xl">15 minutes. Zero pitch. Just answers.</p>
              <a
                href="https://calendly.com/nanosyllabus/demo"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background hover:opacity-90"
              >
                Pick a time on Calendly <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@nanosyllabus.com</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +977 9800000000</li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Kathmandu, Nepal</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-3 rounded-3xl border border-border bg-card p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" id="name" />
              <Field label="Email" id="email" type="email" />
            </div>
            <div className="mt-4">
              <Field label="Subject" id="subject" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">Message</label>
              <textarea id="message" rows={5} required className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background hover:opacity-90">
              Send message <ArrowRight className="h-4 w-4" />
            </button>
            {sent && <p className="mt-4 text-sm text-primary">Thanks — we'll get back within a day.</p>}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs text-muted-foreground">{label}</label>
      <input id={id} type={type} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
    </div>
  );
}
