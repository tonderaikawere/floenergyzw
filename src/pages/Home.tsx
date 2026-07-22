import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import AluwindHero from '../components/AluwindHero';
import AluwindHeroCards from '../components/AluwindHeroCards';
import AluwindProductionSection from '../components/AluwindProductionSection';
import AluwindPartnerSection from '../components/AluwindPartnerSection';
import AluwindRobustSection from '../components/AluwindRobustSection';
import AluwindOptimizedSection from '../components/AluwindOptimizedSection';
import AluwindContactSection from '../components/AluwindContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header Top Bar */}
      <AluwindHeaderTop />
      
      {/* Navigation Bar */}
      <AluwindNavbar />

      {/* Hero Banner */}
      <AluwindHero />

      {/* Overlapping Info Cards */}
      <AluwindHeroCards />

      {/* Production Section */}
      <AluwindProductionSection />

      {/* Partner Section */}
      <AluwindPartnerSection />

      {/* Robust Section */}
      <AluwindRobustSection />

      {/* Optimized Banner */}
      <AluwindOptimizedSection />

      {/* Contact Section */}
      <AluwindContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
