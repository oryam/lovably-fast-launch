import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Créer son site en seulement <span className="text-primary">5 minutes</span>, vraiment ?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Créer un site web avec lovable ne prend que quelques minutes ! 
            Ce n'est pas une illusion. Les technologies rendent la création beaucoup plus simple quand cela est bien utilisé.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Site One-Page</h3>
                  <div className="text-4xl font-bold text-primary mb-2">1 heure</div>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Création en 30 minutes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Design moderne et responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Hébergement gratuit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Code source accessible</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Aucun frais de maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Site 3 Pages</h3>
                  <div className="text-4xl font-bold text-primary mb-2">2 heures</div>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Jusqu'à 3 pages clés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Navigation optimisée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Design moderne et responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Hébergement gratuit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Code source accessible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              En tant qu'indépendant, mon activité à temps plein me permet de dégager du temps pour d'autres initiatives comme celle-ci.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://calendly.com/webprofr/reserver" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réserver votre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;