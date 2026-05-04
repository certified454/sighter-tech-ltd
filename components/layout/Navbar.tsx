"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/specialty", label: "Specialty" },
  { href: "#contact", label: "Contact", isHash: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "glass border-b border-charcoal-700/50 shadow-glow-sm" : "bg-transparent")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-electric-blue/20 rounded-lg group-hover:bg-electric-blue/30 transition-colors" />
              <Zap className="w-5 h-5 text-electric-blue relative z-10" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-slate-50 tracking-tight">SIGHTER</span>
              <span className="font-mono text-[10px] text-electric-blue tracking-[0.2em] uppercase">Tech LTD</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.isHash && pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={cn("relative px-4 py-2 font-display font-medium text-sm uppercase tracking-wider transition-colors duration-200", isActive ? "text-electric-blue" : "text-slate-400 hover:text-slate-100")}>
                  {isActive && <motion.span layoutId="nav-indicator" className="absolute inset-0 bg-electric-blue/10 rounded-lg border border-electric-blue/20" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="hidden md:inline-flex btn-electric text-xs px-5 py-2.5">Start Project</Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-charcoal-800 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden glass border-t border-charcoal-700/50">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={link.href} className={cn("block px-4 py-3 rounded-lg font-display font-medium text-sm uppercase tracking-wider transition-colors", pathname === link.href && !link.isHash ? "text-electric-blue bg-electric-blue/10" : "text-slate-400 hover:text-slate-100 hover:bg-charcoal-800")}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">
                <Link href="#contact" className="btn-electric w-full justify-center text-xs">Start a Project</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}