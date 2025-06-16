
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Fortune 500 Financial Institution",
      industry: "Finance",
      challenge: "Legacy system modernization and AI integration",
      solution: "Cloud-native architecture with AI-powered fraud detection",
      results: [
        { metric: "300%", description: "Faster transaction processing" },
        { metric: "85%", description: "Reduction in fraud incidents" },
        { metric: "$2.5M", description: "Annual cost savings" }
      ],
      testimonial: "Zynapxe transformed our entire digital infrastructure. The results exceeded all expectations.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      client: "Global E-commerce Platform",
      industry: "E-commerce",
      challenge: "Scalability issues during peak traffic",
      solution: "Multi-cloud architecture with AI-driven load balancing",
      results: [
        { metric: "99.9%", description: "Uptime during Black Friday" },
        { metric: "500%", description: "Traffic handling capacity" },
        { metric: "40%", description: "Improved page load speeds" }
      ],
      testimonial: "Their solution handled our highest traffic day flawlessly. Exceptional engineering.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
    },
    {
      client: "Healthcare Technology Company",
      industry: "Healthcare",
      challenge: "HIPAA compliance and data security",
      solution: "Zero-trust security architecture with encrypted data lakes",
      results: [
        { metric: "100%", description: "HIPAA compliance achieved" },
        { metric: "60%", description: "Faster data processing" },
        { metric: "0", description: "Security incidents since launch" }
      ],
      testimonial: "Zynapxe delivered a secure, compliant solution that enhanced our patient care capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-navy-700/50 border-navy-600 hover:border-teal-400/50 card-hover group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-teal-400 text-sm font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-white mb-3">{study.client}</h3>
                <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-teal-400">{result.metric}</div>
                      <div className="text-xs text-gray-400">{result.description}</div>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-gray-300 text-sm italic mb-4 border-l-2 border-teal-400 pl-4">
                  "{study.testimonial}"
                </blockquote>
                
                <Button className="w-full bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-navy-900">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
