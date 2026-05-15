"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete: string;
  spellCheck?: boolean;
};

function Field({ id, label, type = "text", autoComplete, spellCheck = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs text-muted-foreground">
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-8"
      aria-describedby={sent ? "contact-success" : undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" />
        <Field id="email" label="Email" type="email" autoComplete="email" />
      </div>
      <div className="mt-4">
        <Field id="subject" label="Subject" autoComplete="off" spellCheck />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          autoComplete="off"
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Tell us what you are studying or what you want to explore.
        </p>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Send message <ArrowRight className="h-4 w-4" />
      </button>
      {sent && (
        <p id="contact-success" className="mt-4 text-sm text-primary">
          Thanks. We&apos;ll get back within one business day.
        </p>
      )}
    </form>
  );
}
