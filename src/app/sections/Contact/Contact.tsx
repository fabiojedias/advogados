'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm/ContactForm';
import Image from 'next/image'
const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen  p-8 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full md:w-1/2 hidden md:flex items-center justify-center"
      >
        <div className="bg-blue-100 rounded-lg shadow-lg text-center w-full h-full">
          <Image
            src="/assets/contact1.png" 
            alt="Escritório de Advogados" 
            width={1000} height={1000}
            className="rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;