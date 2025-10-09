import React, { useState, useRef, useEffect, useCallback } from 'react';
import { galleryImages } from '../constants';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // isVisible is for the initial fade-in/slide-up animation. It only runs once.
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  // isParallaxActive is for controlling the scroll listener for performance.
  const [isParallaxActive, setIsParallaxActive] = useState(false);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  // Intersection observer to activate/deactivate parallax effect for performance
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set active state based on whether the element is intersecting the viewport
        setIsParallaxActive(entry.isIntersecting);
      },
      {
        // Use rootMargin to start the effect slightly before it enters the screen
        // and stop it slightly after it leaves, preventing visual jumps.
        rootMargin: '200px 0px 200px 0px',
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Parallax scroll effect, now driven by isParallaxActive
  useEffect(() => {
    const handleParallax = () => {
      if (sectionRef.current) {
        const speed = 0.2; // Refined for a more subtle effect
        const top = sectionRef.current.getBoundingClientRect().top;
        setParallaxY(top * speed);
      }
    };
    
    if (isParallaxActive) {
      window.addEventListener('scroll', handleParallax, { passive: true });
      handleParallax(); // Call once to set initial position correctly
    }

    return () => window.removeEventListener('scroll', handleParallax);
  }, [isParallaxActive]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('https://picsum.photos/id/488/1920/1080?blur=2')",
        backgroundPosition: `center ${parallaxY}px`,
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className={`relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Galería de Momentos</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Capturas de nuestra pasión: desde los vibrantes colores de nuestros platos hasta la atmósfera única de nuestro local.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative h-[30rem] md:h-[36rem] lg:h-[40rem]">
          <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                aria-hidden={index !== currentIndex}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform ${index === currentIndex ? 'scale-110 duration-[9000ms] ease-linear' : 'scale-100 duration-1000 ease-out'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <p className="absolute bottom-6 left-6 text-white text-lg font-medium p-2 bg-black/40 rounded-md transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-slate-800/50 text-white p-2 rounded-full hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-slate-800/50 text-white p-2 rounded-full hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {galleryImages.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === slideIndex ? 'bg-amber-400 scale-125' : 'bg-slate-500/50 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={currentIndex === slideIndex}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;