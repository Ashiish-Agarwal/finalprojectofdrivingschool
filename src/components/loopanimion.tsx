import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Link } from 'react-router-dom';

interface InfiniteLoopScrollProps {
  images: string[];
  speed?: number;
  gap?: number;
}

const InfiniteLoopScroll: React.FC<InfiniteLoopScrollProps> = ({
  images,
  speed = 30,
  gap = 40,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      setContainerWidth(width);
    }
  }, [images]);

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerWidth > 0) {
      const moveBy = (containerWidth / (speed * 1000)) * delta;
      const currentX = x.get();
      const newX = currentX - moveBy;
      
      if (newX <= -containerWidth) {
        x.set(newX + containerWidth);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <div className="w-full overflow-hidden  py-12">
      <motion.div
        ref={containerRef}
        className="flex"
        style={{ gap: `${gap}px`, x }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First set of images */}
        {images.map((img, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl overflow-hidden border border-white/20"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a href='https://www.team33accessoires.fr/' target="_blank" >
            <img
              src={img}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-contain"
            />
            </a>
          </motion.div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {images.map((img, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl overflow-hidden border border-white/20"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a href='https://www.team33accessoires.fr/' target="_blank" >
            <img
            
              src={img}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-cover"
            />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Demo Component
const Loopanimation: React.FC = () => {
  // Sample brand images - replace with your actual brand images
  const brandImagesch = [
    // 'https://cardosystems.com/cdn/shop/files/Cardo_Logo_Blue_and_White_Horizontal_1_400x.webp?v=1724830324',
    // 'https://www.ixon.com/themes/custom/ixon/img/logo_ixon.png',
    'https://gpkartconcept.fr/wp-content/uploads/2023/11/LOGO-GP-KART-SEUL-NOIR.gif',
    // 'https://www.kawasaki-merignac.com/nas/commun/www_themes/bc33ea4e26e5e1af1408321416956113a4658763/images/n-logo.png',
    'https://www.team33accessoires.fr/themes/team33/assets/img/logo-team33.svg',
    'https://espritmoto.com/wp-content/themes/revendeur/images/esprit-moto-logo.png',
  ];
  const brandImages = [...brandImagesch, ...brandImagesch];

  return (
    <div className="flex flex-col items-center justify-center">
      
      
      <InfiniteLoopScroll 
        images={brandImages} 
        speed={25} 
        gap={64} 
      />
      
      
    </div>
  );
};

export default Loopanimation;