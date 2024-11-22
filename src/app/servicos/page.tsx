'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const services = [
  { 
    id: 'penal', 
    title: 'Direito Penal',
    areas: ['Defesa Criminal', 'Crimes Financeiros', 'Violência Doméstica']
  },
  { 
    id: 'imobiliario', 
    title: 'Direito Imobiliário',
    areas: ['Compra e Venda', 'Arrendamento', 'Usucapião']
  },
  { 
    id: 'fiscal', 
    title: 'Direito Fiscal e Contencioso Tributário',
    areas: ['Planeamento Fiscal', 'Defesa em Inspeções', 'Recuperação de Impostos']
  },
  { 
    id: 'trabalho', 
    title: 'Direito do Trabalho',
    areas: ['Processos Laborais', 'Acordos Coletivos', 'Assédio Moral']
  },
  { 
    id: 'sucessorio', 
    title: 'Direito Sucessório',
    areas: ['Inventários', 'Testamentos', 'Planeamento Sucessório']
  },
  { 
    id: 'sociedades', 
    title: 'Direito Societário',
    areas: ['Constituição de Empresas', 'Fusões e Aquisições', 'Contratos Societários']
  },
  { 
    id: 'creditos', 
    title: 'Gestão e Recuperação de Créditos',
    areas: ['Cobrança Judicial', 'Negociação de Dívidas', 'Recuperação Judicial']
  },
  { 
    id: 'familia', 
    title: 'Direito da Família',
    areas: ['Divórcio', 'Regulação das Responsabilidades Parentais', 'Pensão de Alimentos']
  },
  { 
    id: 'administrativo', 
    title: 'Direito Administrativo',
    areas: ['Licitações e Contratos Administrativos', 'Responsabilidade Civil do Estado', 'Processos Administrativos']
  },
]

const MotionLink = motion(Link)

export default function ServicesPage() {
  return (
    <div className="mt-[85px] bg-gray-50">
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
          Serviços
        </motion.h1>
      </motion.section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {services.map((service) => (
          <MotionLink
            href={`/servicos/${service.id}`}
            key={service.id}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-full flex flex-col justify-between p-6">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.areas.map((area, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionLink>
        ))}
      </div>
    </div>
  )
}