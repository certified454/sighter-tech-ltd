import type { Metadata } from "next";
import { Space_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sighter Tech LTD — Software Agency | Edo State, Nigeria",
    template: "%s | Sighter Tech LTD",
  },
  description:
    "Sighter Tech LTD is a premium software development agency based in Edo State, Nigeria. We build Full-Stack Web Apps, Mobile Apps, and AI-driven backend systems.",
  keywords: ["software development", "Nigeria", "Edo State", "Next.js", "React Native", "AI agents"],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sightertech.com",
    title: "Sighter Tech LTD — Software Agency",
    description: "Premium Full-Stack & AI-driven software solutions from Edo State, Nigeria.",
    siteName: "Sighter Tech LTD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${spaceMono.variable} font-body bg-obsidian-950 text-slate-100 antialiased overflow-x-hidden`}
      >
        <div className="relative min-h-screen">
          <div className="fixed inset-0 bg-hero-gradient pointer-events-none" />
          <div className="fixed inset-0 bg-grid-pattern bg-grid-md pointer-events-none opacity-40" />
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-glow pointer-events-none opacity-30" />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <WhatsAppButton
            phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2349163301828"}
          />
        </div>
      </body>
    </html>
  );
}