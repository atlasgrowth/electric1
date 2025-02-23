import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Zap, Power, Wrench, HomeIcon, Phone, CheckCircle, BatteryCharging } from "lucide-react";
import { Link } from "wouter";

const serviceCategories = [
  {
    title: "Installation Services",
    description: "Professional installation of electrical systems and equipment",
    services: [
      {
        icon: Power,
        title: "Panel Installation",
        description: "Modern electrical panel installations and upgrades",
        features: ["200-amp service upgrades", "Panel replacements", "Circuit additions"]
      },
      {
        icon: BatteryCharging,
        title: "EV Charging",
        description: "Electric vehicle charging station installation",
        features: ["Level 2 chargers", "Circuit installation", "Smart charging setup"]
      },
      {
        icon: Zap,
        title: "New Construction",
        description: "Complete electrical systems for new builds",
        features: ["Full home wiring", "Smart home integration", "Code compliance"]
      }
    ]
  },
  {
    title: "Maintenance & Safety",
    description: "Keep your electrical systems safe and efficient",
    services: [
      {
        icon: Shield,
        title: "Safety Inspections",
        description: "Comprehensive electrical system evaluations",
        features: ["Annual inspections", "Safety certifications", "Code compliance checks"]
      },
      {
        icon: HomeIcon,
        title: "Preventive Care",
        description: "Regular maintenance to prevent issues",
        features: ["System testing", "Component updates", "Performance optimization"]
      }
    ]
  },
  {
    title: "Emergency & Repairs",
    description: "Fast response when you need it most",
    services: [
      {
        icon: Wrench,
        title: "24/7 Emergency",
        description: "Round-the-clock emergency electrical services",
        features: ["Immediate response", "Critical repairs", "Safety restoration"]
      },
      {
        icon: Power,
        title: "Troubleshooting",
        description: "Expert diagnosis and repair solutions",
        features: ["Circuit issues", "Equipment failures", "Wiring problems"]
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
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-center mb-8">{category.title}</h3>
              <p className="text-lg text-center mb-12">{category.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 group">
                    <service.icon className="h-12 w-12 text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-8 text-lg">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-200">
                          <div className="h-2 w-2 bg-primary rounded-full" />
                          <span className="group-hover:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
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