"use client";

import { cn } from "@/lib/utils";

const LOGOS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "MongoDB",
];

export function LogoMarquee() {
  return (
    <section className="py-20 border-y border-border bg-surface-hover/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
          Technologies I Work With
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <span
              key={idx}
              className="mx-8 text-4xl md:text-6xl font-bold text-foreground/10 hover:text-foreground/30 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <span
              key={idx}
              className="mx-8 text-4xl md:text-6xl font-bold text-foreground/10 hover:text-foreground/30 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
        
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
