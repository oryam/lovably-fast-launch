import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 py-20 md:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Star className="h-4 w-4 fill-current" />
            Une offre unique
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
            <h2 className="text-xl text-muted-foreground md:text-2xl">
              <strong>Aucun frais de maintenance</strong>
            </h2>
          </div>

          {/* CTA Button */}
          <div className="mb-4">
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
          <div className="mb-4 flex items-center justify-center gap-2 text-xl text-muted-foreground">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">30 min</span>
          </div>

          {/* Pricing Info */}
          <p className="text-sm text-muted-foreground max-w-2xl">
            Appel téléphonique. Aucun frais de maintenance. Réservez votre rendez-vous pour créer votre site web one-page ou jusqu'à 3 pages clés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;