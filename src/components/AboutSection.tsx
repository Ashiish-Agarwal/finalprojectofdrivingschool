import { useEffect, useRef, useState } from "react";
import instructorImg from "@/assets/instructor.jpg";
import trackImg from "@/assets/track-aerial.jpg";
import bikeFleetImg from "@/assets/bike-fleet.jpg";
import { FlagTriangleRight, Star, Triangle } from "lucide-react";
import ScrollTextColorComponent from "./ui/text-animation";
import biker from '@/assets/bikerhelmet.avif'
import GlareHover from "./GlareHover";


const AboutSection = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const images = entry.target.querySelectorAll(".about-image");
  //           images.forEach((img, index) => {
  //             setTimeout(() => {
  //               setVisibleImages((prev) => [...prev, index]);
  //             }, index * 200);
  //           });
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  const images = [
    { src: biker, alt: "Instructeur professionnel", name:'Lucas Martin (2022)', description:'After two years of intense training and dedication, Lucas became regional junior champion and represented our school in his first national motorcycle competition.' },
    { src: biker, alt: "Circuit de formation", name:'Emma Dubois (2023)', description:'Emma started as a beginner, trained consistently with professional coaching, and earned her racing license, finishing second at the Blois Track Challenge.' },
    { src: biker, alt: "Flotte de motos", name:'Hugo Bernard (2024)', description:'Thanks to disciplined practice and personalized guidance, Hugo progressed to advanced racing level and successfully completed his first endurance race in Le Mans.' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background ">
      <div className="p-2">
        <div className="">
          {/* Text Content */}
          <div className=" flex flex-col ml-4  gap-4  ">
            <p className="text-sm  normal-case tracking-tighter flex gap-1  items-center  text-black  font-medium">
              <Triangle className="w-5 h-5 " />
              À Propos section
            </p>
            <div className="ml-4 gap-4 ">

            <div>

            <ScrollTextColorComponent/>
            </div>
            <p className=" stack-sans-notch-400 text-sm mt-5  ">
              Location de motos, équipements et coaching personnalisé inclus<br/> pour vous aider à rouler en toute sécurité, avec confiance, <br/> et vivre pleinement votre passion.
            </p>
            </div>
          </div>

          {/* Images Grid - Desktop */}
          <div className="  flex  gap-4 w-[95%] mx-auto flex-col md:flex-row  mt-5">
            {
             
              images.map((image, index) => (
                <div className="flex flex-wrap md:flex-col  ">

                <div
                  key={index}
                  className={`about-image relative overflow-hidden rounded-lg transition-all duration-700 `}
                  >
 <GlareHover className="w-fit  h-fit object-cover hover:scale-105 transition-transform duration-500  border-none"
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={200}
    transitionDuration={800}
    playOnce={false}
  >
    <img
                    src={image.src}
                    alt={image.alt}
                    className=" rounded-md rounded-b-none "
                  />
                  </GlareHover>
                 
                </div>
                 <div className=" flex flex-col gap-4 flex-wrap leading-3">
                    <strong className="text-black text-sm font-semibold">{image.name}</strong>
                    <p className="text-black text-xs w-[70%]">{image.description}</p>
                  </div>
                  </div>
              ))
            }
          </div>
         

        
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
