
import { Card, CardContent } from '@/components/ui/card';
import { Circle, Star, Clock, Calendar } from 'lucide-react';

const modules = [
  {
    number: "01",
    icon: Circle,
    title: "Digital Confidence & Cybersecurity",
    description: "Build unshakeable confidence in digital tools while mastering essential cybersecurity practices for executives.",
    color: "purple"
  },
  {
    number: "02", 
    icon: Star,
    title: "AI Demystified with Real-Life Examples",
    description: "Understand AI through practical business scenarios and see how leading companies leverage AI for competitive advantage.",
    color: "cyan"
  },
  {
    number: "03",
    icon: Clock,
    title: "Prompt Engineering Mastery", 
    description: "Master the art of communicating with AI systems to get precise, valuable outputs for your business needs.",
    color: "blue"
  },
  {
    number: "04",
    icon: Calendar,
    title: "Powerful AI Tools You Can Use",
    description: "Hands-on exploration of executive-level AI tools that can transform your workflow and decision-making process.",
    color: "purple"
  }
];

const getGradientClass = (color: string) => {
  switch(color) {
    case 'purple': return 'from-purple-600 to-pink-600';
    case 'cyan': return 'from-cyan-600 to-blue-600'; 
    case 'blue': return 'from-blue-600 to-purple-600';
    default: return 'from-purple-600 to-cyan-600';
  }
};

export const WhatYoullLearnSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You'll <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learn</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive 3-hour journey through the most essential digital skills for modern executive leadership.
          </p>
        </div>

        {/* Learning Modules */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] group overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Module Number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${getGradientClass(module.color)} flex items-center justify-center text-white font-bold text-xl`}>
                    {module.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${getGradientClass(module.color)} flex items-center justify-center`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {module.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
