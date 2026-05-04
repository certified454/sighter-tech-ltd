"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Brain, Smartphone, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Client Focused" },
  { value: "∞", label: "Lines Written" },
];

const techBadges = ["Next.js", "React Native", "Node.js", "MongoDB", "AI Agents", "Python"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-electric-blue/20 rounded-tl-lg" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-electric-blue/20 rounded-tr-lg" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-l-2 border-b-2 border-electric-blue/20 rounded-bl-lg" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-electric-blue/20 rounded-br-lg" />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20">
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse-slow" />
          <span className="font-mono text-xs text-electric-blue tracking-widest uppercase">Software Agency · Edo State, Nigeria</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-50 leading-[0.95] tracking-tight mb-6">
            We Build{" "}
            <span className="gradient-text text-glow">Software</span>
            <br />
            That{" "}
            <span className="relative inline-block">
              Performs.
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-electric-blue/0 via-electric-blue to-electric-blue/0" />
            </span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="font-body text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-Stack development, Mobile applications, and AI-driven backend systems. Sighter Tech turns complex problems into scalable, elegant solutions.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="#contact" className="btn-electric">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/projects" className="btn-ghost">View Our Work</Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-wrap justify-center gap-2 mb-16">
          {techBadges.map((badge, i) => (
            <motion.span key={badge} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.06 }} className="font-mono text-xs text-slate-500 px-3 py-1 rounded-full border border-charcoal-700 bg-obsidian-800/60">{badge}</motion.span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">{stat.value}</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Code2, title: "Full-Stack Web", desc: "Next.js, React, Node.js backends", color: "text-electric-blue" },
            { icon: Smartphone, title: "Mobile Apps", desc: "React Native cross-platform", color: "text-neon-cyan" },
            { icon: Brain, title: "AI Integration", desc: "AI agents & smart databases", color: "text-neon-purple" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-800/60 border border-charcoal-700/60">
              <div className={`p-2.5 rounded-lg bg-charcoal-800 ${color}`}><Icon className="w-5 h-5" /></div>
              <div className="text-left">
                <div className="font-display font-semibold text-sm text-slate-200">{title}</div>
                <div className="font-mono text-xs text-slate-500">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}