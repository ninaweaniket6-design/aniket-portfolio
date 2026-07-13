"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) => Math.round(current).toString());

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const STATS = [
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Hours Coded", value: 1500, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "k" },
  { label: "Cups of Coffee", value: 890, suffix: "" },
];

export function StatsCounter() {
  return (
    <section className="py-24 bg-brand-primary text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-brand-accent">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-lg font-medium text-background/80 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
