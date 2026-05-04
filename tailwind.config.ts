import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#060608",
          900: "#0a0b0f",
          800: "#0f1117",
          700: "#141720",
          600: "#1a1e2a",
          500: "#212535",
        },
        charcoal: {
          900: "#1c1f2e",
          800: "#252836",
          700: "#2d3144",
          600: "#363b52",
          500: "#404560",
        },
        electric: {
          blue: "#00a8ff",
          cyan: "#00e5ff",
          glow: "#0066cc",
        },
        neon: {
          blue: "#00cfff",
          purple: "#7b5ea7",
          green: "#00ff88",
        },
        slate: {
          50: "#f0f4ff",
          100: "#e1e8ff",
          200: "#c3d1ff",
          300: "#a0b3e8",
          400: "#7a90cc",
          500: "#5a6eaa",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,168,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0,168,255,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #060608 0%, #0a0b0f 40%, #0f1117 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "60px 60px",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(0,168,255,0.2)",
        "glow-md": "0 0 30px rgba(0,168,255,0.3)",
        "glow-lg": "0 0 60px rgba(0,168,255,0.2)",
        "glow-card": "0 0 40px rgba(0,168,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        "inner-glow": "inset 0 1px 0 rgba(0,168,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        borderGlow: {
          "0%": { borderColor: "rgba(0,168,255,0.3)" },
          "100%": { borderColor: "rgba(0,168,255,0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;