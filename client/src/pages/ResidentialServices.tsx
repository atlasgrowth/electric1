import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Wrench, Power } from "lucide-react";

const services = [
  {
    icon: Power,
    title: "Electrical Panel Upgrades",
    description: "Modern panel installations and upgrades for increased power capacity. We specialize in upgrading outdated electrical panels to meet modern power demands, ensuring your home's electrical system is safe and efficient.",
    features: [
      "200-amp panel upgrades",
      "Circuit breaker replacements",
      "Code compliance updates",
      "Safety inspections included"
    ],
    id: "panel-upgrades"
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and repairs to protect your home and family. Our thorough inspection process identifies potential hazards before they become dangerous.",
    features: [
      "Complete system evaluation",
      "GFCI protection assessment",
      "Smoke detector testing",
      "Written inspection report"
    ],
    id: "safety"
  },
  {
    icon: Wrench,
    title: "Wiring & Rewiring",
    description: "Expert installation of new wiring and rewiring services for older homes. We ensure your electrical system meets modern standards and can handle today's technology demands.",
    features: [
      "Whole-house rewiring",
      "Outlet installation",
      "Lighting circuit installation",
      "Dedicated circuits for appliances"
    ],
    id: "wiring"
  }
];

export default function ResidentialServices() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {business?.basic_info.name} Residential Services
          </h1>
          <p className="text-xl text-gray-600">Complete electrical solutions for your home</p>
          {business?.basic_info.city && (
            <p className="text-lg text-gray-500 mt-2">Serving {business.basic_info.city} and surrounding areas</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us for a free consultation and estimate for your home electrical needs
          </p>
          <div className="text-2xl font-bold text-primary">
            {business?.basic_info.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
