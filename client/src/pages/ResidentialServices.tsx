
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Shield, Zap, Power, Wrench, HomeIcon, Phone, CheckCircle, BatteryCharging, Clock } from "lucide-react";
import { Link } from "wouter";
import { getBusinessData } from "@/lib/utils";

const serviceCategories = [
  {
    title: "Installation Services",
    description: "Professional electrical installation solutions for your home",
    services: [
      {
        icon: Power,
        title: "Panel Upgrades",
        description: "Modern electrical panel installations and upgrades",
        features: ["200-amp service upgrades", "Circuit breaker installations", "Code compliance"]
      },
      {
        icon: HomeIcon,
        title: "Home Wiring",
        description: "Complete home wiring and rewiring services",
        features: ["New construction wiring", "Outlet installation", "Lighting circuits"]
      }
    ]
  },
  {
    title: "Emergency & Maintenance",
    description: "24/7 emergency services and regular maintenance",
    services: [
      {
        icon: Clock,
        title: "Emergency Services",
        description: "Round-the-clock emergency electrical support",
        features: ["24/7 availability", "Fast response times", "Emergency repairs"]
      },
      {
        icon: Shield,
        title: "Safety Inspections",
        description: "Comprehensive electrical safety checks",
        features: ["Annual inspections", "Safety upgrades", "Code compliance"]
      }
    ]
  }
];

export default function ResidentialServices() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50 z-0"></div>
        <div className="container relative z-10 text-center text-white pt-32">
          <h1 className="text-5xl font-bold mb-6">
            {business?.basic_info.name} Residential Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for comprehensive residential electrical solutions. With years of experience serving {business?.basic_info.city}, we deliver professional, reliable, and safe electrical services for your home.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href={`tel:${business?.basic_info.phone}`}>
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-black">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="container">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIdx) => (
                  <Card key={serviceIdx}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIdx) => (
                              <li key={featureIdx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for a free consultation and estimate
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={`tel:${business?.basic_info.phone}`}>
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                {business?.basic_info.phone}
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
