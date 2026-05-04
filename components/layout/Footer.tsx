import Link from "next/link";
import { Zap, MapPin, Phone, Mail, Github, Twitter, Linkedin } from "lucide-react";

const services = [
  { label: "Web Applications", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI Integration", href: "/services#ai" },
  { label: "Sports Analytics", href: "/specialty#sports" },
  { label: "Logistics Systems", href: "/specialty#logistics" },
];

const company = [
  { label: "Projects", href: "/projects" },
  { label: "Specialty", href: "/specialty" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-charcoal-700/50 bg-obsidian-900/50">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 w-fit">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-electric-blue/20 rounded-lg" />
                <Zap className="w-5 h-5 text-electric-blue relative z-10" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-slate-50 tracking-tight">SIGHTER</span>
                <span className="font-mono text-[10px] text-electric-blue tracking-[0.2em] uppercase">Tech LTD</span>
              </div>
            </Link>
            <p className="font-body text-slate-400 text-sm leading-relaxed max-w-sm mb-6">Premium software development agency from Edo State, Nigeria. Building Full-Stack applications, Mobile experiences, and AI-driven systems that scale.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500"><MapPin className="w-4 h-4 text-electric-blue flex-shrink-0" /><span>Edo State, Nigeria</span></div>
              <div className="flex items-center gap-2 text-sm text-slate-500"><Phone className="w-4 h-4 text-electric-blue flex-shrink-0" /><a href="tel:+2349163301828" className="hover:text-electric-blue transition-colors">+234 916 330 1828</a></div>
              <div className="flex items-center gap-2 text-sm text-slate-500"><Mail className="w-4 h-4 text-electric-blue flex-shrink-0" /><a href="mailto:hello@sightertech.com" className="hover:text-electric-blue transition-colors">hello@sightertech.com</a></div>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs text-electric-blue uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3">{services.map((s) => (<li key={s.href}><Link href={s.href} className="font-body text-sm text-slate-400 hover:text-slate-100 transition-colors">{s.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="font-mono text-xs text-electric-blue uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3">{company.map((c) => (<li key={c.href}><Link href={c.href} className="font-body text-sm text-slate-400 hover:text-slate-100 transition-colors">{c.label}</Link></li>))}</ul>
            <div className="mt-8">
              <h3 className="font-mono text-xs text-electric-blue uppercase tracking-widest mb-4">Follow</h3>
              <div className="flex items-center gap-3">
                {[{ icon: Github, href: "https://github.com/sightertech", label: "GitHub" }, { icon: Twitter, href: "https://twitter.com/sightertech", label: "Twitter" }, { icon: Linkedin, href: "https://linkedin.com/company/sightertech", label: "LinkedIn" }].map(({ icon: Icon, href, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 flex items-center justify-center rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-400 hover:text-electric-blue hover:border-electric-blue/40 transition-all duration-200"><Icon className="w-4 h-4" /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-charcoal-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600">© {year} Sighter Tech LTD. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-600">Built with Next.js · Powered by caffeine ☕</p>
        </div>
      </div>
    </footer>
  );
}