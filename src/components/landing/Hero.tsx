import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Zap className="h-3.5 w-3.5 text-cyber-red" />
            v4.2 — Stealth Engine Active
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-5xl break-words">
            <span className="text-gradient-red">DOMINATE</span>
            <span className="block">THE BATTLEGROUND.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground">
            The most advanced Free Fire panel ever built. Undetected. Unmatched. Engineered for players who refuse to lose.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="moving-border group inline-flex items-center gap-2 rounded-xl bg-[#C0002F] px-8 py-4 font-display font-semibold text-white shadow-[0_0_40px_rgba(255,0,0,0.4)]"
            >
              Get Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <a
              href="#features"
              className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-8 py-4 font-display font-medium text-foreground"
            >
              <Crosshair className="h-4 w-4" />
              View Features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 8 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ perspective: 1200 }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <div className="glass rounded-2xl p-2 shadow-[0_30px_120px_-20px_rgba(255,0,60,0.5)]">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#150505] aspect-[16/9]">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              {/* mock panel UI */}
              <div className="absolute inset-0 p-6 flex gap-4">
                <div className="w-48 glass rounded-lg p-4 flex flex-col gap-3">
                  <div className="h-6 w-24 rounded bg-cyber-red/30" />
                  {["Aimbot", "ESP", "Memory", "Stealth", "Settings"].map((t, i) => (
                    <div key={t} className={`h-8 rounded-md flex items-center px-3 text-xs font-medium ${i === 0 ? "bg-cyber-red/20 text-cyber-red border border-cyber-red/40" : "bg-white/5 text-muted-foreground"}`}>
                      {t}
                    </div>
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="glass rounded-lg p-4 flex flex-col justify-between">
                      <div className="h-3 w-16 rounded bg-white/10" />
                      <div className="font-display text-2xl text-cyber-red">{[98, 100, 0, 142][i]}{i === 2 ? "%" : ""}</div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyber-red to-[#ff5577]" style={{ width: `${[88, 100, 0, 92][i]}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
