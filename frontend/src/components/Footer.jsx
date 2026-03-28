import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-16 mb-4 brightness-0 invert"
            />
            <h3 className="font-bold text-lg mb-2">{companyInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-primary-400" />
                <span className="text-gray-300">{companyInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-primary-400" />
                <span className="text-gray-300 break-all">{companyInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary-400" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-bold text-lg mb-4">Horário</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-primary-400" />
                <div>
                  <p className="text-gray-300">{companyInfo.schedule.weekdays}</p>
                  <p className="text-gray-400 text-sm mt-1">{companyInfo.schedule.weekend}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informações Legais</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
                <span className="font-semibold">NIF:</span> {companyInfo.nif}
              </p>
              <p className="text-sm">
                Empresa registada em Portugal
              </p>
              <p className="text-sm">
                Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
