import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Marquee } from "@/components/sections/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}
