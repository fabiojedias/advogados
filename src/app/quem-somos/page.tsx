
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[230px] bg-slate-900 flex items-center justify-center mt-[80px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white relative z-10"
        >
          Quem Somos
        </motion.h1>
      </motion.section>

      {/* Content Section */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeIn}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/assets/hero/hero1.jpg"
              alt="Equipe do escritório"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Com mais de 15 anos de atuação no mercado jurídico, nosso escritório de advocacia
              se destaca pela excelência no atendimento e pelo compromisso inabalável com os
              interesses de nossos clientes.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados, com especialização
              em diversas áreas do direito, prontos para oferecer soluções jurídicas
              personalizadas e eficientes.
            </p>
          </motion.div>
        </div>

        {/* Missão e Valores Section */}
        <motion.section 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nossa Missão e Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Missão</h3>
              <p className="text-slate-700">
                Oferecer serviços jurídicos de excelência, com ética e responsabilidade,
                contribuindo para a realização da justiça e a defesa dos direitos de nossos
                clientes.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Visão</h3>
              <p className="text-slate-700">
                Ser reconhecido como referência em advocacia, mantendo os mais altos padrões
                de qualidade e inovação em serviços jurídicos.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Valores</h3>
              <ul className="text-slate-700 space-y-2">
                <li>• Ética e transparência</li>
                <li>• Excelência profissional</li>
                <li>• Compromisso com o cliente</li>
                <li>• Responsabilidade social</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}