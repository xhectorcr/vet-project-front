import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-300 py-4 mt-8 text-center">
      <p className="text-white font-medium">Comunícate con soporte</p>
      <div className="flex justify-center flex-wrap gap-4 mt-2 text-sm text-gray-700">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-600 transition text-white"
        >
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition text-white"
        >
          <FontAwesomeIcon icon={faFacebook} />
          Facebook
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-600 transition text-white"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black transition text-white"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
