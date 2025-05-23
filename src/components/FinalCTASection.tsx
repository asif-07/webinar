
import { Button } from '@/components/ui/button';

export const FinalCTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Neural Network Effect */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.5}} />
              </linearGradient>
            </defs>
            <path d="M0,50 Q25,20 50,50 T100,50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
            <path d="M0,30 Q25,60 50,30 T100,30" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse delay-500" />
            <path d="M0,70 Q25,40 50,70 T100,70" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse delay-1000" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Let's Build Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tech Confidence
          </span>
          <br />
          Together
        </h2>

        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the ranks of forward-thinking executives who are mastering AI and digital tools to lead with confidence in the digital era.
        </p>

        {/* Urgency Text */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 mb-8 inline-block">
          <p className="text-white font-medium">
            ⏰ Limited Seats Available • Early Bird Pricing Ends Soon
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-6 px-16 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 mb-8"
        >
          Join the Experience
        </Button>

        {/* Final Assurance */}
        <p className="text-gray-400 text-sm">
          🔒 Secure Registration • 💯 Money Back Guarantee • 🚀 Instant Access
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">10,000+</div>
            <div className="text-gray-300">Executives Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-gray-300">Companies Transformed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
