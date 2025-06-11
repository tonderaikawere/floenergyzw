
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flo-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FLO Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quality products and services that are tailor-made for you. Whether you require one litre or hundreds of thousands of litres, we will create a turn key solution so that you or your company can drive forward.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Fuel Supply & Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We can deliver the product to your doorstep with minimum orders of 2000 litres. Quality fuel products delivered nationwide with our reliable delivery service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Lubrication Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We have partnered with Scope Lubricants to offer our customers competitive high-grade lubrication products for all your machinery needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Bulk Fuel Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Customized bulk fuel solutions for businesses of all sizes. From small quantities to large industrial requirements, we have you covered.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Environmental Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Strict loading and off-loading procedures with full compliance to environmental agencies. We're passionate about protecting our environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our staff are trained tri-annually to retain efficiency and reliability. Customer service and satisfaction are priorities at FLO.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We ensure quality of all of our products across our sites nationwide. Exemplary services apply where you require bulk delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Service Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-4">70+</div>
              <p className="text-gray-700">Years of experience in the fuel industry</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-4">24/7</div>
              <p className="text-gray-700">Customer support and emergency services</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <p className="text-gray-700">Quality guaranteed across all our products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
