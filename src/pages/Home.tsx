import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import InduzyHero from '../components/InduzyHero';
import InduzyAboutSection from '../components/InduzyAboutSection';
import InduzyServicesGrid from '../components/InduzyServicesGrid';
import InduzyWhyChooseUs from '../components/InduzyWhyChooseUs';
import InduzyGallery from '../components/InduzyGallery';
import InduzyCallToAction from '../components/InduzyCallToAction';
import FuelCalculator from '../components/FuelCalculator';
import Testimonials from '../components/Testimonials';
import QuoteModal from '../components/QuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <FuelPriceTicker />

      {/* Induzy Hero Banner & Feature Cards */}
      <InduzyHero />

      {/* Induzy Welcome About Section */}
      <InduzyAboutSection />

      {/* Fuel Volume & Savings Calculator Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <FuelCalculator />
      </section>

      {/* Induzy 6-Column Services Showcase */}
      <InduzyServicesGrid />

      {/* Induzy Why Choose Us Quality Standards */}
      <InduzyWhyChooseUs />

      {/* Induzy Facilities & Terminals Gallery */}
      <InduzyGallery />

      {/* Commercial Client Reviews */}
      <Testimonials />

      {/* Induzy Call To Action Dispatch Strip */}
      <InduzyCallToAction />

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Home;
