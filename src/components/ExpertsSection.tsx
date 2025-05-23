
import { Card, CardContent } from '@/components/ui/card';

const experts = [
  {
    name: "Umer Abdussalam",
    role: "AI Strategy & Digital Transformation Expert",
    bio: "Leading digital transformation initiatives for Fortune 500 companies with over 15 years of executive consulting experience in AI implementation and strategic technology adoption.",
    avatar: "🧠",
    gradient: "from-purple-600 to-cyan-600"
  },
  {
    name: "Asif Ameen", 
    role: "Prompt Engineering & Tech Education Specialist",
    bio: "Renowned educator and consultant specializing in practical AI applications for business leaders, with a track record of training over 10,000 executives globally.",
    avatar: "📘",
    gradient: "from-cyan-600 to-blue-600"
  }
];

export const ExpertsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry leaders who have guided thousands of executives through successful digital transformations.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experts.map((expert, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Avatar and Background */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${expert.gradient} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    {expert.avatar}
                  </div>
                  <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${expert.gradient} opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {expert.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-lg">
                    {expert.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 leading-relaxed text-center">
                  {expert.bio}
                </p>

                {/* Decorative Elements */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-60"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 opacity-60"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
