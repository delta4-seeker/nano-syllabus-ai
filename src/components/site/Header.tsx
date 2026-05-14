import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/features", label: "Features" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
            <span className="font-display text-base leading-none">n</span>
          </div>
          <span className="font-display text-xl tracking-tight">nano syllabus</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-bold underline underline-offset-8 decoration-2" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://calendly.com/nanosyllabus/demo"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-90 md:inline-flex"
        >
          Book a demo
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-px mx-auto flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground bg-muted font-bold underline underline-offset-4" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/nanosyllabus/demo"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-foreground px-4 py-2 text-center text-sm text-background"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
