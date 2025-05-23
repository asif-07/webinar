
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "Global Innovations Ltd",
    quote: "This workshop transformed my understanding of AI. The practical applications I learned have already improved our decision-making process significantly.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Rodriguez", 
    role: "Managing Director",
    company: "Strategic Solutions Group",
    quote: "Outstanding content delivered by true experts. The prompt engineering techniques alone have revolutionized how we interact with AI tools.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Dr. Emily Watson",
    role: "VP of Operations", 
    company: "Healthcare Innovations",
    quote: "Finally, an AI workshop designed for executives! Clear, actionable insights without the technical jargon. Highly recommended for any leader.",
    rating: 5,
    avatar: "👩‍⚕️"
  },
  {
    name: "James Thompson",
    role: "CEO",
    company: "Digital Ventures Inc",
    quote: "The cybersecurity module was particularly valuable. I now feel confident leading our digital transformation with proper security measures in place.",
    rating: 5,
    avatar: "👨‍💻"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Leaders <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of executives who have transformed their digital leadership through our workshops.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 max-w-4xl mx-auto">
                  <CardContent className="p-8 text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      
                      {/* Details */}
                      <div className="text-center md:text-left">
                        <div className="text-white font-bold text-lg">{testimonial.name}</div>
                        <div className="text-purple-300 font-medium">{testimonial.role}</div>
                        <div className="text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-purple-400 to-cyan-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
