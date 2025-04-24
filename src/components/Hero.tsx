import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Button from './Button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-700/30 to-indigo-700/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-indigo-700/20 to-cyan-700/10 blur-3xl rounded-full" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="particle-1 absolute w-1.5 h-1.5 rounded-full bg-purple-400" style={{ top: '15%', left: '10%', animation: 'float 8s ease-in-out infinite' }} />
          <div className="particle-2 absolute w-2 h-2 rounded-full bg-indigo-400" style={{ top: '65%', left: '20%', animation: 'float 12s ease-in-out infinite 1s' }} />
          <div className="particle-3 absolute w-1 h-1 rounded-full bg-cyan-400" style={{ top: '35%', left: '50%', animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="particle-4 absolute w-1.5 h-1.5 rounded-full bg-purple-300" style={{ top: '25%', left: '80%', animation: 'float 9s ease-in-out infinite 3s' }} />
          <div className="particle-5 absolute w-2 h-2 rounded-full bg-indigo-300" style={{ top: '75%', left: '85%', animation: 'float 11s ease-in-out infinite 1.5s' }} />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptMCAwdjFoLTFjMC0uNTUuNDUtMSAxLTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center mb-16">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                Decentralized Credentials
              </span>{' '}
              for the Future of Education
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A permissionless Solana-based platform that allows educational institutions 
              to issue cryptographic credentials that students control and employers can 
              verify instantly.
            </p>
          </div>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#waitlist">
              <Button className="w-full sm:w-auto">
                <span>Join Waitlist</span>
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
            <Button primary={false} className="w-full sm:w-auto">
              <span>Learn More</span>
            </Button>
          </div>
        </div>

        {/* Features list */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fraud-Proof</h3>
            <p className="text-gray-400">
              Immutable, cryptographically secure credentials that cannot be forged or tampered with.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Verification</h3>
            <p className="text-gray-400">
              Real-time credential verification without intermediaries or lengthy processes.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-cyan-900 bg-opacity-50 flex items-center justify-center mb-4">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-cyan-400"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Solana Powered</h3>
            <p className="text-gray-400">
              Built on Solana's fast, low-cost blockchain for maximum scalability and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;