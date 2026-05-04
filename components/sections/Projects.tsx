"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, LayoutDashboard, Truck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    id: "kismet-ksm", title: "Kismet KSM", category: "Sports & Social Platform", icon: Trophy, accentColor: "#00a8ff",
    description: "A feature-rich sports-social platform with live lineup builders, match prediction engines, and community feeds. Built to handle real-time sports data at scale.",
    stack: ["React Native", "Next.js", "Node.js", "MongoDB", "WebSockets", "Redis"],
    highlights: ["Live lineup builder with drag-and-drop", "Real-time match scoring feed", "Community prediction leagues", "Push notification system"],
    status: "Live",
  },
  {
    id: "tadexpress", title: "TadExpress", category: "Logistics Backend", icon: Truck, accentColor: "#00ff88",
    description: "A high-throughput logistics backend powering order tracking, driver dispatch, route optimization, and automated delivery notifications.",
    stack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Bull Queue", "Twilio"],
    highlights: ["Real-time GPS driver tracking", "Intelligent route optimization", "Automated SMS/email notifications", "Bulk order processing engine"],
    status: "Live",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Our Work" title="Projects That " highlight="Ship & Scale" description="Real-world applications built by our team — each one solving meaningful problems for real users." />
        <div className="space-y-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative glow-card p-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />
                <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-xl flex-shrink-0" style={{ background: `${project.accentColor}15` }}>
                        <Icon className="w-6 h-6" style={{ color: project.accentColor }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-bold text-2xl text-slate-50">{project.title}</h3>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border" style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}10` }}>{project.status}</span>
                        </div>
                        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: `${project.accentColor}90` }}>{project.category}</p>
                      </div>
                    </div>
                    <p className="font-body text-slate-400 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg border transition-colors duration-200" style={{ borderColor: `${project.accentColor}30`, color: project.accentColor }}>
                        <ExternalLink className="w-3.5 h-3.5" />View Live
                      </button>
                      <button className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg border border-charcoal-600 text-slate-500 hover:border-charcoal-500 hover:text-slate-300 transition-colors duration-200">
                        <Github className="w-3.5 h-3.5" />Case Study
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                            <span className="font-body text-sm text-slate-400">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] text-slate-600 uppercase tracking-widest mb-3">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-charcoal-800 border border-charcoal-700 text-slate-500">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}