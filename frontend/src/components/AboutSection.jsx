import React from 'react';
import { CheckCircle2, Target, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Profissionalismo',
      description: 'Compromisso com a excelência em cada projeto que realizamos.'
    },
    {
      icon: Heart,
      title: 'Dedicação',
      description: 'Tratamos cada projeto como se fosse nosso, com paixão e atenção ao detalhe.'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Transparência e honestidade em todas as nossas relações comerciais.'
    }
  ];

  const achievements = [
    'Mais de 15 anos de experiência no mercado',
    'Equipa altamente qualificada e certificada',
    'Materiais de primeira qualidade',
    'Prazos cumpridos rigorosamente',
    'Garantia em todos os trabalhos',
    'Atendimento personalizado'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Quem Somos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A SGP Construções é uma empresa sólida com vasta experiência em serviços 
              de construção civil em Leiria e arredores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                  alt="Equipa SGP Construções"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold">15+</p>
                <p className="text-sm font-semibold">Anos de Excelência</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Construindo com Qualidade e Experiência
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desde a nossa fundação, a SGP Construções tem-se dedicado a oferecer 
                serviços de construção civil da mais alta qualidade. Especializamo-nos 
                em pintura de edifícios, pavimentação, sistemas de drenagem e tratamento 
                de telhados.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A nossa equipa de profissionais qualificados trabalha com dedicação e 
                atenção aos detalhes, garantindo que cada projeto seja executado com 
                os mais elevados padrões de qualidade e dentro dos prazos estabelecidos.
              </p>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
