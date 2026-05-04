"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Hello! I'm interested in your software development services." }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), 2000);
    const t2 = setTimeout(() => { if (!dismissed) setShowTooltip(true); }, 5000);
    const t3 = setTimeout(() => setShowTooltip(false), 10000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dismissed]);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          <AnimatePresence>
            {showTooltip && !dismissed && (
              <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="relative bg-obsidian-800 border border-charcoal-600 rounded-xl p-3 max-w-[200px] shadow-glow-sm">
                <button onClick={() => { setShowTooltip(false); setDismissed(true); }} className="absolute -top-2 -right-2 w-5 h-5 bg-charcoal-700 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-100"><X className="w-3 h-3" /></button>
                <p className="font-body text-xs text-slate-300 leading-relaxed">💬 Chat with us on WhatsApp — we&apos;re usually online!</p>
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-obsidian-800 border-r border-b border-charcoal-600 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)", boxShadow: "0 0 30px rgba(37,211,102,0.4), 0 4px 20px rgba(0,0,0,0.4)" }} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-400" />
            <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" strokeWidth={1} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}