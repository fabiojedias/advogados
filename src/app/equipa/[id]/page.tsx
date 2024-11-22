"use client";

import React from 'react';
import { useParams } from 'next/navigation'; 
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaArrowLeft, FaBriefcase  } from 'react-icons/fa';
import Link from 'next/link';

const lawyers = [
    {
      id: "antonio-silva",
      name: "António Silva",
      avatar: "/assets/profilePictures/profile4.jpeg",
      title: "Advogado / Fundador",
      email: "antonio.silva@escritorio.com",
      phone: "+351 912 345 678",
      expertise: [
        "Direito Societário",
        "Direito Penal",
        "Direito Constitucional",
      
      ],
        bio: "António Silva, nascido a 30 de outubro de 1964 em Lisboa, é um advogado experiente e respeitado no campo do Direito Empresarial. Formado pela Faculdade de Direito da Universidade de Lisboa, António fundou o seu próprio escritório há mais de 30 anos, onde se especializou em Direito Comercial e na elaboração de contratos internacionais. Com uma carreira marcada por inúmeras negociações bem-sucedidas e litígios complexos, António é conhecido pela sua abordagem estratégica e pela capacidade de oferecer soluções inovadoras aos seus clientes. Além da sua prática jurídica, António é frequentemente convidado para palestras e conferências sobre temas relacionados com o direito empresarial e a legislação comercial. A sua dedicação à profissão e o compromisso com a ética profissional têm-lhe valido o respeito dos seus colegas e clientes.",      socialLinks: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        email: "geral@escritorio.com",

      }
    },
    {
      id: "maria-santos",
      name: "Maria Santos",
      avatar: "/assets/profilePictures/profile3.jpg",
      title: "Advogada",
      email: "maria.santos@escritorio.com",
      phone: "+351 923 456 789",
      expertise: [
        "Direito do Trabalho",
        "Direito da Segurança Social",
        "Contencioso Laboral"
      ],
      bio: "Maria Santos é uma advogada de renome com mais de duas décadas de experiência no Direito do Trabalho e da Segurança Social. Licenciada pela Universidade de Coimbra, com um mestrado em Direito Laboral pela Universidade Nova de Lisboa, Maria tem sido uma figura proeminente em negociações coletivas e na resolução de conflitos laborais complexos. A sua abordagem pragmática e profundo conhecimento da legislação laboral portuguesa e europeia têm-lhe permitido obter resultados notáveis para os seus clientes, que incluem tanto grandes empresas como sindicatos.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        email: "geral@escritorio.com",
      }
    },
    {
      id: "joao-pereira",
      name: "João Pereira",
      avatar: "/assets/profilePictures/profile2.jpg",
      title: "Advogado",
      email: "joao.pereira@escritorio.com",
      phone: "+351 934 567 890",
      expertise: [
        "Direito Fiscal",
        "Planeamento Tributário",
        "Contencioso Tributário"
      ],
      bio: "João Pereira é um dos jovens advogados fiscalistas mais promissores em Portugal. Com uma carreira em ascensão, João tem-se destacado pela sua perícia em planeamento tributário e resolução de litígios fiscais complexos. Formado pela Universidade Católica Portuguesa, com pós-graduação em Direito Fiscal pela Universidade de Lisboa, João tem vindo a conquistar a confiança de várias empresas multinacionais e já representou clientes em processos fiscais significativos junto dos tribunais portugueses. A sua abordagem inovadora e conhecimento atualizado do sistema fiscal português e internacional fazem dele uma figura emergente no panorama jurídico nacional, sendo frequentemente elogiado pela sua capacidade de oferecer soluções criativas para desafios fiscais contemporâneos.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        email: "geral@escritorio.com",
      }
    },
    {
      id: "ana-costa",
      name: "Ana Costa",
      avatar: "/assets/profilePictures/profile5.jpg",
      title: "Advogada",
      email: "ana.costa@escritorio.com",
      phone: "+351 945 678 901",
      expertise: [
        "Direito Ambiental",
        "Direito da Energia",
        "Sustentabilidade Empresarial"
      ],
      bio: "Ana Costa é uma advogada pioneira na área do Direito Ambiental e da Energia em Portugal. Licenciada em Direito pela Universidade do Porto, com um LLM em Direito Ambiental pela University College London, Ana tem sido uma voz ativa na promoção da sustentabilidade e na implementação de políticas ambientais no setor empresarial. Com mais de 15 anos de experiência, tem assessorado empresas nacionais e internacionais em questões relacionadas com regulamentação ambiental, licenciamento de projetos energéticos e implementação de estratégias de sustentabilidade. Ana é frequentemente convidada como oradora em conferências internacionais sobre alterações climáticas e transição energética, sendo reconhecida como uma das principais especialistas portuguesas nestas áreas.",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        email: "geral@escritorio.com",
      }
    }

];
const LawyerDetailsPage = () => {
  const { id } = useParams();  // This will get the `id` from the dynamic URL

  // Assuming `lawyers` is a predefined list of lawyers
  const lawyer = lawyers.find(l => l.id === id);

  if (!lawyer) {
    return <div>Advogado não encontrado</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50 pt-[80px]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <Link href="/equipa" className="inline-flex items-center mb-6 text-gray-700 hover:text-gray-900">
          <FaArrowLeft className="mr-2" /> Voltar para a Equipa
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Coluna da Foto */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:col-span-1 text-center"
          >
            <img 
              src={lawyer.avatar} 
              alt={lawyer.name} 
              className="w-64 h-64 mx-auto rounded-full object-cover object-top shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-6 text-gray-800">{lawyer.name}</h1>
            <p className="text-xl text-gray-600">{lawyer.title}</p>
            
            {/* Redes Sociais */}
            <div className="flex justify-center space-x-4 mt-6">
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
          </motion.div>

          {/* Coluna de Detalhes */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:col-span-2 bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Biografia</h2>
            <p className="text-gray-700 mb-6">{lawyer.bio}</p>

            <div className="grid md:grid-cols-2 gap-6 justify-center items-start">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex justify-start items-center">
                  <FaBriefcase className="inline-block mr-2 text-gray-500" /> 
                  Especialização
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-900 mb-3">
                  {lawyer.expertise.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex justify-start items-center">
                  <FaEnvelope className="inline-block mr-2 text-gray-500" />
                  Contacto
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{lawyer.email}</p>
                  <p>{lawyer.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LawyerDetailsPage;