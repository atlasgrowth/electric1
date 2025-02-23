import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { getBusinessData } from "@/lib/utils";

export function Footer() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{business?.basic_info.name}</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {business?.basic_info.phone}
            </p>
            {business?.basic_info.city && (
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {business?.basic_info.city}
              </p>
            )}
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@example.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Residential Electrical</li>
            <li>Commercial Electrical</li>
            <li>Emergency Services</li>
            <li>Electrical Maintenance</li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} {business?.basic_info.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
