import React, { useState } from 'react';
import { X, Fuel, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const AluwindQuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct = 'Diesel 50ppm (Bulk)' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    phone: '',
    email: '',
    product: defaultProduct,
    volumeLiters: '10000',
    deliveryLocation: 'Harare',
  });

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white max-w-lg w-full p-8 shadow-2xl border-t-8 border-[#4caf50] space-y-6">
        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-[#0f1f17] font-black">
            <Fuel className="w-5 h-5 text-[#4caf50]" />
            <span className="uppercase text-base">Request Instant Bulk Quotation</span>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#4caf50] mx-auto" />
            <h3 className="text-xl font-black text-[#0f1f17]">Quote Request Dispatched!</h3>
            <p className="text-gray-600 text-xs">Our commercial sales team (+263 77 224 5578) will respond within 30 minutes.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-800 mb-1">Company / Farm / Mining Name</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Zim Haulage Logistics Ltd"
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#4caf50] font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-800 mb-1">Contact Person</label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Adrian King"
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#4caf50] font-medium"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+263 77 224 5578"
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#4caf50] font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-800 mb-1">Fuel Product Grade</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#4caf50] font-bold"
                >
                  <option value="Diesel 50ppm (Bulk)">Diesel 50ppm (Bulk)</option>
                  <option value="Unleaded Petrol E10">Unleaded Petrol E10</option>
                  <option value="Industrial Fuel Oil (IFO)">Industrial Fuel Oil (IFO)</option>
                  <option value="LP Gas Cylinder / Bulk">LP Gas Cylinder / Bulk</option>
                  <option value="Fleet Card Registration">Fleet Card Registration</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-gray-800 mb-1">Required Volume (Liters)</label>
                <input
                  type="number"
                  required
                  value={formData.volumeLiters}
                  onChange={(e) => setFormData({ ...formData, volumeLiters: e.target.value })}
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-[#4caf50] font-bold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold py-3.5 uppercase tracking-widest transition flex items-center justify-center space-x-2"
            >
              <span>SUBMIT QUOTATION REQUEST</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AluwindQuoteModal;
