import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getBusinessData } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000",
    title: "Professional Electrical Services",
    subtitle: "Licensed & Insured Electricians at Your Service"
  },
  {
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38c961?auto=format&fit=crop&q=80&w=2000",
    title: "24/7 Emergency Service",
    subtitle: "Fast Response When You Need Us Most"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {slides[currentSlide].subtitle}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                <Link href="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 h-5 w-5" />
                {business?.basic_info.phone || 'Call Now'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}