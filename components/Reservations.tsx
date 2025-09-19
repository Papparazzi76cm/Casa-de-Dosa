
import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const Reservations: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
  });

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section 
      id="reservations" 
      ref={sectionRef}
      className={`py-20 bg-slate-800/50 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Haz tu Reserva</h2>
          <p className="text-slate-400 mb-8">
            Asegura tu mesa y prepárate para una experiencia gastronómica inolvidable.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-slate-800 p-8 rounded-lg shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-2xl font-bold text-white mt-4">¡Reserva Enviada!</h3>
              <p className="text-slate-300 mt-2">Gracias. Nos pondremos en contacto contigo para confirmar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-amber-400 mb-1">Fecha</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-amber-400 mb-1">Hora</label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-amber-400 mb-1">Comensales</label>
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    min="1"
                    max="12"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border-slate-600 text-white rounded-md p-3 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
              >
                Reservar Ahora
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservations;