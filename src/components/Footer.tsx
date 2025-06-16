
const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b50829f3-95e0-4a67-8242-d763ad1f532d.png" 
                alt="Zynapxe Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Redefining digital innovation through cutting-edge AI solutions, cloud architecture, 
              and transformative technology services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-teal-400 transition-colors">Our Team</a></li>
              <li><a href="#case-studies" className="text-gray-300 hover:text-teal-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zynapxe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
