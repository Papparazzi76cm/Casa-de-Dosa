
import React, { useRef } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { aboutImage } from '../assets/images';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-slate-900 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={aboutImage}
              alt="Interior de Casa de Dosa"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
            <p className="text-slate-400 mb-4">
              Casa de Dosa nació de un sueño: unir dos de las culturas gastronómicas más ricas del mundo. Nuestros fundadores, un chef de Kerala y una gastrónoma de Madrid, se conocieron compartiendo su amor por la comida y descubrieron sorprendentes sinergias entre sus cocinas natales.
            </p>
            <p className="text-slate-400 mb-6">
              Nuestro concepto se basa en el respeto por la tradición y la audacia de la innovación. Utilizamos técnicas españolas clásicas con especias y sabores indios, creando platos únicos que cuentan una historia en cada bocado.
            </p>
            <h3 className="text-2xl font-bold text-amber-400 mb-3">Misión y Valores</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li><strong>Calidad:</strong> Ingredientes frescos y de origen local siempre que es posible.</li>
              <li><strong>Creatividad:</strong> Empujar los límites de la cocina fusión con respeto y pasión.</li>
              <li><strong>Hospitalidad:</strong> Crear un ambiente cálido y acogedor para cada uno de nuestros clientes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;