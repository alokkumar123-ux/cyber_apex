import { Shield, Activity, Users, Cpu } from "lucide-react";

export function StatusBar() {
  return (
    <section className="container mx-auto px-6 -mt-8 relative z-10">
      <div className="glass rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-online pulse-dot" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-online" />
          </span>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Server Status</div>
          <div className="font-display font-semibold text-online">ONLINE</div>
        </div>
        <div className="hidden md:block h-6 w-px bg-border" />
        <div className="flex items-center gap-3">
          <Shield className="h-4 w-4 text-cyber-red drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Detection Rate</div>
          <div className="font-display font-semibold text-cyber-red">0%</div>
        </div>
        <div className="hidden md:block h-6 w-px bg-border" />
        <div className="flex items-center gap-3">
          <Users className="h-4 w-4 text-foreground/70" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Active Users</div>
          <div className="font-display font-semibold">12,480</div>
        </div>
        <div className="hidden lg:block h-6 w-px bg-border" />
        <div className="flex items-center gap-3">
          <Cpu className="h-4 w-4 text-foreground/70" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Build</div>
          <div className="font-display font-semibold">4.2.1</div>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Activity className="h-4 w-4 text-online" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Uptime</div>
          <div className="font-display font-semibold">99.98%</div>
        </div>
      </div>
    </section>
  );
}
