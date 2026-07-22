import React from 'react';
import AluwindHero from '../components/AluwindHero';
import AluwindProductionSection from '../components/AluwindProductionSection';
import AluwindPartnerSection from '../components/AluwindPartnerSection';
import AluwindSpecsSection from '../components/AluwindSpecsSection';
import AluwindSupportBanner from '../components/AluwindSupportBanner';
import AluwindZeraBadge from '../components/AluwindZeraBadge';
import AluwindDensityCalculator from '../components/AluwindDensityCalculator';

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Banner & 3 Cards */}
      <AluwindHero />

      {/* Production & Quality Showcase (2 Columns) */}
      <AluwindProductionSection />

      {/* Experienced Partner Section (Dark Green with 3 Image Cards) */}
      <AluwindPartnerSection />

      {/* Robust Fuel Delivery Section */}
      <AluwindSpecsSection />

      {/* Density & Temperature Correction Calculator */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <AluwindZeraBadge />
        <AluwindDensityCalculator />
      </div>

      {/* Support Banner */}
      <AluwindSupportBanner />
    </div>
  );
};

export default Home;
