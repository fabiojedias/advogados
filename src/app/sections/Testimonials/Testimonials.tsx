'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      comment: "Excelente serviço jurídico. A equipa mostrou-se sempre disponível e profissional na resolução do meu caso.",
      stars: 5
    },
    {
      id: 2,
      name: "João Santos",
      comment: "Muito satisfeito com o acompanhamento prestado. Resolveram o meu processo com eficácia e dentro do prazo previsto.",
      stars: 5
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      comment: "Profissionais extremamente competentes e dedicados. Recomendo vivamente os seus serviços.",
      stars: 5
    },
    {
      id: 4,
      name: "Pedro Costa",
      comment: "Um escritório que prima pela excelência e profissionalismo. Estou muito satisfeito com os resultados obtidos.",
      stars: 5
    },
    {
      id: 5,
      name: "Sofia Martins",
      comment: "Serviço de qualidade superior. A equipa foi incansável na defesa dos meus interesses.",
      stars: 5
    },
    {
      id: 6,
      name: "Miguel Ferreira",
      comment: "Profissionais altamente qualificados e atenciosos. Superaram todas as minhas expectativas.",
      stars: 5
    },
    {
      id: 7,
      name: "Carolina Oliveira",
      comment: "Excelente experiência. Trataram do meu caso com grande profissionalismo e atenção ao detalhe.",
      stars: 5
    },
    {
      id: 8,
      name: "Rui Almeida",
      comment: "Serviço jurídico de primeira qualidade. Muito satisfeito com o resultado final do processo.",
      stars: 5
    }
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que Dizem os Nossos Clientes</h2>
          <p className="text-gray-600">A opinião dos nossos clientes é o nosso maior reconhecimento</p>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* Primeiro conjunto de cards */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-80 flex-shrink-0 bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <FaQuoteLeft className="text-gray-900 text-2xl" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.stars)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                
                <div className="mt-auto">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
            

            {/* Duplicar os cards para criar um loop contínuo */}
            {testimonials.map((testimonial) => (
              <div
                key={`duplicate-${testimonial.id}`}
                className="w-80 flex-shrink-0 bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <FaQuoteLeft className="text-blue-400 text-2xl" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.stars)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                
                <div className="mt-auto">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;