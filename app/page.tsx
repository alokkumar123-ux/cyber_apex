import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { StatusBar } from "@/components/landing/StatusBar";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatusBar />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
