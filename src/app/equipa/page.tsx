"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'

const lawyers = [
  {
    id: "antonio-silva",
    name: "António Silva",
    avatar: "/assets/profilePictures/profile4.jpeg",
    title: "Advogado / Fundador",
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    avatar: "/assets/profilePictures/profile3.jpg",
    title: "Advogada",
  },
  {
    id: "joao-pereira",
    name: "João Pereira",
    avatar: "/assets/profilePictures/profile2.jpg",
    title: "Advogado",
  },
  {
    id: "ana-costa",
    name: "Ana Costa",
    avatar: "/assets/profilePictures/profile5.jpg",
    title: "Advogada",
  }
];

const LawyerTeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[230px] bg-slate-900 flex items-center justify-center mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white relative z-10"
        >
          Equipa
        </motion.h1>
      </motion.section>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6">
        {lawyers.map((lawyer) => (
          <Link href={`/equipa/${lawyer.id}`} key={lawyer.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition-all"
            >
              <div className="p-4 md:p-6 text-center">
                <Image
                  src={lawyer.avatar} 
                  alt={lawyer.name} 
                  width={800} height={800}
                  className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto mb-2 md:mb-4 object-cover object-top"
                />
                <h2 className="text-base md:text-xl font-semibold text-gray-800">{lawyer.name}</h2>
                <p className="text-xs md:text-sm text-gray-500">{lawyer.title}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LawyerTeamPage;