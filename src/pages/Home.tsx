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
      {/* 3-Tier Induzy Header */}
      <Header />
      
      {/* Live Daily Fuel Rates Ticker */}
      <FuelPriceTicker />

      {/* Induzy Hero Banner & 3-Color Overlapping Feature Cards */}
      <InduzyHero />

      {/* Induzy About Us Section with 12+ Experience Badge */}
      <InduzyAboutSection />

      {/* Induzy 6-Column Industrial Services Grid */}
      <InduzyServicesGrid />

      {/* Bulk Fuel Volume & Savings Calculator */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <FuelCalculator />
      </section>

      {/* Induzy Why Choose Us Counter & Standards Section */}
      <InduzyWhyChooseUs />

      {/* Induzy Infrastructure & Terminal Gallery */}
      <InduzyGallery />

      {/* Commercial Partner Reviews */}
      <Testimonials />

      {/* Induzy Full-Width Yellow CTA Strip */}
      <InduzyCallToAction />

      {/* Induzy 4-Column Dark Footer */}
      <Footer />
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Home;
