"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Aniket Ninawe
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-foreground/80 hover:text-brand-accent transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-foreground/10">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-border md:hidden flex flex-col p-6 shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-4 text-lg font-medium text-foreground/80 border-b border-border/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="w-full py-3 rounded-full border border-foreground/20 text-center font-medium">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="w-full py-3 rounded-full bg-brand-accent text-white text-center font-medium">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="flex justify-center mt-2">
                <UserButton />
              </div>
            </Show>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
