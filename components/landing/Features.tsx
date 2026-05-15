"use client";

import { motion, useMotionValue } from "framer-motion";
import { Crosshair, Eye, ShieldCheck, Smartphone, Zap } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  return (
    <div
      onMouseMove={onMove}
      className={`spotlight-card glass glass-hover rounded-2xl p-8 group relative ${className}`}
    >
      {children}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-cyber-red mb-4">Arsenal</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          Built for <span className="text-gradient-red">apex</span> players.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Four weapons. Zero compromise. Engineered to be the last panel you'll ever need.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px]">
        {/* Aimbot - large */}
        <SpotlightCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-cyber-red" /> Locked
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">Advanced Aimbot</h3>
              <p className="mt-3 text-muted-foreground max-w-md">
                Predictive AI targeting with bone-level precision. Smooth, undetectable, instant.
              </p>
            </div>
            <Crosshair className="h-10 w-10 text-cyber-red drop-shadow-[0_0_12px_rgba(255,0,60,0.8)]" />
          </div>
          <div className="relative mt-6 flex items-center justify-center">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full border border-cyber-red/40 animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyber-red/30 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-cyber-red/60 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Crosshair className="h-16 w-16 text-cyber-red group-hover:scale-125 transition-transform duration-500" strokeWidth={1.2} />
              </div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-red to-transparent" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-red to-transparent" />
            </div>
          </div>
        </SpotlightCard>

        {/* ESP */}
        <SpotlightCard className="flex flex-col justify-between overflow-hidden">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-2xl font-bold">Visual ESP</h3>
            <Eye className="h-7 w-7 text-cyber-red" />
          </div>
          <div className="relative h-24">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute border border-cyber-red/70 group-hover:border-cyber-red transition-colors"
                style={{
                  left: `${15 + i * 28}%`,
                  top: `${10 + i * 8}%`,
                  width: 40,
                  height: 60,
                }}
              >
                <div className="absolute -top-3 left-0 text-[8px] font-mono text-cyber-red">ENEMY · {85 - i * 12}m</div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-red/60" />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">See every enemy. Through every wall.</p>
        </SpotlightCard>

        {/* Anti-Ban */}
        <SpotlightCard className="flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-2xl font-bold">Anti-Ban Shield</h3>
            <ShieldCheck className="h-7 w-7 text-online drop-shadow-[0_0_8px_rgba(0,255,120,0.6)]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <ShieldCheck className="h-12 w-12 text-online group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div className="absolute inset-0 rounded-full bg-online/20 blur-xl group-hover:bg-online/40 transition-colors" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-online">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Safe</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">HWID spoofer + bypass. 0 bans in 18 months.</p>
        </SpotlightCard>

        {/* PC Bypass */}
        <SpotlightCard className="flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-2xl font-bold">PC Bypass</h3>
            <Smartphone className="h-7 w-7 text-cyber-red" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-cyber-red/10 blur-xl group-hover:bg-cyber-red/25 transition-colors" />
              <div className="glass rounded-2xl px-3 py-2 text-[10px] uppercase tracking-widest">PC → Mobile</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-cyber-red">Stealth</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Client Mask</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">PC session, mobile lobby mask.</p>
        </SpotlightCard>

        {/* Instant Delivery */}
        <SpotlightCard className="md:col-span-2 flex items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-6 w-6 text-cyber-red" />
              <h3 className="font-display text-2xl font-bold">Instant Setup</h3>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Pay, receive your key in seconds. Auto-activated. No waiting, no support tickets.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs">
            {["PAY", "KEY", "PLAY"].map((t, i) => (
              <div key={t} className="flex items-center gap-2">
                <div className={`glass px-3 py-2 rounded-lg ${i === 2 ? "border-cyber-red/60 text-cyber-red" : ""} group-hover:translate-x-0 transition-transform`}>
                  {t}
                </div>
                {i < 2 && <span className="text-cyber-red">→</span>}
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
