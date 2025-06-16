
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how Zynapxe can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-navy-700/50 border-navy-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get a Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-navy-800 border-navy-600 text-white placeholder-gray-400 focus:border-teal-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-navy-800 border-navy-600 text-white placeholder-gray-400 focus:border-teal-400"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-navy-800 border-navy-600 text-white placeholder-gray-400 focus:border-teal-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-navy-800 border border-navy-600 rounded-md text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/20"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-navy-900 text-sm">📧</span>
                  </div>
                  <span className="text-gray-300">hello@zynapxe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-navy-900 text-sm">📱</span>
                  </div>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-navy-900 text-sm">📍</span>
                  </div>
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card className="bg-navy-700/50 border-navy-600">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-3">Why Choose Zynapxe?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    15+ years of industry expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Fortune 500 client portfolio
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    100% client satisfaction rate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    24/7 dedicated support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
