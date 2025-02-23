import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Shield, Zap, Power, Wrench, HomeIcon, Phone, CheckCircle, BatteryCharging, Clock } from "lucide-react";
import { Link } from "wouter";
//import { ContactSection } from "@/components/home/ContactSection";
//import Reviews from "@/components/home/Reviews";

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
            {business?.basic_info.name} Residential Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for comprehensive residential electrical solutions. With years of experience serving {business?.basic_info.city}, we deliver professional, reliable, and safe electrical services for your home.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="tel:${business?.basic_info.phone}">
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

      {/* Service Categories */}
      {serviceCategories.map((category, idx) => (
        <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
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
      ))}

      {/* Reviews Section */}
      {/*<Reviews />*/}

      {/* Contact Form Section */}
      <div id="contact">
        <div className="mt-8 text-center">
          <Button onClick={() => window.location.href = '/'} size="lg">
            Contact Us
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact {business?.basic_info.name} for expert residential electrical services</p>
          <div className="flex gap-6 justify-center">
            <Link href="tel:${business?.basic_info.phone}">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                {business?.basic_info.phone}
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}