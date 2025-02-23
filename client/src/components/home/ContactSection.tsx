import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { Phone, Mail, Clock } from "lucide-react";
import { getBusinessData } from "@/lib/utils";

export function ContactSection() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Need electrical services? Get in touch with our team of experts today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>{business?.basic_info.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="How can we help?" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
