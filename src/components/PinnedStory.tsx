"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function PinnedStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Ensure we are running on client and elements exist
    if (!containerRef.current || !leftPanelRef.current || !rightPanelRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Native CSS sticky handles the pinning perfectly without overlapping sections

      // Animate opacity of right panel items as they scroll into view
      const items = gsap.utils.toArray<HTMLElement>(".story-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0.2, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: item,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-background pb-32">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Pinned Panel */}
        <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-center sticky top-0 pt-20 lg:pt-0">
          <div ref={leftPanelRef}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              The Journey So Far.
            </h2>
            <p className="text-xl text-foreground/70 max-w-lg mb-8">
              From writing my first line of code to building full-stack applications, the path has been fueled by curiosity and a drive to create impactful software.
            </p>
            <div className="flex gap-4">
              <div className="h-2 w-12 bg-brand-accent rounded-full" />
              <div className="h-2 w-4 bg-brand-accent/30 rounded-full" />
              <div className="h-2 w-4 bg-brand-accent/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Scrolling Content */}
        <div ref={rightPanelRef} className="w-full lg:w-1/2 flex flex-col gap-32 lg:py-[50vh]">
          {[
            {
              year: "2024",
              title: "Discovering Web Development",
              desc: "Started my PBCA journey and immediately fell in love with crafting user interfaces and understanding how the web works under the hood.",
              color: "bg-blue-500/20"
            },
            {
              year: "2025",
              title: "Mastering React & Next.js",
              desc: "Transitioned from simple HTML/CSS to powerful modern frameworks. Built my first dynamic web applications focusing on performance and UX.",
              color: "bg-purple-500/20"
            },
            {
              year: "2026",
              title: "AI Systems Engineering",
              desc: "Architecting the complete lifecycle of intelligent systems—from robust data pipelines and seamless API integration to deploying highly capable LLMs.",
              color: "bg-green-500/20"
            }
          ].map((item, idx) => (
            <div key={idx} className="story-item flex flex-col gap-6">
              <div className="inline-block px-4 py-2 rounded-full border border-border w-fit text-sm font-bold bg-surface">
                {item.year}
              </div>
              <div className={`p-8 rounded-3xl ${item.color} border border-border backdrop-blur-sm`}>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
