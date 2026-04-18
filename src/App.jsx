// === APP ===
// Single-section navigation system.
// Only one section visible at a time. Navbar clicks switch sections.
// Body scroll is locked; each section container scrolls internally.
// Transitions: Framer Motion AnimatePresence fade + vertical shift.
import { useState } from 'react';
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

// Map section id → component wrapper
const SECTIONS = {
  home:       (props) => <Home {...props} />,
  about:      (props) => <About {...props} />,
  projects:   (props) => <Projects {...props} />,
  skills:     (props) => <Skills {...props} />,
  experience: (props) => <Experience {...props} />,
  contact:    (props) => <Contact {...props} />,
};

// Framer Motion variants for section transitions
const variants = {
  enter:  { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -12 },
};

export default function App() {
  const alreadyPlayed = sessionStorage.getItem(INTRO_KEY) === 'true';
  const [showIntro, setShowIntro]         = useState(!alreadyPlayed);
  const [showPortfolio, setShowPortfolio] = useState(alreadyPlayed);
  const [activeSection, setActiveSection] = useState('home');

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowPortfolio(true);
  };

  return (
    // Root lockbox: full viewport, overflow hidden — prevents ANY page scroll
    <div className="fixed inset-0 overflow-hidden bg-[#131313]">

      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Portfolio shell */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            key="portfolio-shell"
            className="absolute inset-0 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Fixed Navbar — always on top */}
            <Navbar
              activeSection={activeSection}
              onNav={setActiveSection}
            />

            {/* Section viewport: takes all remaining height, scrolls internally */}
            <div className="flex-1 overflow-hidden relative mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="absolute inset-0 overflow-y-auto"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {SECTIONS[activeSection]({ onNav: setActiveSection })}

                  {/* Footer inside each section's scroll container */}
                  <Footer />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
