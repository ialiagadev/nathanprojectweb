import React from 'react';
import { FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 flex justify-between items-center relative">
      {/* Línea superior del footer */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      {/* Contenido del footer */}
      <p className="text-sm">© 2024 Jordan Coach | Todos los derechos reservados.</p>
      <div className="flex space-x-4">
        <a href="https://www.twitch.tv/jordan_fdx" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FaTwitch className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@JordanFDX" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FaYoutube className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/cryptocoach.psico?igsh=MXM4amgzdzI3enN3cQ==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
