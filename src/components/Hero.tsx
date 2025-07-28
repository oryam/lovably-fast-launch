import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/98bdb462-aac8-4864-af78-676d42d55b8d.png" 
              alt="Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Star className="h-4 w-4 fill-current" />
            Aucun frais de maintenance
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Votre site web{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              sans frais
            </span>
          </h1>

          {/* Subheading */}
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 flex items-center justify-center gap-2 text-xl text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">30 min</span>
            </div>
            
            <h2 className="text-xl text-muted-foreground md:text-2xl">
              <strong>Appel téléphonique</strong><br />
              Aucun frais de maintenance.<br />
              Réservez votre rendez-vous pour créer votre site web one-page ou jusqu'à 3 pages clés.
            </h2>
          </div>

          {/* Rating */}
          <div className="mb-8 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(défiler ⭐)</span>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="#" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réserver votre rendez-vous
              </a>
            </Button>
          </div>

          {/* Pricing Info */}
          <p className="text-sm text-muted-foreground max-w-2xl">
            Aucun frais de maintenance, à part la location de votre nom de domaine à votre charge et la prestation de 50€ H.T. (site one-page) ou 100€ H.T. (3 pages clés).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;