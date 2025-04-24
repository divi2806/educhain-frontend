import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WalletButton } from './WalletButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              EduChain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                isActive('/') 
                  ? 'text-purple-400' 
                  : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                isActive('/about') 
                  ? 'text-purple-400' 
                  : 'text-gray-300'
              }`}
            >
              About
            </Link>
            <Link
              to="/whitepaper"
              className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                isActive('/whitepaper') 
                  ? 'text-purple-400' 
                  : 'text-gray-300'
              }`}
            >
              Whitepaper
            </Link>
            <WalletButton />
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out border-t border-gray-800 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className={`text-sm font-medium py-2 transition-colors duration-300 ${
              isActive('/') ? 'text-purple-400' : 'text-gray-300'
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium py-2 transition-colors duration-300 ${
              isActive('/about') ? 'text-purple-400' : 'text-gray-300'
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/whitepaper"
            className={`text-sm font-medium py-2 transition-colors duration-300 ${
              isActive('/whitepaper') ? 'text-purple-400' : 'text-gray-300'
            }`}
            onClick={closeMenu}
          >
            Whitepaper
          </Link>
          <div className="py-2">
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;