import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after successful submission
      setEmail('');
      setName('');
      setUserType('student');
    }, 1500);
  };
  
  return (
    <div id="waitlist" className="bg-gray-900 py-24 relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 relative transform transition-all duration-700 opacity-0 translate-y-8"
      >
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Waitlist
              </span>
            </h2>
            <p className="text-gray-300">
              Be among the first to experience the future of credential verification.
              We'll notify you when we launch.
            </p>
          </div>
          
          {isSuccess ? (
            <div className="flex flex-col items-center text-center p-6 bg-green-900/20 rounded-xl border border-green-700/40">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-300">
                Thanks for joining our waitlist. We'll be in touch soon with updates on our launch. 
                In the meantime, spread the word about EduChain!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="flex items-start space-x-2 p-4 bg-red-900/20 rounded-lg border border-red-700/40 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-red-300">{error}</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  I am a:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      userType === 'student' 
                        ? 'bg-purple-900/30 border-purple-600/50' 
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setUserType('student')}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 border-2 flex items-center justify-center ${
                        userType === 'student' ? 'border-purple-400' : 'border-gray-600'
                      }`}>
                        {userType === 'student' && <div className="w-2 h-2 rounded-full bg-purple-400"></div>}
                      </div>
                      <span className="text-white">Student</span>
                    </div>
                  </div>
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      userType === 'institution' 
                        ? 'bg-purple-900/30 border-purple-600/50' 
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setUserType('institution')}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 border-2 flex items-center justify-center ${
                        userType === 'institution' ? 'border-purple-400' : 'border-gray-600'
                      }`}>
                        {userType === 'institution' && <div className="w-2 h-2 rounded-full bg-purple-400"></div>}
                      </div>
                      <span className="text-white">Institution</span>
                    </div>
                  </div>
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      userType === 'employer' 
                        ? 'bg-purple-900/30 border-purple-600/50' 
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setUserType('employer')}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 border-2 flex items-center justify-center ${
                        userType === 'employer' ? 'border-purple-400' : 'border-gray-600'
                      }`}>
                        {userType === 'employer' && <div className="w-2 h-2 rounded-full bg-purple-400"></div>}
                      </div>
                      <span className="text-white">Employer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting} 
                  className="px-8 py-3"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Join Waitlist
                      <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;