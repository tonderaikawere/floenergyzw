import React, { useState } from 'react';
import { X, Send, CheckCircle2, Fuel, ShieldCheck } from 'lucide-react';
import ReceiptSimulator from './ReceiptSimulator';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct = 'Bulk Diesel 50ppm' }) => {
  const [product, setProduct] = useState(defaultProduct);
  const [volume, setVolume] = useState('5000');
  const [location, setLocation] = useState('Harare');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-flo-purple/10">
        {/* Header */}
        <div className="flo-gradient text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-flo-gold p-2.5 rounded-xl text-flo-dark">
              <Fuel className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Bulk Fuel Quote</h3>
              <p className="text-xs text-white/80">Direct from FLO Energy Zimbabwe Logistics</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-flo-emerald mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-flo-purple">Quote Request Sent!</h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{name}</span>. Our FLO sales team will call you at <span className="font-semibold text-gray-900">{phone}</span> within 15 minutes.
              </p>
              <ReceiptSimulator
                product={product}
                volume={volume}
                location={location}
                totalEst={`$${(Number(volume) * 1.48).toLocaleString()}`}
              />
              <div className="inline-flex items-center text-xs text-flo-emerald bg-flo-emerald/10 px-3 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-4 h-4 mr-1" /> Guaranteed ZERA Quality & SLA
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Product / Service
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm bg-gray-50"
                >
                  <option value="Bulk Diesel 50ppm">Bulk Diesel 50ppm</option>
                  <option value="Unleaded Petrol E10">Unleaded Petrol E10</option>
                  <option value="Industrial Fuel Oil (IFO)">Industrial Fuel Oil (IFO)</option>
                  <option value="Commercial Lubricants">Commercial Lubricants</option>
                  <option value="Fleet Card Service">Fleet Card Management</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Volume (Liters)
                  </label>
                  <input
                    type="number"
                    required
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g. 5000"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Delivery City
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Harare / Bulawayo"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name / Company
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name or Company"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+263 77 ..."
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sales@company.co.zw"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-flo-purple focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 flo-gold-gradient text-flo-dark font-bold text-sm rounded-xl shadow-lg hover:brightness-105 transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Request Official Quotation</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuoteModal;
