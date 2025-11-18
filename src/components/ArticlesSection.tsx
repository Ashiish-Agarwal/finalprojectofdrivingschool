import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import articles1 from "@/assets/articles.avif";
import articles2 from "@/assets/articles2.avif";
import articles3 from "@/assets/articles3.avif";

const articles = [
  {
    title: "Combinaison Ixon Vortex 3 junior 12-14 ans",
    category: "Équipement",
    price: "299€",
    image: articles1,
  },
  {
    title: "Ixon Vortex 3 Kid wetsuit 8-10 years",
    category: "Vêtements",
    price: "€639.00",
    image: articles2,
  },
  {
    title: "Vortex GL Gloves",
    category: "Accessoires",
    price: "€274.00",
    image: articles3,
  },
  
];

const ArticlesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider text-accent font-medium">
              Boutique
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Nos Articles</h2>
            <p className="text-muted-foreground max-w-xl">
              Découvrez notre sélection d'équipements et accessoires de qualité professionnelle.
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 snap-start hover-lift border-border hover:border-accent transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-2xl font-bold text-accent">
                      {article.price}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full group hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    onClick={ ()=>window.open(
      "https://wa.me/91667395312?text=Hello, I am interested in your service",
      "_blank"
    ) }
                  >
                    <span>Voir Détails</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ArticlesSection;
