"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Network, Bot } from "lucide-react";

const FEATURES = [
  {
    title: "Intelligent Data Pipelines",
    description: "I build intelligent data pipelines and integrate LLMs to turn raw data into scalable AI systems.",
    icon: Database,
  },
  {
    title: "LLMOps & Semantics",
    description: "Data Scientist specializing in LLMOps, Semantic Data Pipelines, and API integration.",
    icon: Network,
  },
  {
    title: "AI-Driven Applications",
    description: "I connect Large Language Models to real-world data to build automated, AI-driven applications.",
    icon: Bot,
  }
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Building with Purpose and Precision.
          </h2>
          <p className="text-lg text-foreground/70">
            Passionate tech student specializing in computer applications. Focused on continuous learning, building scalable projects, and solving real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="p-8 rounded-3xl bg-surface border border-border hover:border-brand-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
