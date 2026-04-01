import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { companyInfo } from '../mock';


const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Contactos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Fale Connosco
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estamos disponíveis para esclarecer dúvidas, fornecer informações e agendar visitas. Utilize os contactos abaixo para falar connosco.
            </p>
          </div>
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-900">
                Informações de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Telefone</p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Email</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Morada</p>
                  <p className="text-gray-600">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Horário</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.schedule.weekdays}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {companyInfo.schedule.weekend}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-lg overflow-hidden shadow-lg h-64">
            <iframe
              title="Localização SGP Construções"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.8127305284686!2d-8.80745!3d39.7437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzM3LjMiTiA4wrA0OCcyNi44Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
