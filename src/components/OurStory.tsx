
import { Card, CardContent } from '@/components/ui/card';

const OurStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to transform businesses through innovative technology solutions and cutting-edge AI implementations.",
      icon: "🚀"
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded our team and capabilities, establishing partnerships with Fortune 500 companies and delivering groundbreaking projects.",
      icon: "📈"
    },
    {
      year: "2022",
      title: "AI Revolution",
      description: "Pioneered advanced AI and machine learning solutions, helping clients achieve unprecedented efficiency and automation.",
      icon: "🤖"
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Serving clients worldwide with comprehensive digital transformation strategies and next-generation technology solutions.",
      icon: "🌍"
    }
  ];

  return (
    <section id="our-story" className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small startup to a global technology partner, our journey has been driven by innovation, 
            dedication, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 animate-on-scroll ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1 lg:w-1/2">
                  <Card className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-400/50 card-hover ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{milestone.icon}</div>
                        <div className="text-2xl font-bold text-blue-400">{milestone.year}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black shadow-lg"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Be Part of Our Story?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in shaping the future of technology and innovation. Let's create something extraordinary together.
            </p>
            <button className="btn-primary">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
