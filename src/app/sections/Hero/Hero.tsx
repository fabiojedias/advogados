'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Advocacia de Excelência",
      subtitle: "Defendemos os seus direitos com competência e dedicação",
      image: "/assets/hero/hero1.jpg"
    },
    {
      id: 2,
      title: "Experiência Comprovada",
      subtitle: "Mais de 20 anos de sucesso em casos complexos",
      image: "/assets/hero/hero2.jpg"
    },
    {
      id: 3,
      title: "Atendimento Personalizado",
      subtitle: "Soluções jurídicas adaptadas às suas necessidades",
      image: "/assets/hero/hero3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0
    }
  };

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full bg-gray-900">
            <img
              src={slides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 max-w-5xl"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 text-center max-w-3xl"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute z-50 bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-blue-600 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;