import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle2, Send } from 'lucide-react';

export const FeedbackWidget: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-gold/20 p-3 rounded-2xl text-flo-purple border border-flo-gold/40">
          <MessageSquare className="w-6 h-6 text-flo-purple" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Customer Experience</span>
          <h3 className="text-xl font-extrabold text-gray-900">Station Service Feedback</h3>
        </div>
      </div>

      {submitted ? (
        <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
          <h4 className="font-bold text-base">Thank You for Your Feedback!</h4>
          <p className="text-xs">Your review helps FLO Energy maintain 100% station quality standards across Zimbabwe.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Overall Station Rating</label>
            <div className="flex space-x-2 text-flo-gold">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-125 transition"
                >
                  <Star className={`w-6 h-6 ${star <= rating ? 'fill-current text-flo-gold' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Comments or Suggestions</label>
            <textarea
              rows={3}
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about pump speed, staff courtesy, or fuel quality..."
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase rounded-xl shadow hover:brightness-105 transition flex items-center justify-center space-x-2"
          >
            <span>Submit Station Review</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackWidget;
