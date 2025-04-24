import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, School, User, Building } from 'lucide-react';

const CounterAnimation: React.FC<{ endValue: number; duration: number; prefix?: string; suffix?: string }> = ({
  endValue,
  duration,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * endValue));
      
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [endValue, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-white">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const StatsSection: React.FC = () => {
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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 relative transform transition-all duration-700 opacity-0 translate-y-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center mb-4">
                <User className="w-7 h-7 text-purple-400" />
              </div>
              <CounterAnimation endValue={250} duration={2000} suffix="+" />
              <p className="text-gray-300 mt-2">Users on Waitlist</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mb-4">
                <School className="w-7 h-7 text-indigo-400" />
              </div>
              <CounterAnimation endValue={15} duration={2000} suffix="+" />
              <p className="text-gray-300 mt-2">Educational Institutions</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-cyan-900 bg-opacity-50 flex items-center justify-center mb-4">
                <Building className="w-7 h-7 text-cyan-400" />
              </div>
              <CounterAnimation endValue={8} duration={2000} suffix="+" />
              <p className="text-gray-300 mt-2">Partner Companies</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#waitlist" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <span className="text-lg font-medium">Join the waitlist to be part of the revolution</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;