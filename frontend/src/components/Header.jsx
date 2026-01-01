import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/weddings', label: 'Weddings' },
    { path: '/corporate-events', label: 'Corporate Events' },
    { path: '/social-events', label: 'Social Events' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-r from-purple-50/98 via-lavender-50/98 to-pink-50/98 backdrop-blur-xl shadow-lg border-b border-purple-200' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg" 
                alt="Event Ustaad" 
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-24' : 'h-30'
                } w-auto transform group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group overflow-hidden ${
                  isActive(link.path)
                    ? isScrolled ? 'text-purple-600' : 'text-white'
                    : isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                }`}
                style={{ 
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both` 
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg transform transition-transform duration-300 ${
                  isActive(link.path) 
                    ? 'scale-100' 
                    : 'scale-0 group-hover:scale-100'
                }`} />
              </Link>
            ))}\n          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="tel:+919833310150"
              className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <Link to="/contact">
              <Button className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 hover:from-purple-600 hover:via-purple-500 hover:to-pink-500 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group">
                <span className="relative z-10">Plan Your Event</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-purple-600 bg-gradient-to-r from-purple-100 to-pink-100'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a 
                href="tel:+919833310150"
                className="flex items-center justify-center gap-2 px-4 py-3 text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 hover:from-purple-600 hover:via-purple-500 hover:to-pink-500 text-white shadow-lg">
                  Plan Your Event
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
