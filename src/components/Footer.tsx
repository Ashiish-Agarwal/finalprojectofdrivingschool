import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div id="footer" className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Antiga Team33accessoires</h3>
            <p className="text-sm opacity-80">
              
Antiga Team33Driving School accessories
            </p>
            <div >
              <h1>Devloper</h1>

            <a href="https://aviportfolio.netlify.app">Aviinash</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#locations" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Lieux
                </a>
              </li>
              <li>
                <a href="#insights" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">
                  3 rue Urgain,

64990 Saint-Pierre-d'Irube

Ducati Bayonne mailbox


</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@antigateam33.fr" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                 antigadrivingschool@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-80">0648749699</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-80">
          <p>&copy; 3 rue Urgain,

64990 Saint-Pierre-d'Irube

Ducati Bayonne mailbox</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
