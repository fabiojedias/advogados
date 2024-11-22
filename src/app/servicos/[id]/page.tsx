'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// Dados dos serviços detalhados
const serviceDetails = {
    'direito-civil': {
      title: 'Direito Civil',
      description: 'Nossa equipe especializada em Direito Civil oferece assessoria jurídica completa para proteger seus interesses e direitos em diversas áreas.',
      content: `O Direito Civil é um dos pilares fundamentais do sistema jurídico, regulando as relações entre indivíduos e estabelecendo normas essenciais para a vida em sociedade. Nossa atuação abrange todas as principais áreas do Direito Civil, garantindo segurança jurídica e proteção aos direitos de nossos clientes.`,
      areas: [
        'Contratos e Obrigações',
        'Direito de Família e Sucessões',
        'Responsabilidade Civil',
        'Direito Imobiliário',
        'Direito do Consumidor'
      ],
      services: [
        'Elaboração e análise de contratos',
        'Processos de divórcio e inventário',
        'Ações de indenização',
        'Regularização imobiliária',
        'Defesa do consumidor'
      ]
    },
    'penal': {
      title: 'Direito Penal',
      description: 'Oferecemos defesa especializada em processos criminais, protegendo os direitos e a liberdade de nossos clientes.',
      content: `O Direito Penal é fundamental para garantir a justiça e a segurança social. Nossa equipe atua com rigor técnico e comprometimento na defesa dos direitos dos acusados, assegurando um processo justo e respeitando as garantias constitucionais.`,
      areas: [
        'Defesa Criminal',
        'Crimes Financeiros',
        'Violência Doméstica'
      ],
      services: [
        'Acompanhamento de processos criminais',
        'Defesa em delegacias e tribunais',
        'Recursos criminais',
        'Orientação jurídica criminal'
      ]
    },
    'imobiliario': {
      title: 'Direito Imobiliário',
      description: 'Assessoria completa em todas as questões relacionadas a imóveis, desde a compra até a regularização.',
      content: `Nosso departamento de Direito Imobiliário oferece soluções abrangentes para todas as necessidades relacionadas a propriedades, garantindo segurança jurídica em cada transação e procedimento.`,
      areas: [
        'Compra e Venda',
        'Arrendamento',
        'Usucapião'
      ],
      services: [
        'Análise de contratos imobiliários',
        'Assessoria em compra e venda',
        'Processos de usucapião',
        'Regularização de propriedades'
      ]
    },
    'fiscal': {
      title: 'Direito Fiscal e Contencioso Tributário',
      description: 'Consultoria tributária especializada para pessoas físicas e jurídicas, otimizando sua situação fiscal.',
      content: `Atuamos na defesa dos interesses dos nossos clientes no âmbito tributário, buscando a máxima eficiência fiscal e proteção contra autuações indevidas.`,
      areas: [
        'Planeamento Fiscal',
        'Defesa em Inspeções',
        'Recuperação de Impostos'
      ],
      services: [
        'Consultoria tributária',
        'Defesa em processos fiscais',
        'Planejamento tributário',
        'Recuperação de créditos fiscais'
      ]
    },
    'trabalho': {
      title: 'Direito do Trabalho',
      description: 'Assessoria jurídica especializada em relações trabalhistas para empresas e trabalhadores.',
      content: `Oferecemos suporte jurídico completo nas relações entre empregadores e empregados, garantindo o cumprimento da legislação trabalhista e a proteção dos direitos de ambas as partes.`,
      areas: [
        'Processos Laborais',
        'Acordos Coletivos',
        'Assédio Moral'
      ],
      services: [
        'Defesa em ações trabalhistas',
        'Consultoria em direitos trabalhistas',
        'Negociação de acordos',
        'Orientação sobre assédio moral'
      ]
    },
    'sucessorio': {
      title: 'Direito Sucessório',
      description: 'Orientação especializada em questões de herança, sucessão e planejamento patrimonial.',
      content: `Auxiliamos nossos clientes em todas as etapas de processos sucessórios, garantindo a correta distribuição de bens e o respeito à vontade do de cujus.`,
      areas: [
        'Inventários',
        'Testamentos',
        'Planeamento Sucessório'
      ],
      services: [
        'Elaboração de testamentos',
        'Processos de inventário',
        'Planejamento sucessório',
        'Partilha de bens'
      ]
    },
    'sociedades': {
      title: 'Direito das Sociedades e Empresas',
      description: 'Consultoria jurídica completa para empresas, desde a constituição até questões societárias complexas.',
      content: `Oferecemos suporte jurídico abrangente para empresas, auxiliando em todas as etapas de desenvolvimento e gestão societária.`,
      areas: [
        'Constituição de Empresas',
        'Fusões e Aquisições',
        'Contratos Societários'
      ],
      services: [
        'Constituição de sociedades',
        'Assessoria em fusões e aquisições',
        'Elaboração de contratos societários',
        'Consultoria em governança corporativa'
      ]
    },
    'creditos': {
      title: 'Gestão e Recuperação de Créditos',
      description: 'Estratégias eficientes para recuperação de créditos e gestão de inadimplência.',
      content: `Desenvolvemos soluções jurídicas para recuperação de créditos, buscando a máxima eficiência e menor desgaste para nossos clientes.`,
      areas: [
        'Cobrança Judicial',
        'Negociação de Dívidas',
        'Recuperação Judicial'
      ],
      services: [
        'Cobrança judicial e extrajudicial',
        'Negociação de dívidas',
        'Processos de recuperação judicial',
        'Consultoria em gestão de créditos'
      ]
    },
    'familia': {
      title: 'Direito da Família',
      description: 'Suporte jurídico especializado em questões familiares, com sensibilidade e técnica.',
      content: `Atuamos com dedicação e empatia em questões delicadas de direito de família, buscando sempre soluções que preservem os laços familiares e o bem-estar dos envolvidos.`,
      areas: [
        'Divórcio',
        'Regulação das Responsabilidades Parentais',
        'Pensão de Alimentos'
      ],
      services: [
        'Processos de divórcio',
        'Guarda e regulação parental',
        'Ações de alimentos',
        'Mediação familiar'
      ]
    },
    'administrativo': {
        title: 'Direito Administrativo',
        description: 'Assessoria jurídica especializada em relações entre administração pública e particulares.',
        content: `Oferecemos suporte jurídico abrangente nas interações com entidades públicas, garantindo a defesa dos direitos dos cidadãos e empresas frente à administração pública. Nossa equipe possui expertise em navegação pelos complexos processos administrativos e contenciosos.`,
        areas: [
          'Licitações e Contratos Administrativos',
          'Responsabilidade Civil do Estado',
          'Processos Administrativos'
        ],
        services: [
          'Consultoria em licitações',
          'Defesa em processos administrativos',
          'Recursos administrativos',
          'Assessoria em contratos com o poder público',
          'Análise de editais e procedimentos licitatórios'
        ]
      }
    };

export default function ServiceDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => router.back()}
            className="flex items-center text-gray-300 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </motion.button>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-4xl"
          >
            {service.description}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Sobre a Área</h2>
            <p className="text-slate-600 leading-relaxed mb-8">{service.content}</p>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {service.areas.map((area) => (
                <motion.li
                  key={area}
                  variants={itemVariants}
                  className="flex items-center text-slate-600"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  {area}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Nossos Serviços</h3>
              <ul className="space-y-4">
                {service.services.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="flex items-center text-slate-600 border-b border-gray-100 pb-4 last:border-0"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}