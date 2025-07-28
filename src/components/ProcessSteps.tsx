import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Eye, Code, Globe, Phone, Palette, FileText } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Phone,
      title: "RDV de 30 min",
      description: "Un rdv de 30 min pour recueillir vos besoins"
    },
    {
      icon: FileText,
      title: "Contenus principaux",
      description: "Vous fournissez les contenus principaux (présentation de votre société, descriptions de vos services, visuels si vous en avez, ...)"
    },
    {
      icon: Eye,
      title: "Visualisation",
      description: "Visualisation d'une proposition"
    },
    {
      icon: CheckCircle,
      title: "Acceptation",
      description: "Après acceptation réciproque et règlement de la prestation de 50€ H.T., ou 100€ H.T., livraison de votre site web"
    },
    {
      icon: Code,
      title: "Finalisation",
      description: "Un rdv de 30 min pour finaliser le site"
    },
    {
      icon: Globe,
      title: "Mise en ligne",
      description: "Votre site est en ligne sur votre nom de domaine"
    },
    {
      icon: Palette,
      title: "Accès total",
      description: "Vous avez un accès total au code source et l'hébergement"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les <span className="text-primary">étapes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;