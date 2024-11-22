'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBalanceScale, FaBuilding, FaUsers, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: "Contencioso Civil",
      description: "Assessoria especializada em litígios civis, incluindo direito das obrigações, direito real e direito da família. Representação em tribunal e resolução alternativa de litígios.",
      icon: FaBalanceScale,
      href: "/servicos/fiscal"
    },
    {
      title: "Direito Societário",
      description: "Consultoria jurídica empresarial, incluindo constituição de sociedades, fusões e aquisições, due diligence e contencioso societário.",
      icon: FaBuilding,
      href: "/servicos/sociedades"
    },
    {
      title: "Direito do Trabalho",
      description: "Patrocínio judicial em processos laborais, assessoria em contratos de trabalho e regulamentos internos. Representação em tribunal do trabalho.",
      icon: FaUsers,
      href: "/servicos/trabalho"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  return (
    <section className="py-20 px-4 ">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-gray-600">
            Prestamos serviços jurídicos especializados com elevada competência técnica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                href={service.href} 
                key={index}
                className="block group"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300 h-full relative"
                >
                  <div className="flex flex-col h-full">
                    <Icon className="w-12 h-12 text-gray-900 mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center text-gray-900 font-medium">
                      Consultar serviços 
                      <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Link 
            href="/servicos"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-12 py-3 rounded-lg font-medium hover:bg-gray-850 transition-colors"
          >
            Ver Mais
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;