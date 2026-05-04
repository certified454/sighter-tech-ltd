"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ label, title, highlight, description, align = "center", className }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      {label && (
        <div className={cn("section-label", align === "center" && "flex items-center justify-center gap-3")}>
          {align === "center" && <span className="w-8 h-px bg-electric-blue/50" />}
          {label}
          {align === "center" && <span className="w-8 h-px bg-electric-blue/50" />}
        </div>
      )}
      <h2 className="section-heading">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {description && <p className={cn("mt-4 font-body text-slate-400 text-lg leading-relaxed", align === "center" && "max-w-2xl mx-auto")}>{description}</p>}
    </motion.div>
  );
}