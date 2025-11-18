import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolexteriorr from "@/assets/school-exteriorr.jpg";
import { cn } from "@/lib/utils";
import ScrambledText from "./ScrambledText";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    let lastScroll = 0;

    const controlNavbar = () => {
      const currentScroll = window.scrollY;

      // Don't hide if menu is open
      if (isMenuOpen) {
        return;
      }

      if (currentScroll <= 10) {
        // At the top
        setIsVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-[1px] transition-transform duration-300',
        isMenuOpen ? 'bg-white' : 'bg-transparent',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="sr-only">
              École de Pilotage Moto Antiga Team33accessoires.
            </h1>
            <h1></h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center ">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-2 hover:text-accent transition-colors group duration-300"
              >
                {isMenuOpen ? (
                  <span className="bg-primary text-white p-2 flex items-center justify-center rounded-md">
                    <X className="ml-2 h-4 w-4" />
                    <span className="font-medium">MENU</span>
                  </span>
                ) : (
                  <span className="bg-primary text-white p-2 flex items-center justify-center rounded-md">
                    <Menu className="ml-2 h-4 w-4" />
                    <span className="font-medium">MENU</span>
                  </span>
                )}
              </button>
              <Button className="group rounded-md bg-white text-black hover:bg-white hover:text-black">
                <span>RÉSERVER UNE DÉMO</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="space-y-1.5 bg-white">
                <span
                  className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "73px" }}
      >
        <div className="h-full overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Menu Items */}
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars={':.'}>
                <div className="flex flex-col justify-center text-black space-y-6">
                  <a
                    href="#about"
                    className="text-3xl md:text-5xl font-bold hover:text-accent transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    À Propos
                  </a>
                  <a
                    href="#services"
                    className="text-3xl md:text-5xl font-bold hover:text-accent transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                  <a
                    href="#locations"
                    className="text-3xl md:text-5xl font-bold hover:text-accent transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Lieux
                  </a>
                  <a
                    href="#insights"
                    className="text-3xl md:text-5xl font-bold hover:text-accent transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Actualités
                  </a>

                  <div className="pt-8 md:hidden">
                    <Button
                      onClick={() =>
                        window.open(
                          "https://wa.me/91667395312?text=Hello, I am interested in your service",
                          "_blank"
                        )
                      }
                      className="w-full bg-primary hover:bg-primary/90 group"
                    >
                      <span>RÉSERVER UNE DÉMO</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </ScrambledText>

              {/* Image and Contact Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={schoolexteriorr}
                    alt="École de pilotage"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-4 duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-accent-foreground transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-accent-foreground transition-colors duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Adresse</h3>
                  <p className="text-muted-foreground">
                    antigadrivingschool@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    3 rue Urgain, 64990 Saint-pierre-d'irube Boite aux lettres
                    Ducati Bayonne
                  </p>
                  <p className="text-muted-foreground pt-2">
                    contact@antigateam33.fr
                  </p>
                  <p className="text-muted-foreground">0648749699</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;