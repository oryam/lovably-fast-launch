import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import InfoSection from "@/components/InfoSection";
import Portfolio from "@/components/Portfolio";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Création de Sites Web Rapide",
            "description": "Création de sites web professionnels en 30 minutes avec Lovable.io et GitHub. Service sans frais de maintenance.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "postalCode": "75015",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.8534,
              "longitude": 2.2945
            },
            "url": window.location.href,
            "telephone": "+33-1-XX-XX-XX-XX",
            "priceRange": "50€-100€",
            "serviceType": "Création de sites web",
            "areaServed": "France"
          })
        }}
      />
      
      <Hero />
      <ProcessSteps />
      <InfoSection />
      <Portfolio />
      <TestimonialsCarousel />
      <PricingSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
