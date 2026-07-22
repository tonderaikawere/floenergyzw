import React from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import WindLeafIcon from '../components/WindLeafIcon';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Hero */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="flex justify-center mb-2">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Privacy Policy & Data Protection</h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            FLO Energy Zimbabwe is committed to protecting commercial client data, transaction privacy, and fleet card security.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-gray-50 p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8 text-gray-700 leading-relaxed text-xs sm:text-sm">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              When you submit bulk fuel quotation requests, register commercial fleet cards, or contact our customer support at FLO Energy Zimbabwe, we collect necessary business details including company name, contact person, phone number, email address, and fuel consumption volume estimates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. How We Use Commercial Data</h2>
            <p>
              Your commercial data is used solely to generate accurate bulk fuel quotations, manage fleet card PIN authorizations, schedule tanker dispatch deliveries, and fulfill regulatory compliance required by the Zimbabwe Energy Regulatory Authority (ZERA).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption, strict access controls, and secure database protocols to ensure your transaction statements and fleet fuel records remain strictly confidential and protected from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Contact Information</h2>
            <p>
              For privacy or commercial data inquiries, please email us at <a href="mailto:sales1@floenergy.net" className="text-aluwind-green font-bold">sales1@floenergy.net</a> or visit our corporate offices in Harare and Bulawayo.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
