"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Aniket is an exceptional developer who brings both technical expertise and creative problem-solving to every project.",
    name: "Dr. Sharma",
    role: "Professor, G.H. Raisoni College",
  },
  {
    quote: "Working with Aniket on our web platform was a game-changer. The attention to detail and performance optimization is top-notch.",
    name: "Priya Desai",
    role: "Startup Founder",
  },
  {
    quote: "A rare combination of design sensibility and solid engineering. The websites built by Aniket always exceed expectations.",
    name: "Rahul Verma",
    role: "Lead Designer",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What People Say.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-12 -left-8 w-24 h-24 text-brand-accent/10 -z-10 rotate-180" />
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-8">
                  &quot;{TESTIMONIALS[currentIndex].quote}&quot;
                </p>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-lg">{TESTIMONIALS[currentIndex].name}</span>
                  <span className="text-foreground/60">{TESTIMONIALS[currentIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-4 rounded-full border border-border hover:bg-surface hover:text-brand-accent transition-all hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full border border-border hover:bg-surface hover:text-brand-accent transition-all hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
