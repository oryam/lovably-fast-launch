import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Github, Mail, Shield, Calendar } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Informations <span className="text-primary">utiles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/40 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Info className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Technologie moderne</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Site généré avec lovable.io</strong> - LA référence pour créer des sites rapidement avec un design moderne.
                </p>
                <p>
                  <strong className="text-foreground">HTML/CSS/JS et ReactJs</strong> - Technologies standards du web.
                </p>
                <p>
                  <strong className="text-foreground">Google indexe les sites dynamiques</strong> - Référencement optimal garanti.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/40 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Hébergement gratuit</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">GitHub repository public gratuit</strong> - Hébergement fiable et sécurisé.
                </p>
                <p>
                  Comptes nécessaires : Gmail, OVH, Lovable.io, GitHub. Seul le nom de domaine est à vos frais.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/40 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Propriété totale</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Nom de domaine chez OVH</strong> - Gestion simplifiée des contacts.
                </p>
                <p>
                  <strong className="text-foreground">Aucune formation incluse</strong> - Site livré clé en main.
                </p>
                <p>
                  <strong className="text-foreground">Support à 75€ HT/heure</strong> - Accompagnement sur demande.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
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

export default InfoSection;