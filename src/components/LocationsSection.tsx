import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import trackImg from "@/assets/practice1.avif";
import schoolImg from "@/assets/practice2.avif";

const LocationsSection=()=>{

const locations = [
  {
    name: "GP Kart Concept (41)",
    location: "Blois, Loir-et-Cher (41)",
    image: trackImg,
    description: "A versatile riding center in Landes, designed for real-world motorcycle handling, group coaching, and outdoor riding experiences.",
  },
  {
    name: "Kart Lande (40)",
    location: "Lieux de Pratique",
    image: schoolImg,
    description: "Open and dynamic training space offering authentic track conditions, personalized coaching, and immersive motorcycle skill development.",
  },
  
];



  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <p className="text-sm lowercase tracking-tighter font-medium mb-2 flex  gap-2">
             <Triangle className="w-5 h-5" /> Nos Installations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Lieux de Pratique
            </h2>
          </div>
          <Button className="bg-primary hover:bg-primary/90 group">
            <span>COMMENCER VOTRE VOYAGE</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out  flex-col md:flex-row gap-2"
              
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="min-w-full px-2 md:min-w-[50%] lg:min-w-[33.333%] w-52 mx-auto  "
                >
                  <Card className="overflow-hidden hover-lift border-border hover:border-accent transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {location.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {location.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {location.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

    
         
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
