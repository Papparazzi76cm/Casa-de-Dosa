import React, { useState, useEffect, useRef } from 'react';
import { smoothScrollTo } from '../utils/scrolling';
import { logoImage } from '../assets/images';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 px-3 py-2 text-sm font-medium"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      smoothScrollTo(targetPosition, 500);
    }

    closeMenu();
  };


  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#menu', label: 'Carta' },
    { href: '#reservations', label: 'Reservas' },
    { href: '#about', label: 'Nosotros' },
    { href: '#gallery', label: 'Galería' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <img src={logoImage} alt="Casa de Dosa Logo" className="h-16 w-auto object-contain" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;