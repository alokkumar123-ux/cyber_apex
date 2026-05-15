import { Flame } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 pt-5">
        <nav className="glass rounded-2xl flex items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#ff1a4f] to-[#7a0020] shadow-[0_0_16px_rgba(255,0,60,0.6)]">
              <Flame className="h-4 w-4" />
            </span>
            Karan Cheats<span className="text-cyber-red">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
          </div>
          <a href="#pricing" className="inline-flex items-center rounded-lg bg-[#C0002F] px-4 py-2 text-sm font-display font-semibold text-white shadow-[0_0_20px_rgba(255,0,60,0.4)] hover:shadow-[0_0_30px_rgba(255,0,60,0.6)] transition-shadow">
            Get Access
          </a>
        </nav>
      </div>
    </header>
  );
}
