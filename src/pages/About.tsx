
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About FLO Energy
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            With over 70 years of experience in the fuel industry, FLO offers you the right service, at the right price.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  "FLO has a dedicated passion for people and aspires to make every person feel valued for their contribution. This focus on every individual reaching their potential enhances loyalty and dedication within FLO."
                </p>
                <p>
                  Our progress and sustainable growth in the energy sector go hand in hand with our desire and responsibility to consciously conserve and preserve our environment.
                </p>
                <p>
                  Approachable leadership encourages wisdom and innovation to the forefront which translates to prosperity for all. Hard work ethic forms the FLO cornerstone and within a culture of loyalty, dignity and integrity we continue to elevate FLO in the competitive energy sector.
                </p>
                <p className="font-semibold text-primary">
                  This Zimbabwean Company is open for business
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg"
                alt="FLO Energy Station"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide quality fuel products and services with over 70 years of experience, 
                  ensuring reliability and customer satisfaction at competitive prices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be Zimbabwe's leading energy company, driving growth through innovation, 
                  environmental responsibility, and exceptional service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
