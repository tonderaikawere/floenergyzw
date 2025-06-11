
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCountUp } from '@/hooks/useCountUp';
import { Smartphone, Users, Award, Zap, Leaf, Shield, ChevronDown } from 'lucide-react';

const CounterCard = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const { count, elementRef } = useCountUp({ end });
  
  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-white/90">{label}</div>
    </div>
  );
};

const ScrollIcon = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
    >
      <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
      <ChevronDown className="w-6 h-6 text-white/70 mx-auto mt-2" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen md:h-[50vh] lg:h-screen overflow-hidden">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg')"
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
            {/* Main Logo/Title with Animation */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wider">
                <span className="inline-block transform hover:scale-110 transition-transform duration-300">F</span>
                <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-100">L</span>
                <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-200">O</span>
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6 animate-scale-in" />
            </div>
            
            {/* Tagline with Typing Effect */}
            <div className="mb-12 animate-fade-in delay-300">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                Energy for <span className="font-bold flo-text-gradient bg-white bg-clip-text text-transparent">growth</span>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Powering Zimbabwe's future with quality fuel solutions and exceptional service
              </p>
            </div>
            
            {/* CTA Buttons with Enhanced Styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Find a station near you
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-ping" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold w-full sm:w-auto transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Smartphone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Download FLO Orders App
              </Button>
            </div>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-700">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">70+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-80">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">10K+</div>
                <div className="text-sm opacity-80">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">99%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <ScrollIcon />
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About FLO Energy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base md:text-lg">
                  "FLO has a dedicated passion for people and aspires to make every person feel valued for their contribution. This focus on every individual reaching their potential enhances loyalty and dedication within FLO."
                </p>
                <p className="text-base md:text-lg">
                  Our progress and sustainable growth in the energy sector go hand in hand with our desire and responsibility to consciously conserve and preserve our environment.
                </p>
                <p className="text-base md:text-lg">
                  Approachable leadership encourages wisdom and innovation to the forefront which translates to prosperity for all. Hard work ethic forms the FLO cornerstone and within a culture of loyalty, dignity and integrity we continue to elevate FLO in the competitive energy sector.
                </p>
                <p className="font-semibold text-primary text-lg md:text-xl">
                  This Zimbabwean Company is open for business
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg"
                alt="FLO Energy Station"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FLO Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Quality products and services that are tailor-made for you. Whether you require one litre or hundreds of thousands of litres, we will create a turn key solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Fuel Supply</h3>
                <p className="text-gray-700">
                  Quality fuel products delivered to your doorstep with minimum orders of 2000 litres.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Lubrication Products</h3>
                <p className="text-gray-700">
                  High-grade lubrication products through our partnership with Scope Lubricants.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Customer Service</h3>
                <p className="text-gray-700">
                  Trained staff providing reliable service with customer satisfaction as our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FLO Orders App Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="h-12 w-12 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  FLO Orders App
                </h2>
              </div>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Order fuel on-the-go with our convenient mobile application. Track deliveries, 
                manage orders, and access exclusive deals right from your smartphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <Smartphone className="h-32 w-32 mx-auto mb-4 opacity-80" />
                <p className="text-lg">Experience the future of fuel ordering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FLO Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FLO Energy?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Discover what makes FLO Energy the preferred choice for fuel and energy solutions across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-700">Premium quality fuel products that meet international standards</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Service</h3>
              <p className="text-gray-700">Quick and efficient fuel delivery with minimal wait times</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Care</h3>
              <p className="text-gray-700">Committed to environmental protection and sustainable practices</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-700">Strict safety protocols and compliance with industry standards</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-700">Experienced professionals trained to provide exceptional service</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Innovation</h3>
              <p className="text-gray-700">Modern technology solutions including our FLO Orders mobile app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Animated Counters */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Decades of experience serving Zimbabwe's energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterCard end={70} label="Years of Experience" suffix="+" />
            <CounterCard end={50} label="Service Locations" suffix="+" />
            <CounterCard end={10000} label="Happy Customers" suffix="+" />
            <CounterCard end={99} label="Customer Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from businesses and individuals who trust FLO Energy for their fuel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">John Mukamuri</h4>
                    <p className="text-sm text-gray-600">Transport Manager</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "FLO Energy has been our trusted fuel supplier for over 5 years. Their reliability and quality service keep our fleet running smoothly."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Moyo</h4>
                    <p className="text-sm text-gray-600">Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The FLO Orders app makes fuel ordering so convenient. Quick delivery and excellent customer service every time."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    TC
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Tendai Chigwedere</h4>
                    <p className="text-sm text-gray-600">Logistics Coordinator</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Professional service and competitive prices. FLO Energy understands our business needs and delivers consistently."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with FLO Energy?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today for all your fuel and energy needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Download FLO Orders
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
