import React from 'react';
import AboutHero from '../components/AboutHero';
import VisionSection from '../components/Vision';
import WaitlistSection from '../components/Waitlist';

const About: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'About - EduChain';
  }, []);

  return (
    <>
      <AboutHero />
      <VisionSection />
      <WaitlistSection />
    </>
  );
};

export default About;