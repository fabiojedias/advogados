"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica de envio real, como chamada à API
    alert('Mensagem enviada com sucesso!');
    
    // Limpar formulário após envio
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 lg:px-8 mt-[80px]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Lado Esquerdo - Imagem e Informações de Contato */}
          <div 
            className="relative bg-cover bg-center"
            style={{ 
              backgroundImage: `url('')`,
              minHeight: '600px'
            }}
          >
            <div className="absolute inset-0 bg-gray-900  flex flex-col justify-center p-8 text-white">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">Entre em Contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" />
                    <span>Rua Principal, 123 - Lisboa, Portugal</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" />
                    <span>+351 912 345 678</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6" />
                    <span>contacto@escritorio.com</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h - 18h</p>
                  <p>Sábado: 10h - 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Lado Direito - Formulário de Contacto */}
          <div className="flex flex-col justify-center items-center p-6  w-full">
            <motion.form 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6 w-full"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Envie-nos uma Mensagem
              </h2>
              
              <div className="relative">
                <label htmlFor="name" className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
                  Nome Completo
                </label>
                <div className="flex items-center border rounded-lg">
                  <User className="ml-3 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Digite seu nome"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
                  Email
                </label>
                <div className="flex items-center border rounded-lg">
                  <Mail className="ml-3 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Digite seu email"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
                  Mensagem
                </label>
                <div className="flex items-start border rounded-lg">
                  <MessageCircle className="ml-3 mt-3 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Digite sua mensagem"
                  />
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <Send className="mr-2" />
                Enviar Mensagem
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Mapa Incorporado */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Localização
            </h2>
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              {/* Substitua pelo seu mapa real */}
              <div className="text-gray-600 text-center w-full h-full">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.952694542707!2d-9.146503125193025!3d38.71889505721865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338215130a1b%3A0x72824b5439bc2ee0!2sAv.%20da%20Liberdade%20123%2C%201250-001%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1732187031354!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
              className="w-full h-full"
            />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;