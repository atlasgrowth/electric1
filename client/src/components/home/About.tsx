import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";

export function About() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div 
            className="h-[500px] bg-cover bg-center rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            style={{ 
              backgroundImage: 'url(https://assets.cdn.filesafe.space/A9rd4HdLD0sTvRuuQFZl/media/65146ad76f44431d743d2eae.jpeg)',
              backgroundPosition: 'center 20%'
            }}
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About {business?.basic_info.name}
              {business?.basic_info.city && ` in ${business.basic_info.city}`}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {business?.basic_info.name} brings over two decades of experience in electrical services. Our team of licensed professionals is dedicated to delivering exceptional quality workmanship and outstanding customer service. We take pride in our attention to detail and commitment to safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Full coverage and certified expertise for your peace of mind
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Prompt Response</h3>
                <p className="text-gray-600">
                  Quick and reliable service when you need electrical assistance
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  Satisfaction guaranteed on all our electrical work
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Experienced Team</h3>
                <p className="text-gray-600">
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