import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-navy-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{companyInfo.email}</span>
            </div>
          </div>
          <div className="text-gray-300">
            {companyInfo.schedule.weekdays}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="h-12 w-auto"
              />
              <div className="hidden lg:block">
                <h1 className="text-navy-900 font-bold text-lg leading-tight">
                  {companyInfo.name}
                </h1>
                <p className="text-gray-600 text-xs">{companyInfo.tagline}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-navy-900 hover:text-primary-600 font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-navy-900 hover:text-primary-600 font-medium transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy-900 hover:text-primary-600 font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-navy-900 hover:text-primary-600 font-medium transition-colors"
              >
                Portfólio
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                Contacto
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-navy-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-navy-900 hover:text-primary-600 font-medium text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-navy-900 hover:text-primary-600 font-medium text-left transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy-900 hover:text-primary-600 font-medium text-left transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-navy-900 hover:text-primary-600 font-medium text-left transition-colors"
              >
                Portfólio
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white w-full"
              >
                Contacto
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
