import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cette offre est-elle pour moi ?
          </h2>
          
          <div className="text-white/90 text-lg space-y-4 mb-8">
            <p>
              Cette offre s'adresse aux <strong>entreprises ou indépendants</strong> qui veulent un site web simple, 
              joli et personnalisé rapidement à moindre effort pour un effet "wahou !".
            </p>
            <p>
              Il convient pour des sites vitrines, comme une <strong>"carte de visite virtuelle"</strong> de quelques pages, 
              et où très peu de modifications seront apportées à courts termes.
            </p>
            <p>
              Le site créé sera un très bon élément de départ pour éventuellement l'améliorer ou le changer avec plus de budget. 
              Ce site vous fera gagner du temps et de l'argent pour la suite.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <p className="text-white text-sm">
              Oubliez Wordpress, Wix, ... Arrêtez de perdre de l'argent quand on vous parle de SEO. 
              Investissez plutôt dans votre communication (fiche Google et avis, réseaux sociaux et contenus récurrents attractifs, 
              marketing, réseaux d'entreprise, actions commerciales), avec simplement un joli site web qui décrit proprement votre activité.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white font-semibold">
              Ce service est disponible uniquement en juillet et août 2025.
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://calendly.com/webprofr/reserver" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réserver votre rendez-vous
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;