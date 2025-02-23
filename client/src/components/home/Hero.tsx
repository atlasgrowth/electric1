import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getBusinessData } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Electrical Services You Can Trust
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Licensed electricians providing expert residential and commercial electrical services in {business?.basic_info.city}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              {business?.basic_info.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
