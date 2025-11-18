import { Suspense, lazy } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
import ReactLoading from 'react-loading';

const Navbar = lazy(() => import("@/components/Navbar"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const LocationsSection = lazy(() => import("@/components/LocationsSection"));
const ArticlesSection = lazy(() => import("@/components/ArticlesSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const lenis = useLenis((lenis) => {})

  return (
    <div className="min-h-screen">
      <ReactLenis root options={{
        lerp: 0.05,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.4,
      }} />

      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={50} />
        </div>
      }>
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
      </Suspense>
    </div>
  );
};

export default Index;
