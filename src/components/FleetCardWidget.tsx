import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export const FleetCardWidget: React.FC = () => {
  const [fleetSize, setFleetSize] = useState('5 - 15 Vehicles');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl my-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-flo-purple p-3 rounded-2xl text-white">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Commercial Accounts</span>
            <h3 className="text-2xl font-black text-gray-900">Apply for FLO Corporate Fleet Cards</h3>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-lg">Application Submitted!</h4>
            <p className="text-xs">Our fleet manager will contact <span className="font-bold">{phone}</span> to complete your account setup.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Fleet Size</label>
              <select
                value={fleetSize}
                onChange={(e) => setFleetSize(e.target.value)}
                className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-flo-purple"
              >
                <option value="1 - 5 Vehicles">1 - 5 Vehicles</option>
                <option value="5 - 15 Vehicles">5 - 15 Vehicles</option>
                <option value="15 - 50 Vehicles">15 - 50 Vehicles</option>
                <option value="50+ Heavy Fleets">50+ Heavy Fleets</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Company Name</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+263 77 ..."
                className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full py-3.5 flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:brightness-105 transition flex items-center justify-center space-x-2"
              >
                <span>Submit Fleet Card Application</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FleetCardWidget;
