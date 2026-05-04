"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Database, Layers, Workflow } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe, title: "Web Application Development", tag: "Next.js / React",
    description: "We architect and build performant, SEO-optimized web applications using Next.js 14 App Router. From admin dashboards to customer-facing platforms — built to scale.",
    features: ["Server Components & Streaming", "API Route Handlers", "Authentication & RBAC", "Real-time with WebSockets"],
    glowColor: "blue" as const, accent: "text-electric-blue",
  },
  {
    icon: Smartphone, title: "Mobile App Development", tag: "React Native",
    description: "Cross-platform mobile applications that feel native. We build for iOS and Android simultaneously — one codebase, zero compromise on performance or UX.",
    features: ["Expo & bare React Native", "Offline-first architecture", "Push notifications", "App Store deployment"],
    glowColor: "purple" as const, accent: "text-neon-purple",
  },
  {
    icon: Brain, title: "AI Agent Integration", tag: "LLM / Automation",
    description: "We wire intelligent AI agents into your backend systems. Automate workflows, build chatbots with database awareness, and create AI-powered data pipelines.",
    features: ["LLM API integration", "RAG (Retrieval Augmented Generation)", "Autonomous agent workflows", "Database-aware AI queries"],
    glowColor: "green" as const, accent: "text-neon-green",
  },
  {
    icon: Database, title: "Backend Systems & APIs", tag: "Node.js / Express / MongoDB",
    description: "Robust REST and GraphQL APIs. We design and implement database schemas, authentication systems, and microservice architectures built for production workloads.",
    features: ["REST & GraphQL APIs", "MongoDB / PostgreSQL", "JWT & OAuth2 auth", "Redis caching layers"],
    glowColor: "blue" as const, accent: "text-electric-blue",
  },
  {
    icon: Layers, title: "Admin Dashboards", tag: "Internal Tools",
    description: "Turn your raw data into actionable insight. We build custom admin panels and internal tools that give your team full control over your platform.",
    features: ["Real-time analytics", "Role-based access control", "Data visualization", "Audit logs & reporting"],
    glowColor: "purple" as const, accent: "text-neon-purple",
  },
  {
    icon: Workflow, title: "System Architecture & Consulting", tag: "Strategy",
    description: "From zero to architecture. We help startups and established businesses plan scalable technical foundations before writing a single line of code.",
    features: ["Technical roadmapping", "Stack selection", "Infrastructure design", "Code review & audits"],
    glowColor: "green" as const, accent: "text-neon-green",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="What We Do" title="Services Built for " highlight="Real Impact" description="We don't do generic. Every engagement is tailored to your problem, your users, and your growth timeline." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <GlowCard key={service.title} delay={i * 0.08} glowColor={service.glowColor}>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-charcoal-800 ${service.accent}`}><Icon className="w-6 h-6" /></div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{service.tag}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100 mb-3">{service.title}</h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${service.accent.replace("text-", "bg-")}`} />
                      <span className="font-mono text-xs text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16 text-center">
          <p className="font-body text-slate-400 mb-6">Not sure which service fits your needs?</p>
          <a href="#contact" className="btn-ghost">Let&apos;s Talk →</a>
        </motion.div>
      </div>
    </section>
  );
}