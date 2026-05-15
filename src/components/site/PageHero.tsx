import Image from "next/image";
import bg from "@/assets/page-hero-bg.jpg";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-px relative mx-auto max-w-7xl py-24 md:py-32">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-balance text-5xl md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
