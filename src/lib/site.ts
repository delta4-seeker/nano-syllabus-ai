import type { Metadata } from "next";

export const siteConfig = {
  name: "Nano Syllabus",
  shortName: "nano syllabus",
  tagline: "The AI study companion that actually knows your syllabus.",
  description:
    "Nano Syllabus is an AI study companion that learns your exact curriculum, past papers, and exam pattern, so you clear coursework faster and spend your time building your career and mastering ideas more deeply. Now piloting with universities worldwide.",
  pilotNote: "Now piloting with universities worldwide.",
  url: "https://nanosyllabus.com",
  demoUrl: "https://calendly.com/nanosyllabus/demo",
  email: "hello@nanosyllabus.com",
  // Operated by TeraBitt LLC (Wyoming, United States) — legal entity + address only
  legalEntity: "TeraBitt LLC",
  phone: "+1 (307) 443-6488",
  phoneHref: "tel:+13074436488",
  location: "30 N Gould St, Ste R, Sheridan, WY 82801, USA",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "" }: MetadataOptions): Metadata {
  const pageTitle = title === siteConfig.name ? title : `${title} · ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: pageTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
