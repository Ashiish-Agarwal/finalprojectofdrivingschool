import { useEffect, useState } from "react";
import Loopanimation from "./loopanimion";

// Placeholder partner names - these would be replaced with actual logo images
const partners = [
  "YAMAHA",
  "DUCATI",
  "KAWASAKI",
  "HONDA",
  "BMW MOTORRAD",
  "SUZUKI",
  "KTM",
  "APRILIA",
];

const PartnersSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="insights" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center space-y-2">
          <p className="text-sm uppercase tracking-wider text-accent font-medium">
            Nos Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Fiable et approuvé par des investisseurs partout en France</h2>
        </div>
      </div>

      <Loopanimation />
    </section>
  );
};

export default PartnersSection;
