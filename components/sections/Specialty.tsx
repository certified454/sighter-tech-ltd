"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Film, TrendingUp, Target, Cpu } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";

const specialties = [
  { icon: BarChart3, title: "Sports Analytics Engines", description: "We build data pipelines that ingest live sports feeds and transform them into actionable analytics. Win probabilities, player performance models, and league standings — all computed in real time.", tags: ["Live Data Ingestion", "Statistical Modeling", "Predictive Algorithms"], accent: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: Users, title: "Lineup Builders", description: "Interactive drag-and-drop lineup builders for fantasy sports and football platforms. We handle formation logic, player validation, budget constraints, and real-time save state.", tags: ["Drag & Drop UI", "Formation Logic", "Fantasy Scoring", "Real-time Sync"], accent: "text-neon-cyan", bg: "bg-neon-cyan/10" },
  { icon: Film, title: "Facebook Reels Algorithm Optimization", description: "We analyze content distribution patterns and implement technical strategies that align with the Facebook Reels distribution algorithm — maximizing organic reach and engagement velocity.", tags: ["Content Strategy", "Algorithm Alignment", "Engagement Analytics", "Reach Optimization"], accent: "text-neon-purple", bg: "bg-neon-purple/10" },
  { icon: TrendingUp, title: "Prediction & Scoring Systems", description: "Custom prediction engines for sports, betting, and gaming platforms. ML-powered models with configurable rulesets, real-time scoring updates, and leaderboard management.", tags: ["ML Models", "Real-time Scoring", "Leaderboards", "Configurable Rules"], accent: "text-neon-green", bg: "bg-neon-green/10" },
  { icon: Target, title: "Fan Engagement Platforms", description: "Gamified engagement systems for sports communities — prediction contests, trivia engines, reward mechanics, and social sharing flows that keep fans coming back.", tags: ["Gamification", "Rewards Engine", "Social Sharing", "Retention Mechanics"], accent: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: Cpu, title: "AI-Powered Backend Systems", description: "We integrate large language models and intelligent agents into your backend — enabling natural language data queries, automated content generation, and workflow automation.", tags: ["LLM Integration", "Semantic Search", "Auto-summarization", "Workflow Agents"], accent: "text-neon-purple", bg: "bg-neon-purple/10" },
];

export function Specialty() {
  return (
    <section id="specialty" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Our Edge" title="Where We " highlight="Specialize" description="Beyond general development — these are the domains where our expertise runs deep." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlowCard key={item.title} delay={i * 0.08}>
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5`}><Icon className={`w-6 h-6 ${item.accent}`} /></div>
                <h3 className="font-display font-bold text-lg text-slate-100 mb-3">{item.title}</h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (<span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-charcoal-800 border border-charcoal-700 text-slate-500">{tag}</span>))}
                </div>
              </GlowCard>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 relative overflow-hidden rounded-2xl border border-electric-blue/20 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5 p-8 md:p-12 text-center">
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
          <p className="font-mono text-xs text-electric-blue uppercase tracking-widest mb-4">Industry Focus</p>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">Sports Tech is Our Sweet Spot</h3>
          <p className="font-body text-slate-400 max-w-xl mx-auto leading-relaxed">From Nigeria&apos;s football culture to global fantasy platforms — we understand sports at a technical and cultural level that generic agencies simply don&apos;t.</p>
        </motion.div>
      </div>
    </section>
  );
}