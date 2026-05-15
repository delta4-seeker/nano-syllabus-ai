import type { Metadata } from "next";

export const siteConfig = {
  name: "Nano Syllabus",
  shortName: "nano syllabus",
  description:
    "An AI co-pilot built around Nepal's curriculum, syllabus, question banks, and teacher notes.",
  url: "https://nanosyllabus.com",
  demoUrl: "https://calendly.com/nanosyllabus/demo",
  email: "hello@nanosyllabus.com",
  phone: "+977 9800000000",
  location: "Kathmandu, Nepal",
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
