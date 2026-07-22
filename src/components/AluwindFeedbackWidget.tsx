import React, { useState } from 'react';
import { Star, Send, CheckCircle2 } from 'lucide-react';

export const AluwindFeedbackWidget: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm font-sans my-8 space-y-4">
      <h3 className="text-xl font-black text-[#0f1f17]">Station Experience & Rating Feedback</h3>

      {submitted ? (
        <div className="p-4 bg-[#d4edda] text-[#2e7d32] font-bold text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>Thank you for your rating! Your feedback helps us maintain pump accuracy and speed.</span>
        </div>
      ) : (
        <div className="space-y-3 text-xs">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`p-1 ${star <= rating ? 'text-[#4caf50]' : 'text-gray-300'}`}
              >
                <Star className="w-6 h-6 fill-current" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold px-6 py-2.5 uppercase tracking-widest text-[11px] transition inline-flex items-center space-x-2"
          >
            <span>SUBMIT FEEDBACK</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AluwindFeedbackWidget;
