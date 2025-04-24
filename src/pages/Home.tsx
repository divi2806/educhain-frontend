import React from 'react';
import HeroSection from '../components/Hero';
import FeaturesSection from '../components/Features';
import StatsSection from '../components/Stats';
import DemoSection from '../components/Demo';
import WaitlistSection from '../components/Waitlist';

const Home: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'EduChain - Decentralized Credential Verification';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <DemoSection />
      <WaitlistSection />
    </>
  );
};

export default Home;