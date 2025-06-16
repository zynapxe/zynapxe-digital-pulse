
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import CaseStudies from '@/components/CaseStudies';
import WhatWeOffer from '@/components/WhatWeOffer';
import HowWeWork from '@/components/HowWeWork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <CaseStudies />
      <WhatWeOffer />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
