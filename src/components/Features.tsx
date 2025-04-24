import React, { useEffect, useRef } from 'react';
import { Shield, Key, Cpu, Globe, Zap, Lock } from 'lucide-react';

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-6 transform transition-all duration-700 opacity-0 translate-y-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
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
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 opacity-0 translate-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Revolutionizing{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Credential Verification
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            EduChain combines blockchain technology with educational needs to create
            a trustless, permissionless system for issuing and verifying academic credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Shield className="w-6 h-6 text-purple-400" />}
            title="Immutable Records"
            description="Credentials stored on-chain cannot be altered, providing permanent proof of educational achievements."
            delay={100}
          />
          <Feature
            icon={<Key className="w-6 h-6 text-indigo-400" />}
            title="Student-Controlled Access"
            description="Students maintain complete control over who can access their credentials through wallet-based permissions."
            delay={200}
          />
          <Feature
            icon={<Cpu className="w-6 h-6 text-cyan-400" />}
            title="Smart Contract Toolkit"
            description="Institutions can easily integrate with our SDKs to issue credentials directly to student wallets."
            delay={300}
          />
          <Feature
            icon={<Globe className="w-6 h-6 text-purple-400" />}
            title="Universal Explorer"
            description="A public interface for anyone to verify credentials with proper permissions from the credential owner."
            delay={400}
          />
          <Feature
            icon={<Zap className="w-6 h-6 text-indigo-400" />}
            title="Low-Cost & Fast"
            description="Solana's high throughput and low fees make credential issuance and verification affordable and instant."
            delay={500}
          />
          <Feature
            icon={<Lock className="w-6 h-6 text-cyan-400" />}
            title="Optional Privacy Layers"
            description="Zero-knowledge proofs allow students to prove credentials without revealing sensitive information."
            delay={600}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;