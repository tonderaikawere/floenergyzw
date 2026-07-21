import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Hero */}
      <section className="flo-hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
            <Lock className="w-4 h-4" />
            <span>Corporate Governance & Privacy</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">Privacy Policy & Data Protection</h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
            FLO Energy Zimbabwe is committed to protecting commercial client data, transaction privacy, and fleet card security.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-md space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-2xl font-black text-flo-purple mb-3">1. Information We Collect</h2>
            <p>
              When you submit bulk fuel quotation requests, register commercial fleet cards, or contact our customer support at FLO Energy Zimbabwe, we collect necessary business details including company name, contact person, phone number, email address, and fuel consumption volume estimates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-flo-purple mb-3">2. How We Use Commercial Data</h2>
            <p>
              Your commercial data is used solely to generate accurate bulk fuel quotations, manage fleet card PIN authorizations, schedule tanker dispatch deliveries, and fulfill regulatory compliance required by the Zimbabwe Energy Regulatory Authority (ZERA).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-flo-purple mb-3">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption, strict access controls, and secure database protocols to ensure your transaction statements and fleet fuel records remain strictly confidential and protected from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-flo-purple mb-3">4. Contact Information</h2>
            <p>
              For privacy or commercial data inquiries, please email us at <a href="mailto:sales1@floenergy.net" className="text-flo-purple font-bold">sales1@floenergy.net</a> or visit our corporate offices in Harare and Bulawayo.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
