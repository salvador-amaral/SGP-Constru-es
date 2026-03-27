import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { heroImages } from '../mock';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`SGP Construções ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/98 via-navy-900/95 to-navy-900/90" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block bg-primary-600/20 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
              Construção de Qualidade desde 2000
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Construindo o Seu
            <span className="block text-primary-400">Futuro com Confiança</span>
          </h1>
          
          <p className="text-xl text-black mb-8 leading-relaxed">
            Especialistas em pintura de edifícios, pavimentação e tratamento de telhados. 
            Qualidade, profissionalismo e compromisso em cada projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Pedir Orçamento Gratuito
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-6 text-lg font-semibold transition-all"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-600">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Award className="text-primary-400" size={24} />
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <p className="text-gray-300 text-sm">Anos de Experiência</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Briefcase className="text-primary-400" size={24} />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300 text-sm">Projetos Concluídos</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="text-primary-400" size={24} />
                <span className="text-3xl font-bold text-white">Alta</span>
              </div>
              <p className="text-gray-300 text-sm">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
