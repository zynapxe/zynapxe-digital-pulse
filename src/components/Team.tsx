
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in enterprise technology and AI innovation.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face",
      specialties: ["AI Strategy", "Business Development", "Digital Transformation"]
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO",
      bio: "Technical architect specializing in cloud infrastructure and machine learning systems.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face",
      specialties: ["Cloud Architecture", "Machine Learning", "DevOps"]
    },
    {
      name: "Michael Kim",
      role: "Head of AI",
      bio: "AI researcher and engineer with expertise in deep learning and natural language processing.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face",
      specialties: ["Deep Learning", "NLP", "Computer Vision"]
    },
    {
      name: "Emily Zhang",
      role: "Head of Security",
      bio: "Cybersecurity expert focused on zero-trust architectures and threat intelligence.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face",
      specialties: ["Cybersecurity", "Zero Trust", "Compliance"]
    }
  ];

  const stats = [
    { number: "15+", label: "Years in Tech" },
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <section id="team" className="py-20 bg-navy-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts passionate about delivering innovative solutions that drive real business impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <div className="text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-navy-700/50 border-navy-600 hover:border-teal-400/50 card-hover group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-teal-400/20 group-hover:ring-teal-400/50 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <div className="text-teal-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block bg-teal-400/10 text-teal-400 text-xs px-2 py-1 rounded mr-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
