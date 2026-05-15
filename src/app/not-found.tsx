import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center py-24">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Page not found.</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you&apos;re looking for has moved or never existed in the first place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center rounded-full bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
