import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Fuel } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState('Bulk Fuel Logistics');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Hero */}
      <section className="flo-hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>FLO Customer Support & Sales</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">Get in Touch with FLO Energy</h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
            Contact our commercial sales team in Harare and Bulawayo for bulk fuel orders, fleet cards, or service station inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-6">
              <h3 className="text-2xl font-black text-flo-purple border-b border-gray-100 pb-3">Direct Contact Channels</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Direct Sales Representatives</h4>
                    <p className="text-gray-600 text-xs mt-1">Adrian King: <a href="tel:+263772245578" className="font-bold text-flo-purple">+263 77 224 5578</a></p>
                    <p className="text-gray-600 text-xs mt-0.5">Nathan King: <a href="tel:+263712213338" className="font-bold text-flo-purple">+263 71 221 3338</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Email Inquiries</h4>
                    <a href="mailto:sales1@floenergy.net" className="text-xs font-bold text-flo-purple hover:underline">
                      sales1@floenergy.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Primary Operating Stations</h4>
                    <p className="text-gray-600 text-xs mt-1">• Donnybrook Service Station, Arcturus Rd, Harare</p>
                    <p className="text-gray-600 text-xs mt-0.5">• Burnside & Ironbridge Stations, Bulawayo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-flo-emerald mx-auto" />
                  <h3 className="text-2xl font-black text-flo-purple">Message Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for contacting FLO Energy Zimbabwe. Our sales team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Send an Inquiry</h3>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Target Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-flo-purple"
                    >
                      <option value="Bulk Fuel Logistics">Bulk Fuel Logistics & Tankers</option>
                      <option value="Retail Station Inquiry">Retail Station Inquiry</option>
                      <option value="Fleet Cards">Commercial Fleet Cards</option>
                      <option value="Lubricants & Oil">Lubricants & Technical Oil</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                      <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                      <input type="tel" required placeholder="+263 77 ..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message Detail</label>
                    <textarea rows={4} required placeholder="Write your inquiry or delivery specifications..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 flo-gold-gradient text-flo-dark font-extrabold text-sm rounded-xl shadow-md hover:brightness-105 transition flex items-center justify-center space-x-2"
                  >
                    <span>Submit Form</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
