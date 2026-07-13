"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[400px] bg-brand-accent blur-[150px] rounded-[100%]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl mx-auto leading-[1.1]">
          Ready to build the next big thing?
        </h2>
        
        <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
          Let&apos;s collaborate to turn your vision into a scalable, high-performance reality.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {/* Animated gradient pulse inside button */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-brand-accent via-purple-500 to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          />
          <span className="relative z-10 group-hover:text-white transition-colors">Start a Project</span>
          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 group-hover:text-white transition-all" />
        </button>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden z-10 text-left"
            >
              <div className="p-6 md:p-8">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-foreground/50 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-2xl font-bold mb-2">Let&apos;s build together</h3>
                <p className="text-foreground/60 mb-6">Tell me a bit about your idea and how to reach you.</p>

                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="py-12 text-center text-brand-accent"
                  >
                    <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-foreground/70">I&apos;ll be in touch with you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Web3Forms required hidden input */}
                    <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Project Idea</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-shadow resize-none"
                        placeholder="I want to build a platform that..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again or check your configuration.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-lg bg-foreground text-background font-bold text-base hover:bg-foreground/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
