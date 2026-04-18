// === ABOUT PAGE ===
// Built from aboutRef.html, clean React + Tailwind + Framer Motion.
// Layout: IDENTITY header → 2-col (portrait left, narrative + data points right)
// Profile image: /media/images/nitish.png
// Removed: "Status: Active" and "ID_VERIFIED_BY_VOID"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Shared FadeUp helper ─────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data Points ──────────────────────────────────────────────────────────────
const DATA_POINTS = [
  {
    id: 'edu1',
    eyebrow: '2023 – 2027',
    heading: 'Computer Science BTech',
    sub: 'IIIT NR',
    underline: true,
  },
  {
    id: 'edu2',
    eyebrow: '2026 – PRESENT',
    heading: 'Intern',
    sub: 'Samsung Prism',
    underline: true,
  },
  {
    id: 'spec',
    eyebrow: 'SPECIALIZATION',
    heading: 'MERN Stack Architecture',
    sub: 'Dark UI Systems & Visual Depth',
    underline: false,
  },
  {
    id: 'tool',
    eyebrow: 'TOOLSET',
    heading: 'Full Stack Mastery',
    sub: 'Rust / TypeScript / Tailwind / Postgres',
    underline: false,
  },
];

// ─── Data Point Card ─────────────────────────────────────────────────────────
function DataCard({ eyebrow, heading, sub, underline }) {
  return (
    <div className="bg-surface p-6 hover:bg-surface-container-highest transition-colors duration-300 group">
      <span className="font-mono text-[10px] text-primary block mb-2 uppercase tracking-widest">
        {eyebrow}
      </span>
      <h3 className="font-headline font-bold text-white group-hover:text-primary transition-colors duration-300">
        {heading}
      </h3>
      <p className="font-mono text-xs text-on-surface/50 mt-1 uppercase tracking-tighter">
        {sub}
      </p>
      {underline && (
        <div className="mt-4 h-px w-0 group-hover:w-full bg-primary-container transition-all duration-500" />
      )}
    </div>
  );
}

// ─── ABOUT SECTION ────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen"
    >
      {/* ── Ambient background glows ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'rgba(204,0,0,0.2)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[100px]"
          style={{ background: 'rgba(14,14,14,0.4)' }}
        />
      </div>

      {/* ── IDENTITY Header ── */}
      <FadeUp>
        <header className="mb-24 relative">
          {/* Shiringan orbit accent — top left */}
          <div
            className="absolute -left-12 top-0 w-24 h-24 flex items-center justify-center opacity-20"
            style={{ border: '1px solid rgba(204,0,0,0.2)', borderRadius: '50%' }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ border: '1px solid rgba(204,0,0,0.2)', borderRadius: '50%' }}
            >
              <div className="w-4 h-4 bg-primary-container rounded-full" />
            </div>
          </div>

          <h1 className="font-headline font-black text-8xl md:text-9xl tracking-[0.15em] text-on-surface opacity-90 leading-none uppercase">
            IDENTITY
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-px w-24 bg-primary-container" />
            <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Subject: Architect_01
            </span>
          </div>
        </header>
      </FadeUp>

      {/* ── Two-Column Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: Portrait ── */}
        <FadeUp delay={0.1} className="relative group">
          {/* Red offset shadow block */}
          <div className="absolute inset-0 bg-primary-container/10 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

          {/* Portrait */}
          <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700 bg-surface-container-lowest">
            <img
              src="/media/images/nitish.png"
              alt="Nitish — Full Stack Developer"
              className="w-full h-full object-cover object-top"
            />

            {/* Tech scan overlay */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-primary/50 leading-none select-none">
              SCANNING_MODULE_ACTIVE<br />
              LAT: 34.0522 N<br />
              LNG: 118.2437 W
            </div>
          </div>

          {/* Spinning Sharingan SVG accent */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10 pointer-events-none">
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="#CC0000" strokeWidth="0.5" />
              <circle cx="50" cy="15" r="5" fill="#CC0000" />
              <circle cx="20" cy="65" r="5" fill="#CC0000" />
              <circle cx="80" cy="65" r="5" fill="#CC0000" />
            </motion.svg>
          </div>
        </FadeUp>

        {/* ── Right: Narrative + Data Points ── */}
        <div className="space-y-12">

          {/* Bio Narrative */}
          <FadeUp delay={0.15}>
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container inline-block" />
                <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white">
                  Nitish Dubey
                </h2>
              </div>
              <div className="space-y-6 text-on-surface/80 leading-relaxed text-lg font-light">
                <p className="text-primary font-medium tracking-wide">
                  Developer • Problem Solver • Builder
                </p>
                <p>
                  I build digital products where clean design meets solid engineering. My focus is creating fast, modern, and impactful web experiences that don't just look good they work flawlessly.
                </p>
                <p>
                  From full-stack development to AI-driven systems, I enjoy turning ideas into real products through logic, creativity, and precision. Every project I build is driven by one goal: solve real problems with elegant execution.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Data Points Grid */}
          <FadeUp delay={0.25}>
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container inline-block" />
                <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white">
                  Data Points
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                {DATA_POINTS.map((dp) => (
                  <DataCard key={dp.id} {...dp} />
                ))}
              </div>
            </section>
          </FadeUp>



        </div>
      </div>
    </section>
  );
}
