
import { Card, CardContent } from '@/components/ui/card';

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business needs, challenges, and goals through comprehensive consultation and analysis.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a tailored strategy and detailed project roadmap aligned with your objectives and timeline.",
      icon: "📋",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We craft innovative solutions using cutting-edge technologies, ensuring scalability and optimal performance.",
      icon: "⚡",
      color: "from-green-500 to-teal-500"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards of quality, security, and reliability.",
      icon: "✅",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "Seamless deployment with minimal downtime, ensuring smooth transition and immediate operational benefits.",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and optimization to ensure continued success and maximum ROI.",
      icon: "🛠️",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="how-we-work" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            How We <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery through strategic planning, innovative execution, and continuous optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-400/50 card-hover group overflow-hidden animate-on-scroll">
              <CardContent className="p-8 relative">
                {/* Step Number */}
                <div className={`absolute top-4 right-4 text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`text-4xl mb-6 p-3 rounded-lg bg-gradient-to-r ${step.color} bg-opacity-20 inline-block`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                
                {/* Bottom accent */}
                <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${step.color} rounded-full`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Commitment to Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-gray-300">Support Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <p className="text-gray-300">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
