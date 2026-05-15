import { Send, Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#ff1a4f] to-[#7a0020]">
                <Flame className="h-4 w-4" />
              </span>
              Karan Cheats<span className="text-cyber-red">.</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              The premier Free Fire performance panel.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-3 font-display font-semibold"
          >
            <Send className="h-4 w-4 text-cyber-red" />
            Join Discord
          </a>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Karan Panel. All rights reserved.</div>
          <div>Not affiliated with Garena or Free Fire.</div>
        </div>
      </div>
    </footer>
  );
}
