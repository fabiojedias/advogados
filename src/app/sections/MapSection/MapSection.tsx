'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Localização</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração da cidade, com fácil acesso e estacionamento para nossos clientes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Morada</h3>
                  <p className="text-gray-600">Avenida da Liberdade, 123</p>
                  <p className="text-gray-600">1250-147 Lisboa</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta</p>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Contacto</h3>
                  <p className="text-gray-600">+351 123 456 789</p>
                  <p className="text-gray-600">info@silveira.pt</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;