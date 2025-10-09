import React from 'react';
import { SocialIcons } from './icons/SocialIcons';
import { smoothScrollTo } from '../utils/scrolling';
import { logoImage } from '../assets/images';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Get header height dynamically to account for responsive changes
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight ?? 0;
      const targetPosition = targetElement.offsetTop - headerHeight;

      smoothScrollTo(targetPosition, 500);
    }
  };
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <img src={logoImage} alt="Casa de Dosa Logo" className="h-32 w-auto object-contain mb-4" />
            <p className="text-slate-400 max-w-md">
              Una experiencia culinaria única que celebra la fusión de los vibrantes sabores de la India y la rica tradición de España.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={handleNavClick} className="text-slate-400 hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#menu" onClick={handleNavClick} className="text-slate-400 hover:text-amber-400 transition-colors">Carta</a></li>
              <li><a href="#reservations" onClick={handleNavClick} className="text-slate-400 hover:text-amber-400 transition-colors">Reservas</a></li>
              <li><a href="#contact" onClick={handleNavClick} className="text-slate-400 hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Horarios</h4>
            <p className="text-slate-400">Mar - Jue: 18:00 - 23:00</p>
            <p className="text-slate-400">Vie - Dom: 13:00 - 24:00</p>
            <p className="text-slate-400">Lunes: Cerrado</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Casa de Dosa. Todos los derechos reservados.</p>
            <p className="text-slate-500 text-sm mt-1">Grupo Kokopeli</p>
          </div>
          <div className="mt-4 md:mt-0">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;