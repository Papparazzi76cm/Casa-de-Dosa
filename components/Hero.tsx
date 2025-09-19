
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/21/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`relative z-10 p-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          Casa de Dosa
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light text-slate-200">
          Donde la Pasión India se encuentra con el Alma Española.
        </p>
        <div className="space-x-4">
          <a
            href="#reservations"
            className="inline-block bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
          >
            Reserva tu Mesa
          </a>
          <a
            href="#menu"
            className="inline-block bg-transparent border-2 border-amber-500 text-white font-bold py-3 px-8 rounded-md hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
          >
            Ver Menú
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
