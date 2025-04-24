import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import Button from './Button';
import 'swiper/css';
import 'swiper/css/effect-cards';

const credentials = [
  {
    title: 'Bachelor of Computer Science',
    institution: 'Stanford University',
    date: 'June 15, 2025',
    id: 'EDU-2025-0429',
    tags: ['Computer Science', 'Blockchain', 'AI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
  },
  {
    title: 'Master of Business Administration',
    institution: 'Harvard Business School',
    date: 'May 20, 2025',
    id: 'EDU-2025-0430',
    tags: ['Business', 'Leadership', 'Finance'],
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
  },
  {
    title: 'Data Science Certificate',
    institution: 'MIT',
    date: 'April 10, 2025',
    id: 'EDU-2025-0431',
    tags: ['Data Science', 'Machine Learning', 'Python'],
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg'
  }
];

const DemoSection: React.FC = () => {
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
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 transform transition-all duration-700 opacity-0 translate-y-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                See How{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  EduChain Works
                </span>
              </h2>
              <p className="text-gray-300 mb-8">
                Our platform makes it simple for institutions to issue credentials, students to receive and share them,
                and employers to verify them—all on the Solana blockchain.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900 bg-opacity-30 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-purple-400">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Institutions Issue Credentials</h3>
                    <p className="text-gray-400">
                      Educational institutions use our SDK to issue tamper-proof digital credentials directly to student wallets.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900 bg-opacity-30 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-indigo-400">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Students Control Access</h3>
                    <p className="text-gray-400">
                      Students maintain full ownership of their credentials and control who can view them through wallet-based permissions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900 bg-opacity-30 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-cyan-400">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Employers Verify Instantly</h3>
                    <p className="text-gray-400">
                      Employers can verify credentials in real-time with 100% certainty, eliminating fraud and reducing verification costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button>Request Demo</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Swiper
                  effect="cards"
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  className="w-full max-w-md"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {credentials.map((credential, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-xl">
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="mx-auto text-sm text-gray-400">EduChain Credential Explorer</div>
                        </div>
                        
                        <div className="pt-12 pb-6 px-4">
                          <img 
                            src={credential.image}
                            alt={credential.title} 
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          
                          <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                                <div>
                                  <h4 className="text-white font-medium">{credential.title}</h4>
                                  <p className="text-gray-400 text-sm">{credential.institution}</p>
                                </div>
                              </div>
                              <div className="flex items-center px-3 py-1 bg-green-900/30 rounded-full border border-green-700/40">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-green-400 text-xs font-medium">Verified</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="bg-gray-800 p-3 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Issued Date</p>
                                <p className="text-sm text-white">{credential.date}</p>
                              </div>
                              <div className="bg-gray-800 p-3 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Credential ID</p>
                                <p className="text-sm text-white">{credential.id}</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {credential.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-1/4 -right-6 w-20 h-20 bg-purple-600/20 blur-xl rounded-full"></div>
              <div className="absolute bottom-1/3 -left-8 w-24 h-24 bg-indigo-600/20 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;