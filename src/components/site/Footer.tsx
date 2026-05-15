import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
                <span className="font-display text-base leading-none">n</span>
              </div>
              <span className="font-display text-xl">{siteConfig.shortName}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/products"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">Get started</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/contact"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Book a demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Made for students of Nepal.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
