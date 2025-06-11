
import { useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Locations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      name: "FLO Energy Head Office",
      address: "123 Main Street, Harare, Zimbabwe",
      phone: "+263 29 2461125-7",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      name: "FLO Energy Bulawayo",
      address: "456 Industrial Road, Bulawayo, Zimbabwe",
      phone: "+263 29 2461125-7",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      name: "FLO Energy Mutare",
      address: "789 Commercial Avenue, Mutare, Zimbabwe",
      phone: "+263 29 2461125-7",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FLO Locations
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find FLO Energy stations and offices across Zimbabwe
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">{location.phone}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-gray-700">{location.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
