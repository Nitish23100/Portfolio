// === NAVBAR ===
// Receives activeSection + onNav from App.jsx.
// Click navigates between sections — no page scrolling.
// Active link: white + CC0000 bottom border.
// Inactive: white/60, hover red glow.
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants';

export default function Navbar({ activeSection, onNav }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (sectionId) => {
    onNav(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-40 w-full bg-[#131313]/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-8 py-4 flex-shrink-0">

      {/* Logo / brand */}
      <button
        onClick={() => handleNav('home')}
        className="text-2xl font-black text-[#CC0000] tracking-tighter font-headline select-none cursor-pointer"
      >
        ARCHITECT
      </button>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`
                font-headline tracking-[0.05em] uppercase text-xs
                transition-all duration-300 cursor-pointer bg-transparent border-none
                ${isActive
                  ? 'text-white border-b border-[#CC0000] pb-px'
                  : 'text-white/60 hover:text-[#CC0000] hover:drop-shadow-[0_0_8px_rgba(204,0,0,0.8)]'
                }
              `}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Right: mobile hamburger */}
      <div className="flex items-center">
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <motion.div className="w-6 h-0.5 bg-current" animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} transition={{ duration: 0.2 }} />
            <motion.div className="w-6 h-0.5 bg-current" animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} />
            <motion.div className="w-6 h-0.5 bg-current" animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }} transition={{ duration: 0.2 }} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-[#131313]/98 backdrop-blur-md border-t border-white/5 md:hidden z-50"
          >
            <div className="px-8 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`block w-full text-left font-headline tracking-[0.05em] uppercase text-xs py-2 transition-all duration-300 bg-transparent border-none cursor-pointer
                    ${activeSection === link.id
                      ? 'text-white border-b border-[#CC0000]'
                      : 'text-white/60 hover:text-[#CC0000]'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
