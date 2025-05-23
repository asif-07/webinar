
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Star, Circle } from 'lucide-react';

const faqs = [
  {
    question: "What is the exact date and time of the workshop?",
    answer: "The workshop is scheduled for December 28, 2024, and will run for 3 intensive hours. You'll receive the exact timing details upon registration along with calendar invites and reminder notifications.",
    icon: Calendar
  },
  {
    question: "Do I need any technical background to attend?",
    answer: "Not at all! This workshop is specifically designed for executives and business leaders without requiring any technical background. We focus on practical applications and business value rather than technical complexity.",
    icon: Star
  },
  {
    question: "Will I get access to the recording if I can't attend live?",
    answer: "Yes! All registered participants receive lifetime access to the full workshop recording, along with downloadable resources, slides, and bonus materials. You can watch and re-watch at your convenience.",
    icon: Clock
  },
  {
    question: "What makes this different from other AI workshops?",
    answer: "Our workshop is exclusively designed for executive-level professionals, focusing on strategic implementation rather than technical details. You'll learn practical skills you can implement immediately, with real business case studies and executive-focused content.",
    icon: Circle
  },
  {
    question: "Is there ongoing support after the workshop?",
    answer: "Absolutely! You'll get access to our exclusive private community of executives, 30 days of email support, and ongoing resources to help you implement what you've learned effectively in your organization.",
    icon: Star
  },
  {
    question: "What if I'm not satisfied with the workshop?",
    answer: "We offer a 100% money-back guarantee. If you're not completely satisfied with the value provided, we'll refund your investment within 30 days, no questions asked.",
    icon: Circle
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about the workshop
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center gap-4 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Question */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Toggle Indicator */}
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-400 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                </button>
                
                {/* Answer */}
                <div className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 pl-20">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
