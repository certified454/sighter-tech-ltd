"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "chars";
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  type = "words",
  tag: Tag = "p",
}: AnimatedTextProps) {
  const items = type === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "words" ? 0.07 : 0.025,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("overflow-hidden", className)}
    >
      <Tag className="flex flex-wrap">
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className={type === "words" ? "mr-[0.25em]" : ""}
            style={{ display: "inline-block" }}
          >
            {item}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}