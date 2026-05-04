import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Sighter Tech LTD offers Web App Development, Mobile Apps, AI Integration, and Backend Architecture.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="py-20 px-4 text-center border-b border-charcoal-700/50">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-electric-blue uppercase tracking-[0.3em] mb-4">What We Offer</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-50 leading-tight mb-5">Our Services</h1>
          <p className="font-body text-lg text-slate-400">Every service delivered with production-grade quality and deep understanding of your business goals.</p>
        </div>
      </div>
      <Services />
      <ContactForm />
    </div>
  );
}