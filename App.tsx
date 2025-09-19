
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Reservations />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
