
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl transform transition-all duration-300 hover:scale-110 text-2xl"
        >
          💬
        </Button>
      </div>

      {/* Support Card */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm border border-green-500/30 shadow-2xl animate-fade-in">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <div className="font-bold text-gray-800">Support Team</div>
                <div className="text-sm text-green-600">● Online now</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Have questions about the workshop? We're here to help! Get instant answers about:
            </p>
            
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>• Workshop content & schedule</li>
              <li>• Registration process</li>
              <li>• Technical requirements</li>
              <li>• Pricing & refunds</li>
            </ul>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                Chat on WhatsApp
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                className="border-gray-300"
              >
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
