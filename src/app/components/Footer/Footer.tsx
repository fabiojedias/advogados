'use client'

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiSolidHome,BiEnvelope, BiSolidUserCircle, BiSolidBriefcaseAlt2, BiSolidGroup } from 'react-icons/bi';
import { BsTelephone, BsEnvelopeFill, BsPinMapFill } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          
          {/* Coluna da Esquerda - Logo e Redes Sociais */}
          <div className="space-y-6 w-64">
            <div>
              {/* Substitua pelo seu logo */}
              <h2 className="text-2xl font-bold text-white">Silveira & Associados</h2>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Advocacia de excelência ao serviço dos nossos clientes desde 1990.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Coluna do Meio - Contactos */}
          <div className="space-y-4 w-64">
            <h3 className="text-lg font-semibold text-white mb-4">Contactos</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BsTelephone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+351 123 456 789</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <BsEnvelopeFill className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@silveira.pt" className="hover:text-white transition-colors">
                  info@silveira.pt
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <BsPinMapFill className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>
                  Avenida da Liberdade, 123<br />
                  1250-147 Lisboa<br />
                  Portugal
                </span>
              </div>
            </div>
          </div>
          
          {/* Coluna da Direita - Links de Navegação */}
          <div className="w-64">
            <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
            
            <nav className="space-y-3">
              <Link href="/" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <BiSolidHome className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Início</span>
              </Link>
              < Link href="/quem-somos" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <BiSolidUserCircle className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Quem Somos</span>
              </Link>
              <Link href="/servicos" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <BiSolidBriefcaseAlt2 className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Serviços</span>
              </Link>
              <Link href="/equipa" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <BiSolidGroup className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Equipa</span>
              </Link>
           
              <Link href="/contactos" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <BiEnvelope className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Contactos</span>
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Linha de Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} Silveira & Associados. Todos os direitos reservados. Desenvolvido por: <Link href="https://pixelcreatives.pt" className="text-white underline" target="_blank">Pixel Creatives</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;