"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "./ui/TextReveal";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Network } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: ["0%", "5%", "0%"],
            y: ["0%", "10%", "0%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] bg-brand-accent/20 dark:bg-brand-accent/40 pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: ["0%", "-5%", "0%"],
            y: ["0%", "-10%", "0%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] bg-purple-500/20 dark:bg-purple-600/30 pointer-events-none"
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          <TextReveal
            text="Bridging the Gap Between Data and AI."
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]"
          />

          <div className="flex flex-col gap-4 mb-8 max-w-3xl text-center mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-foreground/90"
            >
              Hi, I&apos;m <span className="text-foreground font-bold">Aniket Ninawe</span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-brand-primary font-semibold"
            >
              Data Scientist | AI & LLM Developer | Pipeline Architect
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
            >
              Connecting Large Language Models to real-world data to build automated, intelligent systems.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-background rounded-full font-medium overflow-hidden shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface border border-border rounded-full font-medium hover:bg-surface-hover hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements (Optional 3D effect) */}
      <motion.div
        className="absolute top-[15%] left-[10%] hidden lg:flex items-center justify-center w-40 h-40 bg-surface/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-2 group"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-primary blur-2xl rounded-full" 
          />
          <BrainCircuit className="w-16 h-16 text-brand-primary relative z-10 drop-shadow-[0_0_15px_rgba(var(--brand-primary),0.8)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[10%] hidden lg:flex items-center justify-center w-48 h-32 bg-surface/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-2 group"
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute inset-0 bg-purple-500 blur-2xl rounded-full" 
          />
          <Network className="w-12 h-12 text-purple-400 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}
