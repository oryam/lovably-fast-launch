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

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Le site est généré avec lovable.io.</strong> LA référence pour créer des sites rapidement avec un design moderne et appliquant toutes les bonnes pratiques et les standards du web.
                  </p>
                  <p>
                    <strong className="text-foreground">Le site généré utilise le langage HTML/CSS/JS et ReactJs.</strong>
                  </p>
                  <p>
                    <strong className="text-foreground">Google indexe et référence les sites dynamiques (contenu généré par js).</strong> Celui qui vous dira le contraire n'est pas à jour.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Github className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">L'hébergement gratuit se fait sur github (repository gratuit public)</strong>
                  </p>
                  <p>
                    Il est recommandé d'avoir un compte mail Google. Un compte client OVH sera à créer, ainsi qu'un compte sur lovable.io, un compte sur github.com et un accès. Seul le nom de domaine sera à commander à vos frais.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Le nom de domaine est réservé de préférence chez OVH</strong> qui facilite la gestion des contacts et administrateur. Le nom de domaine pourra être réservé à votre place si souhaité et l'accès total vous sera transmis ensuite.
                  </p>
                  <p>
                    <strong className="text-foreground">Aucun guide, ni formation n'est inclus dans cette offre</strong>
                  </p>
                  <p>
                    <strong className="text-foreground">Possibilité d'ajout de contenu au site ou d'accompagnement par la suite à partir de 75€ HT/heure.</strong>
                  </p>
                </div>
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