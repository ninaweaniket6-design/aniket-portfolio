import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border py-12 md:py-20 mt-32" id="contact">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-4 max-w-md">
          <h2 className="text-3xl font-bold tracking-tight">
            Let&apos;s connect and build something great.
          </h2>
          <p className="text-foreground/70">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col space-y-6 md:items-end">
          <a
            href="mailto:ninaweaniket6@gmail.com"
            className="group flex items-center gap-2 text-lg font-medium hover:text-brand-accent transition-colors"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ninaweaniket6@gmail.com
          </a>

          <div className="flex gap-4">
            <Link href="#" className="p-3 rounded-full bg-background border border-border hover:border-brand-accent hover:text-brand-accent transition-all hover:-translate-y-1">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="p-3 rounded-full bg-background border border-border hover:border-brand-accent hover:text-brand-accent transition-all hover:-translate-y-1">
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="p-3 rounded-full bg-background border border-border hover:border-brand-accent hover:text-brand-accent transition-all hover:-translate-y-1">
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} Aniket Ninawe. All rights reserved.
      </div>
    </footer>
  );
}
