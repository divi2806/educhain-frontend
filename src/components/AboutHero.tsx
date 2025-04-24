import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const AboutHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gray-900 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-700/20 blur-3xl rounded-full" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptMCAwdjFoLTFjMC0uNTUuNDUtMSAxLTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                EduChain
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Building the future of trusted credentials on the blockchain.
            </p>
          </div>

          <div 
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                EduChain is on a mission to revolutionize how educational credentials are issued, 
                managed, and verified. We're building a permissionless, decentralized platform 
                that eliminates credential fraud and creates a trustless verification system accessible 
                to students worldwide.
              </p>
              <p className="text-gray-300 mb-8">
                By leveraging Solana's high-performance blockchain, we're making credential 
                verification instant, immutable, and affordable for all stakeholders in the 
                educational ecosystem.
              </p>
            </div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Eliminate credential fraud with blockchain verification</p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Empower students with full control over their credentials</p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Reduce verification costs for employers and institutions</p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Build a global, permissionless education ecosystem</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button>Join Our Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;