import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Preview from "@/components/sections/Preview";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <AboutUs />
      <Preview />
      <Features />
      <CTA />
    </main>
  );
}
