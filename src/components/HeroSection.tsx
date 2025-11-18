import { ArrowRight, Shield, Users, Trophy, Clock, ArrowBigRightDash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bike.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "Formation complète aux normes de sécurité",
  },
  {
    icon: Users,
    title: "Expert",
    description: "Instructeurs professionnels certifiés",
  },
  {
    icon: Trophy,
    title: "Performance",
    description: "Techniques de pilotage avancées",
  },
  {
    icon: Clock,
    title: "Flexible",
    description: "Horaires adaptés à votre rythme",
  },
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 bg-blend-color-burn backdrop-grayscale "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-12 sticky top-0 z-50 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center   ">
          {/* Left Content */}
          <div className="text-white space-y-6 flex flex-col h-full  ">
            <div className="h-[5rem] w-full"> </div>
            <div className="h-full flex flex-col gap-2 ">

           
            <p className="text-sm md:text-base uppercase tracking-wider text-racing-yellow font-medium">
            
École de conduite moto


            </p>
            <p className="text-sm  ml-3 tracking-wider  font-medium">Accessoires Antiga Team33.</p>
            <h1 className=" text-2xl md:text-3xl stack-sans-notch-200   font-bold leading-tighter ">
          Ouvert à tous
              <br />
                à partir de 6 ans
              <br />
            Formation sur deux roues.

            </h1>
            <p className="text-sm  text-gray-200 max-w-xl">
             une école de conduite moto de haut niveau située à 
             <br />
            Blois, France à prix abordables .
            </p>
            
            <Link to="/about" className="text-sm mt-10  flex flex-col   font-medium text-white hover:text-white/80 transition-colors flex  gap-2">
            
            <div className="flex gap-2 flex-col hover:scale-105 duration-300 text-sm ">
              <div className="flex gap-2">
           Commencez votre parcours <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
            </div>
            <span className="hover:scale-105 duration-300 rounded-md h-[1px] w-32 bg-white border-b-2 border-white"></span>
            </div>
            </Link>
          </div>
           </div>

          {/* Right Content - Service Cards */}
          <div className="w-full flex  flex-col  items-end justify-end h-full mt-32">
          <div className=" flex w-[50%]     ">
           
              <Card
                
                className=" hidden md:block bg-transparent backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover-lift overflow-hidden "
                
              >
                <CardContent className=" flex flex-col  space-y-3 w-full  ">
                  <img className="w-full h-full  rounded-md rounded-b-none bg-red-500 object-cover " src={heroImage} alt="loading" />
                 
                  <div className="text-white space-y-2 stack-sans-notch-200 p-2">

                  <h3 className="text-xl font-bold">Sécurité</h3>
                  <p className="text-sm ">
                    Nous sommes une équipe de professionnels et des consultants qui vous guident pour devenir un pilote moto de haut niveau
                  </p>
                  <Link to="/about" className="text-sm mt-10   flex-col  items-end justify-end  font-medium text-white hover:text-white/80 transition-colors flex  ">
                  
                  <div className="flex gap-2 flex-col hover:scale-105 duration-300 text-sm ">
                    <div className="flex gap-2">
                 En savoir plus <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                  </div>
                  <span className="hover:scale-105 duration-300 rounded-md h-[1px] w-32 bg-white border-b-2 border-white"></span>
                  </div>
                  </Link>
                  </div>
                </CardContent>
              </Card>
            
          </div>
          </div>
        </div>
        </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
