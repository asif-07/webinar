
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Calendar, Clock } from 'lucide-react';

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment in Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive executive training at an exceptional value
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-purple-500/30 overflow-hidden relative">
          {/* Early Bird Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-2 px-4 rounded-full text-sm animate-pulse">
            Early Bird Offer
          </div>

          <CardContent className="p-8 text-center">
            {/* Price */}
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                ₹499
              </div>
              <div className="text-gray-400 line-through text-xl mb-2">₹2,999</div>
              <div className="text-cyan-300 font-medium text-lg">All Inclusive Package</div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">What You Get:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Live Workshop Access</div>
                    <div className="text-gray-300 text-sm">3-hour intensive session</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Full Recording</div>
                    <div className="text-gray-300 text-sm">Lifetime access</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Private Community</div>
                    <div className="text-gray-300 text-sm">Exclusive network access</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus Features */}
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎁 Bonus Inclusions:</h4>
              <ul className="text-gray-200 space-y-2">
                <li>• AI Tools Cheat Sheet (₹499 value)</li>
                <li>• Prompt Templates Library (₹799 value)</li>
                <li>• 30-Day Email Support (₹1,299 value)</li>
              </ul>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Register Now - Save 83%
            </Button>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-6 mt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                SSL Secure
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                Money Back Guarantee
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                Instant Access
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
