import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import EmergencyDispatch from '../components/EmergencyDispatch';
import FeedbackWidget from '../components/FeedbackWidget';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState('Bulk Fuel Logistics');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <h1 className="text-3xl sm:text-4xl font-extrabold">Get in Touch with FLO Energy</h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Contact our commercial sales team in Harare and Bulawayo for bulk fuel orders, fleet cards, or service station inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">Direct Contact Channels</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-aluwind-light p-3 text-aluwind-dark shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-sans">Direct Sales Representatives</h4>
                    <p className="text-gray-600 text-xs mt-1">Adrian King: <a href="tel:+263772245578" className="font-bold text-aluwind-green">+263 77 224 5578</a></p>
                    <p className="text-gray-600 text-xs mt-0.5">Nathan King: <a href="tel:+263712213338" className="font-bold text-aluwind-green">+263 71 221 3338</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-aluwind-light p-3 text-aluwind-dark shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-sans font-bold">Email Inquiries</h4>
                    <a href="mailto:sales1@floenergy.net" className="text-xs font-bold text-aluwind-green hover:underline">
                      sales1@floenergy.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-aluwind-light p-3 text-aluwind-dark shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 font-sans">Primary Operating Stations</h4>
                    <p className="text-gray-600 text-xs mt-1">• Donnybrook Service Station, Arcturus Rd, Harare</p>
                    <p className="text-gray-600 text-xs mt-0.5">• Burnside & Ironbridge Stations, Bulawayo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-aluwind-green mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-gray-600 text-xs max-w-md mx-auto">
                    Thank you for contacting FLO Energy Zimbabwe. Our sales team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Send an Inquiry</h3>

                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase tracking-widest mb-1">Target Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 bg-white rounded-none text-xs focus:ring-1 focus:ring-aluwind-green outline-none"
                    >
                      <option value="Bulk Fuel Logistics">Bulk Fuel Logistics & Tankers</option>
                      <option value="Retail Station Inquiry">Retail Station Inquiry</option>
                      <option value="Fleet Cards">Commercial Fleet Cards</option>
                      <option value="Lubricants & Oil">Lubricants & Technical Oil</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-700 uppercase tracking-widest mb-1">Your Name</label>
                      <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 bg-white rounded-none text-xs focus:ring-1 focus:ring-aluwind-green outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-700 uppercase tracking-widest mb-1">Phone Number</label>
                      <input type="tel" required placeholder="+263 77 ..." className="w-full px-4 py-3 border border-gray-200 bg-white rounded-none text-xs focus:ring-1 focus:ring-aluwind-green outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase tracking-widest mb-1">Message Detail</label>
                    <textarea rows={4} required placeholder="Write your inquiry or delivery specifications..." className="w-full px-4 py-3 border border-gray-200 bg-white rounded-none text-xs focus:ring-1 focus:ring-aluwind-green outline-none"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-aluwind-green hover:bg-aluwind-green/90 text-white font-extrabold text-[11px] uppercase tracking-widest transition flex items-center justify-center space-x-2"
                  >
                    <span>Submit Form</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <EmergencyDispatch />
          <FeedbackWidget />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
