
import React, { useRef } from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from './icons/Icons';
import { SocialIcons } from './icons/SocialIcons';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-amber-400 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{children}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 bg-slate-900 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Contacto</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            ¿Preguntas, comentarios o simplemente quieres saludar? Estamos aquí para ayudarte.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 bg-slate-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Ponte en Contacto</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={<MapPinIcon />} title="Dirección">
                Calle de la Fusión, 123<br/>
                28013 Madrid, España
              </ContactInfoItem>
              <ContactInfoItem icon={<PhoneIcon />} title="Teléfono">
                <a href="tel:+34912345678" className="hover:text-amber-400 transition-colors">+34 912 345 678</a>
              </ContactInfoItem>
              <ContactInfoItem icon={<MailIcon />} title="Email">
                <a href="mailto:reservas@casadedosa.es" className="hover:text-amber-400 transition-colors">reservas@casadedosa.es</a>
              </ContactInfoItem>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
                <SocialIcons />
            </div>
          </div>
          <div className="lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.668545805201!2d-3.7058861!3d40.4161721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e07e9e4ab%3A0x28096c4df35e6481!2sPlaza%20Mayor!5e0!3m2!1sen!2ses"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Casa de Dosa"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
