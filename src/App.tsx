import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AluwindLayout from './components/AluwindLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Locations from './pages/Locations';
import BulkFuel from './pages/BulkFuel';
import FleetCard from './pages/FleetCard';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <AluwindLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/bulk-fuel" element={<BulkFuel />} />
          <Route path="/fleet-card" element={<FleetCard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </AluwindLayout>
    </Router>
  );
}

export default App;
