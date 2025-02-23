import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building2, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Services",
    description: "Complete electrical solutions for your home, from repairs to installations.",
    link: "/services?type=residential"
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Professional electrical services for businesses of all sizes.",
    link: "/services?type=commercial"
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency electrical repair and support when you need it most.",
    link: "/services?type=emergency"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular maintenance and inspections to keep your electrical systems safe.",
    link: "/services?type=maintenance"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive electrical services for all your residential and commercial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
