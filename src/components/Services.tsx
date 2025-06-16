
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Custom AI solutions that automate processes, predict outcomes, and drive intelligent decision-making.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "MLOps Implementation"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services that ensure security, performance, and cost optimization.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Multi-Cloud Strategy"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your digital assets with advanced threat detection and prevention.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Zero Trust Architecture"]
    },
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business operations and customer experience.",
      features: ["Process Automation", "Digital Strategy", "Legacy Modernization", "Change Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that transform businesses and drive innovation across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-navy-700/50 border-navy-600 hover:border-teal-400/50 card-hover group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-teal-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="text-teal-400 hover:text-white transition-colors duration-300 font-semibold text-sm">
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

export default Services;
