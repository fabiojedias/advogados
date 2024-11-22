'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.section 
      className="bg-gray-200/40 py-24 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className=" text-4xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Defenda os Seus Direitos com Segurança
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          Agende uma reunião conosco e descubra como o podemos ajudar
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contactos"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold py-4 px-12 rounded-lg shadow-lg transition-colors duration-200"
          >
            Agendar Reunião
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cta;