import React, { useState, useRef } from 'react';
import { menuItems } from '../constants';
import { MenuCategory } from '../types';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');

  const categories = [ 'All', ...Object.values(MenuCategory)];

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="menu" ref={sectionRef} className={`py-20 bg-slate-900 transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Nuestra Carta</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Un viaje culinario que fusiona la vibrante cocina india con la tradición española. Cada plato es una obra de arte, preparada con los ingredientes más frescos.
        </p>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as MenuCategory | 'All')}
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-amber-500/20 hover:text-amber-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div key={item.name} className="bg-slate-800 rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover group-hover:opacity-90 group-hover:scale-105 transition-all duration-300" />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-400 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;