
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Where can I purchase fuel from?",
      answer: "You can purchase fuel from any of our FLO Energy stations located across Zimbabwe. Visit our Locations page to find the nearest station to you."
    },
    {
      question: "What payment method can I use?",
      answer: "We accept cash, mobile money (EcoCash, OneMoney), bank transfers, and major credit/debit cards at our stations."
    },
    {
      question: "What are your hours?",
      answer: "Most of our stations operate 24/7, while our offices are open Monday to Friday from 8:00 AM to 5:00 PM. Specific hours may vary by location."
    },
    {
      question: "Is there a minimum fuel quantity when requiring delivery?",
      answer: "Yes, for bulk fuel delivery services, we have a minimum order requirement of 2000 litres."
    },
    {
      question: "Where do I get prices from?",
      answer: "For current fuel prices, please contact our offices directly or visit our stations. Bulk fuel prices are provided upon request due to market fluctuations."
    },
    {
      question: "What can we purchase from FLO?",
      answer: "We offer petrol, diesel, high-grade lubrication products through our partnership with Scope Lubricants, and various automotive services."
    },
    {
      question: "Why FLO?",
      answer: "With over 70 years of experience, FLO provides quality products, reliable service, competitive prices, and excellent customer support with trained staff."
    },
    {
      question: "How can I contact you if I need fuel or a delivery?",
      answer: "You can contact Adrian King at +263 77 224 5578, Nathan King at +263 71 221 3338, or email us at sales1@floenergy.net."
    },
    {
      question: "Are there credit facilities?",
      answer: "Yes, we offer credit facilities for qualified business customers. Please contact our offices to discuss terms and requirements."
    },
    {
      question: "What is the notice period to get fuel delivered?",
      answer: "We typically require 24-48 hours notice for bulk fuel delivery, depending on quantity and location. Contact us for urgent requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about FLO Energy services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
