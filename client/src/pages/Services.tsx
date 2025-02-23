import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Wrench, Zap, Settings, Activity, Power, Factory } from "lucide-react";

const serviceTypes = {
  residential: {
    title: "Residential Electrical Services",
    description: "Complete electrical solutions for your home",
    services: [
      {
        icon: Power,
        title: "Electrical Panel Upgrades",
        description: "Modern panel installations and upgrades for increased power capacity"
      },
      {
        icon: Shield,
        title: "Safety Inspections",
        description: "Comprehensive electrical safety inspections and repairs"
      },
      {
        icon: Wrench,
        title: "Wiring & Rewiring",
        description: "Expert installation of new wiring and rewiring services"
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
        description: "Complete electrical system installation for commercial properties"
      },
      {
        icon: Activity,
        title: "Energy Management",
        description: "Energy-efficient solutions and monitoring systems"
      },
      {
        icon: Zap,
        title: "Electrical Maintenance",
        description: "Regular maintenance and emergency repair services"
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
        description: "High-capacity electrical systems for manufacturing and industrial facilities"
      },
      {
        icon: Settings,
        title: "Equipment Installation",
        description: "Specialized installation for industrial machinery and equipment"
      },
      {
        icon: Shield,
        title: "Safety Compliance",
        description: "Ensuring electrical systems meet industry safety standards"
      }
    ]
  }
};

export default function Services() {
  const [location] = useLocation();
  const type = new URLSearchParams(location.split('?')[1]).get('type') || 'residential';

  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const currentServices = serviceTypes[type as keyof typeof serviceTypes];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {business?.basic_info.name} {currentServices.title}
          </h1>
          <p className="text-muted-foreground">{currentServices.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentServices.services.map((service, index) => (
            <Card key={index}>
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