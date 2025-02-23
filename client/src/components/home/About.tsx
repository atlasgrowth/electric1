import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground mb-6">
              With over 20 years of experience, we provide reliable and professional electrical services for all your needs. Our team of licensed electricians is committed to delivering exceptional quality work and ensuring complete customer satisfaction.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground">
                    Fully licensed electricians with comprehensive insurance coverage for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">24/7 Emergency Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock availability for emergency electrical repairs when you need them most.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">
                    Our work is backed by a 100% satisfaction guarantee. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="h-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000)'
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
