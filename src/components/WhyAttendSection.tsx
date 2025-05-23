
import { Card, CardContent } from '@/components/ui/card';
import { Star, Circle, Clock, Calendar } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: "Build Real Digital Skills",
    description: "Master practical AI tools and techniques that you can implement immediately in your leadership role.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Circle,
    title: "Understand AI Clearly",
    description: "Demystify artificial intelligence with clear, executive-level explanations and real-world applications.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Clock,
    title: "Stay Relevant, Not Overwhelmed",
    description: "Learn at the right pace with curated content designed specifically for busy executives.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Join Exclusive Community",
    description: "Connect with like-minded leaders and continue learning in our private professional network.",
    gradient: "from-purple-500 to-cyan-500"
  }
];

export const WhyAttendSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Attend?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your leadership approach with cutting-edge digital skills that set you apart in today's competitive landscape.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <CardContent className="p-6 text-center">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
