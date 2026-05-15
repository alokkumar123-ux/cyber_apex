"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const terms = ["Weekly", "Monthly", "Lifetime"] as const;
type Term = (typeof terms)[number];

const plans = [
  {
    name: "Internal",
    desc: "Headshot-focused core kit.",
    prices: { Weekly: "7", Monthly: "19", Lifetime: "49" },
    features: ["Advanced Aimbot (headshot)", "Visual ESP", "Anti-Ban Shield"],
  },
  {
    name: "External",
    desc: "Sniping-focused core kit.",
    prices: { Weekly: "7", Monthly: "19", Lifetime: "49" },
    features: ["Advanced Aimbot (sniping)", "Visual ESP", "Anti-Ban Shield"],
  },
  {
    name: "PC Bypass",
    desc: "PC play with mobile lobby mask.",
    prices: { Weekly: "5", Monthly: "15", Lifetime: "39" },
    features: ["PC session", "Mobile lobby identity", "PC logo hidden"],
  },
  {
    name: "All In One",
    desc: "Complete bundle for competitive play.",
    prices: { Weekly: "12", Monthly: "39", Lifetime: "99" },
    features: ["Advanced Aimbot (headshot + sniping)", "Visual ESP", "Charms", "Anti-Ban Shield", "PC Bypass"],
    featured: true,
  },
  {
    name: "Brutal",
    desc: "High-intensity demo kit.",
    prices: { Weekly: "9", Monthly: "29", Lifetime: "69" },
    features: ["Teleport", "Hands-free controls", "Automatic elimination"],
  },
  {
    name: "Custom",
    desc: "Request a custom build.",
    prices: { Weekly: "Custom", Monthly: "Custom", Lifetime: "Custom" },
    features: ["Custom feature mix", "Custom delivery", "Custom support"],
  },
];

export function Pricing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [term, setTerm] = useState<Term>("Monthly");

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / plans.length;
      const idx = Math.round((el.scrollLeft + el.clientWidth / 2 - cardWidth / 2) / cardWidth);
      setActiveIdx(Math.max(0, Math.min(plans.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-center on the featured (recommended) tier on mount
  useEffect(() => {
    const featuredIdx = plans.findIndex((t) => t.featured);
    if (featuredIdx < 0) return;
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / plans.length;
    el.scrollTo({ left: cardWidth * featuredIdx - (el.clientWidth - cardWidth) / 2, behavior: "auto" });
    setActiveIdx(featuredIdx);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / plans.length;
    el.scrollTo({ left: cardWidth * idx - (el.clientWidth - cardWidth) / 2, behavior: "smooth" });
  };

  const scrollByDir = (dir: 1 | -1) => scrollTo(Math.max(0, Math.min(plans.length - 1, activeIdx + dir)));

  return (
    <section id="pricing" className="py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-cyber-red mb-4">Plans</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          Choose your <span className="text-gradient-red">plan</span>.
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">Pick a duration, then compare plans.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-2 py-2">
          {terms.map((t) => (
            <button
              key={t}
              onClick={() => setTerm(t)}
              className={`rounded-full px-4 py-2 text-xs font-display uppercase tracking-widest transition ${
                term === t
                  ? "bg-gradient-to-r from-[#ff1a4f] to-[#c00030] text-white shadow-[0_0_18px_rgba(255,0,60,0.45)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="relative">
        {/* edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6 px-6 md:px-12 min-w-max items-stretch">
            {plans.map((plan, i) => {
              const featured = plan.featured;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`snap-center shrink-0 w-[300px] md:w-[340px] relative ${featured ? "md:scale-105" : ""}`}
                >
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="moving-border inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff1a4f] to-[#c00030] px-4 py-1.5 text-[10px] font-display font-bold uppercase tracking-widest text-white shadow-[0_0_24px_rgba(255,0,60,0.6)]"
                      >
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </motion.div>
                    </div>
                  )}
                  <div
                    className={`glass glass-hover relative rounded-2xl p-8 h-full flex flex-col ${
                      featured ? "moving-border bg-gradient-to-b from-[oklch(0.12_0.04_18/0.6)] to-[oklch(0.08_0.01_20/0.6)]" : ""
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{plan.name}</div>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold">${plan.prices[term]}</span>
                      <span className="text-sm text-muted-foreground">/ {term.toLowerCase()}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>

                    <ul className="mt-8 space-y-3 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <span className={`flex h-5 w-5 items-center justify-center rounded-full ${featured ? "bg-cyber-red/20 text-cyber-red" : "bg-white/5 text-foreground/70"}`}>
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 font-display font-semibold transition-all ${
                        featured
                          ? "bg-gradient-to-b from-[#ff1a4f] to-[#c00030] text-white shadow-[0_0_30px_rgba(255,0,60,0.4)] hover:shadow-[0_0_50px_rgba(255,0,60,0.6)]"
                          : "glass glass-hover text-foreground"
                      }`}
                    >
                      Choose {plan.name}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modern centered indicator */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => scrollByDir(-1)}
          aria-label="Previous panel"
          className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition disabled:opacity-30"
          disabled={activeIdx === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {plans.map((t, i) => {
            const active = i === activeIdx;
            return (
              <button
                key={t.name}
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${t.name}`}
                className={`relative h-1.5 rounded-full transition-all duration-300 ${
                  active ? "w-8 bg-gradient-to-r from-[#ff1a4f] to-[#c00030] shadow-[0_0_12px_rgba(255,0,60,0.6)]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        <button
          onClick={() => scrollByDir(1)}
          aria-label="Next panel"
          className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition disabled:opacity-30"
          disabled={activeIdx === plans.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
