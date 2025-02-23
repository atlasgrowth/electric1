
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Zap, Power, Tool, HomeIcon, Wrench, Phone, CheckCircle, BatteryCharging } from "lucide-react";
import { Link } from "wouter";

const mainServices = [
  {
    icon: Power,
    title: "Electrical Panel Upgrades",
    description: "Modern panel installations and upgrades for increased power capacity.",
    features: [
      "200-amp panel upgrades",
      "Circuit breaker replacements",
      "Code compliance updates",
      "Safety inspections included"
    ]
  },
  {
    icon: Shield,
    title: "Safety & Protection",
    description: "Comprehensive electrical safety solutions for your home.",
    features: [
      "GFCI installation",
      "Surge protection",
      "Smoke detector installation",
      "Child safety outlets"
    ]
  },
  {
    icon: HomeIcon,
    title: "Whole House Wiring",
    description: "Complete home electrical solutions from ground up.",
    features: [
      "New construction wiring",
      "Home renovation electrical",
      "Dedicated circuits",
      "Smart home wiring"
    ]
  }
];

const additionalServices = [
  {
    icon: Tool,
    title: "Repairs & Troubleshooting",
    description: "Fast, reliable electrical repair services"
  },
  {
    icon: Wrench,
    title: "Fixture Installation",
    description: "Professional lighting and fixture mounting"
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    description: "Electric vehicle charging solutions"
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
      <div className="relative h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Residential Electrical Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional electrical solutions for your home, delivering safety, reliability, and excellence in every service.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-black">
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            Call {business?.basic_info.phone}
          </Button>
        </div>
      </section>
    </div>
  );
}
