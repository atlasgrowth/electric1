import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Settings, Activity, Zap } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Commercial Installation",
    description: "Complete electrical system installation for commercial properties. We handle everything from new construction to renovations, ensuring your business has reliable power.",
    features: [
      "New construction wiring",
      "Office building setup",
      "Retail space electrical",
      "Emergency backup systems"
    ],
    id: "installation"
  },
  {
    icon: Activity,
    title: "Energy Management",
    description: "Energy-efficient solutions and monitoring systems to reduce costs and improve sustainability.",
    features: [
      "Energy audits",
      "LED lighting upgrades",
      "Smart system installation",
      "Power consumption monitoring"
    ],
    id: "energy"
  },
  {
    icon: Zap,
    title: "Electrical Maintenance",
    description: "Regular maintenance and emergency repair services to keep your business running smoothly.",
    features: [
      "Preventive maintenance",
      "Emergency repairs",
      "System upgrades",
      "Code compliance checks"
    ],
    id: "maintenance"
  }
];

export default function CommercialServices() {
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
            {business?.basic_info.name} Commercial Services
          </h1>
          <p className="text-xl text-gray-600">Professional solutions for businesses</p>
          {business?.basic_info.city && (
            <p className="text-lg text-gray-500 mt-2">Serving businesses in {business.basic_info.city} and surrounding areas</p>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Power Your Business?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us for a commercial electrical consultation
          </p>
          <div className="text-2xl font-bold text-primary">
            {business?.basic_info.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
