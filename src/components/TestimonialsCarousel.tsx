import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire de salon de coiffure",
      content: "Service exceptionnel ! Mon site web a été créé en 30 minutes exactement comme promis. Le design est moderne et professionnel.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Consultant freelance",
      content: "Incroyable rapport qualité-prix. Pour 50€, j'ai obtenu un site web que j'aurais payé 10 fois plus cher ailleurs.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Artisan boulangère",
      content: "Processus très fluide, équipe à l'écoute. Mon site est en ligne et mes clients peuvent facilement me trouver.",
      rating: 5
    },
    {
      name: "Thomas Leroy",
      role: "Coach sportif",
      content: "Parfait pour commencer ! Le fait d'avoir accès au code source est un vrai plus pour l'évolution future.",
      rating: 5
    },
    {
      name: "Claire Moreau",
      role: "Photographe",
      content: "Design épuré et moderne qui met parfaitement en valeur mon portfolio. Exactement ce que je cherchais.",
      rating: 5
    },
    {
      name: "David Bernard",
      role: "Restaurant",
      content: "Site responsive et rapide. Mes clients peuvent maintenant réserver en ligne facilement.",
      rating: 5
    },
    {
      name: "Anne Petit",
      role: "Thérapeute",
      content: "Service professionnel et accompagnement personnalisé. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Marc Rousseau",
      role: "Architecte",
      content: "Qualité exceptionnelle pour le prix. Mon site reflète parfaitement mon activité.",
      rating: 5
    },
    {
      name: "Julie Garnier",
      role: "Fleuriste",
      content: "Très satisfaite du résultat. Le processus est simple et le rendu professionnel.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.floor(testimonials.length / itemsPerPage) * itemsPerPage : prev - itemsPerPage
    );
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos <span className="text-primary">clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={currentIndex + index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-primary text-xs">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:border-primary/40"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:border-primary/40"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-primary'
                    : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;