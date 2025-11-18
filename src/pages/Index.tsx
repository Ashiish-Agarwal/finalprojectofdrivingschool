import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import ArticlesSection from "@/components/ArticlesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { ReactLenis, useLenis } from 'lenis/react'


const Index = () => {
  const lenis = useLenis((lenis) => {
    
    
  })
  return (
     

    <div className="min-h-screen">
           <ReactLenis root options={{
      lerp: 0.05,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.4,
    }} />
            <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <div className="w-full bg-zinc-500 h-[1px] border-b-[1px] border-zinc-500"></div>
        <LocationsSection />
        <PartnersSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
