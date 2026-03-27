import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';
import { companyInfo } from '../mock';

// Usar o backend Flask local diretamente
const API = 'http://localhost:5000/api';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar apenas os campos esperados pelo backend Flask
      const { name, email, message } = formData;
      const response = await axios.post(`${API}/contact`, { name, email, message });
      
      console.log('Mensagem enviada com sucesso:', response.data);
      
      toast.success('Mensagem Enviada!', {
        description: 'Entraremos em contacto consigo brevemente.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      toast.error('Erro ao Enviar', {
        description: error.response?.data?.detail || 'Por favor, tente novamente mais tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Contacte-nos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Fale Connosco
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contacto connosco para um orçamento 
              gratuito e sem compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Card className="border-0 shadow-lg">
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

              {/* Map placeholder */}
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

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">
                    Envie-nos uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="O seu nome"
                          className="border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Telefone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="912 345 678"
                          className="border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Assunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Pedido de orçamento"
                          className="border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva o seu projeto ou pedido..."
                        rows={6}
                        className="border-gray-300 focus:border-primary-600 focus:ring-primary-600 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        'A enviar...'
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
