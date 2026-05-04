"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: "blue" | "purple" | "green";
  hover?: boolean;
}

const glowColors = {
  blue: "hover:border-electric-blue/30 hover:shadow-[0_0_60px_rgba(0,168,255,0.12)]",
  purple: "hover:border-neon-purple/30 hover:shadow-[0_0_60px_rgba(123,94,167,0.12)]",
  green: "hover:border-neon-green/30 hover:shadow-[0_0_60px_rgba(0,255,136,0.12)]",
};

export function GlowCard({ children, className, delay = 0, glowColor = "blue", hover = true }: GlowCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} whileHover={hover ? { y: -4 } : undefined} className={cn("glow-card p-6 md:p-8 transition-all duration-300", hover && glowColors[glowColor], className)}>
      {children}
    </motion.div>
  );
}