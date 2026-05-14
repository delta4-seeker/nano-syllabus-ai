import { Link } from "@tanstack/react-router";

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
              <span className="font-display text-xl">nano syllabus</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              An AI co-pilot for self-study, built around Nepal's curriculum, syllabus,
              question banks, and teacher notes.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/blogs" className="hover:text-foreground">Blogs</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">Get started</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li>
                <a href="https://calendly.com/nanosyllabus/demo" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  Book a demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nano Syllabus. Made for students of Nepal.</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
