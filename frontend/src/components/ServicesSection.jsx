import React from 'react';
import { PaintBucket, Construction, Droplets, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { services } from '../mock';

const ServicesSection = () => {
  const iconMap = {
    1: PaintBucket,
    2: Construction,
    3: Droplets
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Os Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Soluções Completas em Construção
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de construção civil com 
              qualidade garantida e profissionalismo.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const Icon = iconMap[service.id];
              return (
                <Card
                  key={service.id}
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-3">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="w-full border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                  Porque Escolher a SGP Construções?
                </h3>
                <p className="text-navy-900 mb-6 leading-relaxed">
                  Combinamos experiência, qualidade e dedicação para entregar 
                  resultados excepcionais em cada projeto.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-primary-400/20 text-primary-400 border-primary-400/30 px-4 py-2">
                    Qualidade Garantida
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-400/20 text-primary-400 border-primary-400/30 px-4 py-2">
                    Prazos Cumpridos
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-600/20 text-primary-400 border-primary-500/30 px-4 py-2">
                    Preços Competitivos
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-600/20 text-primary-400 border-primary-500/30 px-4 py-2">
                    Equipa Certificada
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-4xl font-bold text-primary-400 mb-2">Atendimento</p>
                  <p className="text-navy-900 mb-6 leading-relaxed">Personalizado</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-4xl font-bold text-primary-400 mb-2">25+</p>
                  <p className="text-navy-900 mb-6 leading-relaxed">Anos no Mercado</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-4xl font-bold text-primary-400 mb-2">100%</p>
                  <p className="text-navy-900 mb-6 leading-relaxed">Satisfação</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-4xl font-bold text-primary-400 mb-2">Design</p>
                  <p className="text-navy-900 mb-6 leading-relaxed">Funcional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
