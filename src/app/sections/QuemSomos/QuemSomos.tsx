'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

const QuemSomos = () => {

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Coluna da Imagem */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-h-[400px] lg:max-h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/assets/about1.png"
              alt="Equipa de Advogados"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Coluna do Texto */}
          <div className="space-y-6 flex flex-col justify-start items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Quem Somos
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg text-gray-600 mb-4">
                Com mais de 20 anos de experiência, o nosso escritório de advogados destaca-se pela excelência e dedicação aos nossos clientes.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                A nossa equipa é constituída por profissionais altamente qualificados, especializados em diversas áreas do direito, prontos para oferecer soluções jurídicas personalizadas e eficazes.
              </p>

              <p className="text-lg text-gray-600">
                Privilegiamos uma abordagem próxima e transparente, construindo relações de confiança duradouras com os nossos clientes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors duration-300">
                Contacte-nos
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;