import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Eye, Code, Globe, Phone, Palette, FileText } from "lucide-react";

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

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
      description: "Après acceptation réciproque et règlement de la prestation, livraison de votre site web"
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cliquer sur les icônes pour voir les détails.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-primary/30"></div>
            
            {/* Steps */}
            <div className="flex justify-between items-start relative">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'
                  }`}
                  onClick={() => setActiveStep(index)}
                  style={{ zIndex: 10 }}
                >
                  {/* Step content */}
                  <div className={`${index % 2 === 0 ? 'mb-8' : 'mt-12'} text-center max-w-32`}>
                    <h3 className={`font-semibold text-sm transition-colors ${
                      activeStep === index ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Step circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-primary text-primary-foreground scale-110' 
                      : 'bg-background border-2 border-primary/30 hover:border-primary/60'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail section */}
          <Card className="mt-16 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="h-8 w-8 text-primary" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile: Vertical Timeline with Tooltips */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative flex items-center cursor-pointer"
                  onClick={() => setShowTooltip(showTooltip === index ? null : index)}
                >
                  {/* Step circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                    showTooltip === index 
                      ? 'bg-primary text-primary-foreground scale-110' 
                      : 'bg-background border-2 border-primary/30'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Step title */}
                  <div className="ml-6">
                    <h3 className={`font-semibold transition-colors ${
                      showTooltip === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Tooltip */}
                  {showTooltip === index && (
                    <div className="absolute left-20 top-0 bg-background border border-primary/20 rounded-lg p-4 shadow-lg max-w-xs animate-fade-in z-20">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;