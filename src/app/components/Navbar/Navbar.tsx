'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaUsers, FaBriefcase, FaUserTie, FaEnvelope } from 'react-icons/fa';

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-[999999]">
      <div className="max-w-8xl mx-auto p-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo Column */}
          <div className="flex-shrink-0 z-[9999]">
            <Link href="/" className="text-2xl font-bold text-white">
              Silveira e Associados
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
              <FaHome /> <span>Início</span>
            </Link>
            <Link href="/quem-somos" className="text-white hover:text-blue-400 transition-colors flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
              <FaUsers /> <span>Quem Somos</span>
            </Link>
            <Link href="/servicos" className="text-white hover:text-blue-400 transition-colors flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
              <FaBriefcase /> <span>Serviços</span>
            </Link>
            <Link href="/equipa" className="text-white hover:text-blue-400 transition-colors flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
              <FaUserTie /> <span>Equipa</span>
            </Link>
            <Link href="/contactos" className="h-full text-white hover:text-blue-400 transition-colors flex items-center space-x-2 hover:bg-gray-800 p-2 rounded">
              <FaEnvelope /> <span>Contactos</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contactos" 
              className="bg-white text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contacte-nos
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center z-[999999]"
            onClick={toggleMenu}
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-gray-900 z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="/" 
                className="text-2xl text-white hover:text-blue-400 transition-colors flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaHome /> <span>Início</span>
              </Link>
              <Link 
                href="/servicos" 
                className="text-2xl text-white hover:text-blue-400 transition-colors flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaBriefcase /> <span>Serviços</span>
              </Link>
              <Link 
                href="/equipa" 
                className="text-2xl text-white hover:text-blue-400 transition-colors flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaUserTie /> <span>Equipa</span>
              </Link>
              <Link 
                href="/contactos" 
                className="text-2xl text-white hover:text-blue-400 transition-colors flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope /> <span>Contactos</span>
              </Link>
              <Link 
                href="/contactos" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacte-nos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;