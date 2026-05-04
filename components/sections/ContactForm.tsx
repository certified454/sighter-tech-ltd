"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { isValidEmail } from "@/lib/utils";

interface FormData {
  name: string; email: string; phone: string; company: string;
  subject: string; message: string; serviceInterest: string; budget: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", company: "", subject: "", message: "", serviceInterest: "other", budget: "discuss" };

const serviceOptions = [
  { value: "web-app", label: "Web Application" }, { value: "mobile-app", label: "Mobile App" },
  { value: "ai-integration", label: "AI Integration" }, { value: "sports-analytics", label: "Sports Analytics" },
  { value: "logistics", label: "Logistics System" }, { value: "other", label: "Other / Not Sure" },
];

const budgetOptions = [
  { value: "under-500k", label: "Under ₦500k" }, { value: "500k-2m", label: "₦500k – ₦2M" },
  { value: "2m-10m", label: "₦2M – ₦10M" }, { value: "10m+", label: "₦10M+" }, { value: "discuss", label: "Let's Discuss" },
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(form.email)) newErrors.email = "Enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message too short (min 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm(initialForm); }
      else { setStatus("error"); setErrorMessage(data.error || "Something went wrong."); }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach us on WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Get In Touch" title="Start Your " highlight="Project" description="Ready to build something remarkable? Tell us what you need and we'll respond within 24 hours." />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 space-y-6">
            <div className="glow-card p-6">
              <h3 className="font-display font-bold text-lg text-slate-100 mb-5">Contact Details</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Edo State, Nigeria" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+234 916 330 1828", href: "https://wa.me/2349163301828" },
                  { icon: Mail, label: "Email", value: "hello@sightertech.com", href: "mailto:hello@sightertech.com" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-charcoal-800 mt-0.5"><Icon className="w-4 h-4 text-electric-blue" /></div>
                    <div>
                      <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-slate-300 hover:text-electric-blue transition-colors">{value}</a> : <p className="font-body text-sm text-slate-300">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glow-card p-6">
              <h3 className="font-display font-bold text-base text-slate-100 mb-3">Response Time</h3>
              <div className="space-y-2">
                {[{ label: "WhatsApp", time: "Within hours" }, { label: "Email inquiry", time: "Within 24 hours" }, { label: "Project quote", time: "Within 48 hours" }].map(({ label, time }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-charcoal-700/50 last:border-0">
                    <span className="font-mono text-xs text-slate-500">{label}</span>
                    <span className="font-mono text-xs text-electric-blue">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <div className="glow-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-4"><CheckCircle2 className="w-8 h-8 text-neon-green" /></div>
                    <h3 className="font-display font-bold text-2xl text-slate-50 mb-2">Message Received!</h3>
                    <p className="font-body text-slate-400 mb-6 max-w-sm">We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="btn-ghost text-sm">Send Another Message</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label" htmlFor="name">Full Name <span className="text-electric-blue">*</span></label>
                        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={`form-input ${errors.name ? "border-red-500/60" : ""}`} />
                        {errors.name && <p className="mt-1 font-mono text-[10px] text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="form-label" htmlFor="email">Email Address <span className="text-electric-blue">*</span></label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={`form-input ${errors.email ? "border-red-500/60" : ""}`} />
                        {errors.email && <p className="mt-1 font-mono text-[10px] text-red-400">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label" htmlFor="phone">Phone (optional)</label>
                        <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="company">Company (optional)</label>
                        <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className="form-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label" htmlFor="serviceInterest">Service Interest</label>
                        <select id="serviceInterest" name="serviceInterest" value={form.serviceInterest} onChange={handleChange} className="form-input">
                          {serviceOptions.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="form-label" htmlFor="budget">Estimated Budget</label>
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="form-input">
                          {budgetOptions.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="subject">Subject <span className="text-electric-blue">*</span></label>
                      <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Brief project title or question" className={`form-input ${errors.subject ? "border-red-500/60" : ""}`} />
                      {errors.subject && <p className="mt-1 font-mono text-[10px] text-red-400">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="message">Message <span className="text-electric-blue">*</span></label>
                      <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Describe your project, goals, and any specific requirements..." className={`form-input resize-none ${errors.message ? "border-red-500/60" : ""}`} />
                      <div className="flex justify-between mt-1">
                        {errors.message ? <p className="font-mono text-[10px] text-red-400">{errors.message}</p> : <span />}
                        <span className="font-mono text-[10px] text-slate-600">{form.message.length}/2000</span>
                      </div>
                    </div>
                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <p className="font-mono text-xs text-red-400">{errorMessage}</p>
                      </div>
                    )}
                    <button type="submit" disabled={status === "loading"} className="btn-electric w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}