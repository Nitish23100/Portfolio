// === APP ===
// Scroll-based single-page layout.
// All sections live in one vertical document.
// Intro overlay fires once per session. After it's done, the portfolio is revealed.
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/intro/IntroOverlay';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const INTRO_KEY = 'introPlayed';

export default function App() {
  const alreadyPlayed = sessionStorage.getItem(INTRO_KEY) === 'true';
  const [showIntro, setShowIntro]         = useState(!alreadyPlayed);
  const [showPortfolio, setShowPortfolio] = useState(alreadyPlayed);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll via IntersectionObserver
  useEffect(() => {
    if (!showPortfolio) return;

    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [showPortfolio]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowPortfolio(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#131313] min-h-screen">

      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Portfolio — full page scroll layout */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            key="portfolio-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Fixed Navbar */}
            <Navbar
              activeSection={activeSection}
              onNav={scrollToSection}
            />

            {/* All sections stacked vertically */}
            <main>
              <section id="home"><Home onNav={scrollToSection} /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="skills"><Skills /></section>
              <section id="experience"><Experience /></section>
              <section id="contact"><Contact /></section>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
