import React, { useRef, useEffect } from 'react';
import { ArrowRight, Shield, Globe, Lock } from 'lucide-react';

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-600/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-600/10 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptMCAwdjFoLTFjMC0uNTUuNDUtMSAxLTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 relative transform transition-all duration-700 opacity-0 translate-y-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Vision
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At EduChain, we envision a world where academic credentials are universally accessible, 
              instantly verifiable, and completely fraud-proof. We're building the infrastructure 
              for a global education ecosystem that transcends borders and institutional barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-900/30 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">End Credential Fraud</h3>
              <p className="text-gray-400">
                We're building a system that eliminates diploma fraud and creates absolute 
                trust in the validity of academic credentials through blockchain verification.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-indigo-900/30 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Democratize Access</h3>
              <p className="text-gray-400">
                By making credentials universally accessible and verifiable, we're enabling 
                students from any region to prove their qualifications globally.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-900/30 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transform Verification</h3>
              <p className="text-gray-400">
                Our platform replaces slow, expensive verification processes with 
                instant, trustless on-chain verification powered by Solana.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/whitepaper" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
            >
              <span className="text-lg font-medium">Read our whitepaper</span>
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;