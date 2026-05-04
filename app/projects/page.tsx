import { Projects } from "@/components/sections/Projects";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of Sighter Tech LTD — Kismet KSM, NCplay, and TadExpress.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="py-20 px-4 text-center border-b border-charcoal-700/50">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-electric-blue uppercase tracking-[0.3em] mb-4">Case Studies</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-50 leading-tight mb-5">Our Projects</h1>
          <p className="font-body text-lg text-slate-400">Real applications. Real users. Real results.</p>
        </div>
      </div>
      <Projects />
      <ContactForm />
    </div>
  );
}