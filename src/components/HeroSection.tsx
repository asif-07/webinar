
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Star } from 'lucide-react';

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-white">Executive Level Workshop</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Mastering the{' '}
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Era
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          3-Hour Executive Workshop on AI Tools, Prompt Engineering & Tech Confidence for Visionary Leaders
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium">December 28, 2024</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">3 Hours Intensive</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-cyan-300 text-lg mb-4 font-medium">Registration Closes In:</p>
          <div className="flex justify-center gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-gradient-to-b from-purple-600/40 to-blue-600/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-300 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
        >
          Reserve My Seat
        </Button>

        <p className="text-sm text-gray-400 mt-4">✅ Secure Payment • 💯 Money Back Guarantee</p>
      </div>
    </section>
  );
};
