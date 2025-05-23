
import { Card, CardContent } from '@/components/ui/card';

const audiences = [
  {
    title: "Experienced Professionals",
    description: "Senior managers and directors looking to enhance their digital leadership capabilities and stay ahead of technological trends.",
    emoji: "👔",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Veteran Entrepreneurs", 
    description: "Established business owners who want to leverage AI and digital tools to scale their operations and improve efficiency.",
    emoji: "🚀",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Educators and Mentors",
    description: "Industry leaders who guide others and need comprehensive understanding of AI to provide relevant, forward-thinking advice.",
    emoji: "🎓", 
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Lifelong Learners",
    description: "Ambitious professionals committed to continuous growth and staying at the forefront of digital innovation.",
    emoji: "📚",
    gradient: "from-purple-500 to-cyan-500"
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who Should <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Join?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This executive workshop is designed for ambitious leaders ready to embrace the digital future with confidence.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group h-full"
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                {/* Avatar/Emoji */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${audience.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {audience.emoji}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {audience.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed flex-1">
                  {audience.description}
                </p>

                {/* Bottom Accent */}
                <div className={`w-12 h-1 bg-gradient-to-r ${audience.gradient} mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
