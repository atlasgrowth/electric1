import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Wrench, Zap, Settings, Activity, Power, Factory } from "lucide-react";
import React from "react";

const serviceTypes = {
  residential: {
    title: "Residential Electrical Services",
    description: "Complete electrical solutions for your home",
    services: [
      {
        icon: Power,
        title: "Electrical Panel Upgrades",
        description: "Modern panel installations and upgrades for increased power capacity",
        id: "panel-upgrades"
      },
      {
        icon: Shield,
        title: "Safety Inspections",
        description: "Comprehensive electrical safety inspections and repairs",
        id: "safety"
      },
      {
        icon: Wrench,
        title: "Wiring & Rewiring",
        description: "Expert installation of new wiring and rewiring services",
        id: "wiring"
      }
    ]
  },
  commercial: {
    title: "Commercial Electrical Services",
    description: "Professional solutions for businesses",
    services: [
      {
        icon: Settings,
        title: "Commercial Installation",
        description: "Complete electrical system installation for commercial properties",
        id: "installation"
      },
      {
        icon: Activity,
        title: "Energy Management",
        description: "Energy-efficient solutions and monitoring systems",
        id: "energy"
      },
      {
        icon: Zap,
        title: "Electrical Maintenance",
        description: "Regular maintenance and emergency repair services",
        id: "maintenance"
      }
    ]
  },
  industrial: {
    title: "Industrial Electrical Services",
    description: "Heavy-duty solutions for industrial facilities",
    services: [
      {
        icon: Factory,
        title: "Industrial Power Systems",
        description: "High-capacity electrical systems for manufacturing and industrial facilities",
        id: "power-systems"
      },
      {
        icon: Settings,
        title: "Equipment Installation",
        description: "Specialized installation for industrial machinery and equipment",
        id: "equipment"
      },
      {
        icon: Shield,
        title: "Safety Compliance",
        description: "Ensuring electrical systems meet industry safety standards",
        id: "compliance"
      }
    ]
  }
};

export default function Services() {
  const [location] = useLocation();
  const type = new URLSearchParams(location.split('?')[1]).get('type') || 'residential';
  const hash = location.split('#')[1];

  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const currentServices = serviceTypes[type as keyof typeof serviceTypes];

  // Scroll to the section if there's a hash in the URL
  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {business?.basic_info.name} {currentServices.title}
          </h1>
          <p className="text-muted-foreground">{currentServices.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentServices.services.map((service, index) => (
            <Card key={index} id={service.id}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Contact us at {business?.basic_info.phone} to schedule a consultation
          </p>
        </div>
      </div>
    </div>
  );
}