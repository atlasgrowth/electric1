import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";

export function About() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="h-[500px] bg-cover bg-center rounded-lg shadow-xl"
            style={{ 
              backgroundImage: 'url(https://assets.cdn.filesafe.space/A9rd4HdLD0sTvRuuQFZl/media/65146ad76f44431d743d2eae.jpeg)',
              backgroundPosition: 'center 20%'
            }}
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}
            </h2>
            <p className="text-muted-foreground mb-8">
              {business?.basic_info.name} brings over two decades of experience in electrical services. Our team of licensed professionals is dedicated to delivering exceptional quality workmanship and outstanding customer service. We take pride in our attention to detail and commitment to safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Full coverage and certified expertise for your peace of mind
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Prompt Response</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and reliable service when you need electrical assistance
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  Satisfaction guaranteed on all our electrical work
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Experienced Team</h3>
                <p className="text-sm text-muted-foreground">
                  Over 20 years of electrical service excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}