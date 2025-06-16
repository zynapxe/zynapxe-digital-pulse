
import { Card, CardContent } from '@/components/ui/card';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: "📊",
      title: "Business Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization solutions that drive strategic decision-making.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Performance Metrics"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to streamline operations and enhance productivity.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "SaaS Solutions",
      description: "Scalable Software-as-a-Service platforms designed to meet your business needs with reliability and performance.",
      features: ["Cloud-Native Architecture", "Multi-tenant Solutions", "Subscription Management", "Auto-scaling"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description: "Intelligent automation solutions that leverage machine learning and AI to optimize workflows and reduce manual tasks.",
      features: ["Process Automation", "Machine Learning Models", "Chatbots & Virtual Assistants", "Smart Analytics"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            What We <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business and accelerate growth through innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-400/50 card-hover group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`text-4xl p-3 rounded-lg bg-gradient-to-r ${offering.gradient} bg-opacity-20`}>
                    {offering.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{offering.title}</h3>
                    <p className="text-gray-300 text-base leading-relaxed">{offering.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {offering.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${offering.gradient}`}></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <button className={`text-white hover:text-gray-200 transition-colors duration-300 font-semibold text-sm bg-gradient-to-r ${offering.gradient} px-4 py-2 rounded-lg hover:shadow-lg`}>
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
