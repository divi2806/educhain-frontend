import React, { useRef, useEffect } from 'react';
import { Linkedin, Twitter, Link2 } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  delay: number;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  delay,
  linkedin,
  twitter,
  website,
}) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={memberRef}
      className="bg-gray-800 bg-opacity-30 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden transform transition-all duration-700 opacity-0 translate-y-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Link2 className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
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
            Meet Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Team
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            We're a diverse team of blockchain experts, educators, and technologists
            passionate about transforming credential verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Alex Chen"
            role="Founder & CEO"
            image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={100}
            linkedin="#"
            twitter="#"
            website="#"
          />
          <TeamMember
            name="Sophia Williams"
            role="CTO"
            image="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={200}
            linkedin="#"
            twitter="#"
          />
          <TeamMember
            name="Marcus Johnson"
            role="Head of Blockchain"
            image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={300}
            linkedin="#"
            twitter="#"
          />
          <TeamMember
            name="Zoe Garcia"
            role="Director of Partnerships"
            image="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={400}
            linkedin="#"
            twitter="#"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;