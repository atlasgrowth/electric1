import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Factory, Settings, Shield } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Industrial Power Systems",
    description: "High-capacity electrical systems for manufacturing and industrial facilities. We specialize in complex industrial power requirements.",
    features: [
      "High-voltage installations",
      "Power distribution systems",
      "Industrial controls",
      "Load calculations"
    ],
    id: "power-systems"
  },
  {
    icon: Settings,
    title: "Equipment Installation",
    description: "Specialized installation for industrial machinery and equipment, ensuring optimal performance and safety.",
    features: [
      "Machine power setup",
      "Control panel installation",
      "Motor controls",
      "Equipment testing"
    ],
    id: "equipment"
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Ensuring electrical systems meet industry safety standards and regulations.",
    features: [
      "OSHA compliance",
      "Safety system installation",
      "Regular inspections",
      "Documentation"
    ],
    id: "compliance"
  }
];

export default function IndustrialServices() {
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
            {business?.basic_info.name} Industrial Services
          </h1>
          <p className="text-xl text-gray-600">Heavy-duty solutions for industrial facilities</p>
          {business?.basic_info.city && (
            <p className="text-lg text-gray-500 mt-2">Serving industrial clients in {business.basic_info.city} and surrounding areas</p>
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
          <h2 className="text-2xl font-bold mb-4">Need Industrial Electrical Services?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us to discuss your industrial electrical requirements
          </p>
          <div className="text-2xl font-bold text-primary">
            {business?.basic_info.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
