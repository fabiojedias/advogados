'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'
const Team = () => {
  const lawyers = [
    {
      id: 1,
      name: "Dr. António Silva",
      image: "/assets/profilePictures/profile4.jpeg",
      socialLinks: {
        facebook: "https://facebook.com/", 
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "mailto:antonio.silva@exemplo.pt"
      },
      profileUrl: "/equipa/antonio-silva"
    },
    {
      id: 2,
      name: "Dra. Maria Santos",
      image: "/assets/profilePictures/profile3.jpg",
      socialLinks: {
        facebook: "https://facebook.com/", 
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "mailto:maria.santos@exemplo.pt"
      },
      profileUrl: "/equipa/maria-santos"
    },
    {
      id: 3,
      name: "Dr. João Pereira",
      image: "/assets/profilePictures/profile2.jpg",
      socialLinks: {
        facebook: "https://facebook.com/", 
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "mailto:joao.pereira@exemplo.pt"
      },
      profileUrl: "/equipa/joao-pereira"
    },
    {
      id: 4,
      name: "Dra. Ana Costa",
      image: "/assets/profilePictures/profile5.jpg",
      socialLinks: {
        facebook: "https://facebook.com/", 
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        email: "mailto:ana.costa@exemplo.pt"
      },
      profileUrl: "/equipa/ana-costa"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Nossa Equipa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma equipa de profissionais altamente qualificados, dedicados a oferecer serviços jurídicos de excelência
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {lawyers.map((lawyer) => (
            <motion.div
              key={lawyer.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group "
            >
              <Link href={lawyer.profileUrl} className="block">
                <div className="w-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                  <div className="relative">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      width={1000}
                      height={1600}
                      className="w-full h-auto max-w-screen object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  
                </div>
              </Link>
              <div className="p-6">
                <Link href={lawyer.profileUrl} className="block">
                    <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">
                      {lawyer.name}
                    </h3>
                  </Link>
                    
                    {/* Redes Sociais */}
                    <div className="flex justify-center space-x-4">
                    <Link
                        href={lawyer.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </Link>
                      <Link
                        href={lawyer.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </Link>
                      <Link
                        href={lawyer.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </Link>
                      <Link 
                        href={lawyer.socialLinks.email}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;