"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Project Alpha",
    category: "Full Stack SaaS",
    description: "A comprehensive dashboard for managing cloud resources. Built with Next.js, Tailwind, and Prisma.",
    image: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    title: "Project Beta",
    category: "E-Commerce",
    description: "High-performance storefront with advanced filtering, cart management, and seamless checkout flow.",
    image: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
  },
  {
    title: "Axomira",
    category: "AI Chatbot",
    description: "An intelligent, context-aware conversational AI agent I developed to build automated, interactive experiences.",
    image: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    link: "https://axomira.vercel.app/"
  }
];

export function InteractiveCards() {
  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Selected Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-lg">
              A collection of my recent work focusing on modern web technologies, responsive design, and exceptional user experiences.
            </p>
          </div>
          <Link
            href="https://github.com/ninaweaniket6-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold hover:text-brand-accent transition-colors"
          >
            View GitHub <FaGithub className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              onClick={() => project.link ? window.open(project.link, '_blank') : null}
              className="group relative h-[400px] rounded-3xl bg-background border border-border p-6 flex flex-col overflow-hidden cursor-pointer"
              whileHover={{ 
                rotateX: 5, 
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Visual Cover */}
              <div 
                className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: project.image }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />

              <div className="relative z-20 flex-1" />
              
              <div className="relative z-20 flex flex-col gap-2 transform group-hover:-translate-y-4 transition-transform duration-500">
                <span className="text-sm font-bold tracking-wider text-brand-accent uppercase">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>
              
              <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-surface rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
