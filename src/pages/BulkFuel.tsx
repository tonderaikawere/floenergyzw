
import { useEffect } from 'react';
import { Fuel, Truck, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BulkFuel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Fuel,
      title: "Quality Fuel",
      description: "Premium quality fuel products delivered to your location"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "On-time delivery with minimum orders of 2000 litres"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict loading and off-loading procedures for safety"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your needs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bulk Fuel Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quality fuel delivery services for your business needs
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Current Pricing</h2>
              <p className="text-gray-700 mb-6">
                Due to constantly changing bulk fuel prices, we cannot put a fixed figure on this website. 
                However, feel free to get in contact with us and we will give you the most accurate price at the present time.
              </p>
              <div className="space-y-2 text-lg">
                <p><strong>Adrian King:</strong> +263 77 224 5578</p>
                <p><strong>Nathan King:</strong> +263 71 221 3338</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose FLO Bulk Fuel?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive bulk fuel solutions tailored to your business requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Bulk Fuel?</h2>
          <p className="text-xl mb-8">Contact our team for competitive pricing and reliable delivery</p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BulkFuel;
