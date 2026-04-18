// === HOME PAGE ===
// Sections: Hero → Featured Projects (Bento Grid) → Technical Proficiency → CTA
// Visual fidelity to HomeReference.html, rebuilt clean with React + Tailwind + Framer Motion.
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// ─── Shared animation helpers ────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Skill progress bar ───────────────────────────────────────────────────────

function SkillBar({ label, percent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-on-surface/50">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-container to-primary bar-glow"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const SKILLS = [
  { label: 'FRONTEND_ARCHITECTURE', percent: 98 },
  { label: 'BACKEND_LOGIC',         percent: 94 },
  { label: 'DEVOPS_AUTOMATION',     percent: 89 },
  { label: 'UI_UX_PRECISION',       percent: 99 },
];

const TECH_TAGS = [
  'Typescript', 'React/Next.js', 'Node.js',
  'PostgreSQL', 'AWS / Vercel', 'Rust', 'Docker',
];

// ─── SECTION 1: Hero ─────────────────────────────────────────────────────────

function HeroSection({ onNav }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Radial red eclipse background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.15) 0%, rgba(19,19,19,0) 70%)' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        {/* Eyebrow label */}
        <motion.p
          className="font-mono text-[10px] tracking-[0.5em] text-primary mb-6 uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          System_Protocol: Initialized
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="font-headline font-black text-6xl md:text-9xl text-on-surface tracking-tighter leading-none mb-8 red-glow-text uppercase"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          FULL STACK /<br />ARCHITECT
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-2xl text-on-surface/70 max-w-2xl mx-auto mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          Building high-performance digital infrastructure with aesthetic precision.
          Defined by brutalist code and cinematic user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
        >
          <button
            onClick={() => onNav('projects')}
            id="hero-view-archives"
            className="
              w-full md:w-auto px-10 py-4
              bg-primary-container text-white
              font-headline font-bold text-xs tracking-[0.2em] uppercase
              transition-all duration-300
              hover:scale-95 hover:bg-on-primary-fixed-variant
              cursor-pointer
            "
          >
            VIEW ARCHIVES
          </button>
          <button
            onClick={() => onNav('contact')}
            id="hero-establish-connection"
            className="
              w-full md:w-auto px-10 py-4
              border border-outline-variant text-on-surface
              font-headline font-bold text-xs tracking-[0.2em] uppercase
              transition-all duration-300
              hover:bg-surface-container-highest
              cursor-pointer
            "
          >
            ESTABLISH CONNECTION
          </button>
        </motion.div>
      </div>

    </section>
  );
}



// ─── SECTION 3: Technical Proficiency ────────────────────────────────────────

function TechnicalProficiencySection() {
  return (
    <section id="technical-proficiency" className="py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: text + tech tags */}
        <FadeUp>
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            System_Capabilities
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tighter mt-2 uppercase mb-8">
            Technical<br />Proficiency
          </h2>
          <p className="font-body text-on-surface/60 max-w-md mb-12">
            I specialize in building systems that don't just work—they endure.
            My stack is refined for performance, security, and uncompromising aesthetic standards.
          </p>
          <div className="flex flex-wrap gap-3">
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="
                  px-4 py-2 bg-surface-variant
                  font-headline text-[10px] font-bold tracking-widest uppercase
                  text-on-surface hover:text-primary-container
                  transition-colors cursor-default
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Right: animated skill bars */}
        <FadeUp delay={0.15}>
          <div className="space-y-8 bg-surface-container-low p-10 ghost-border">
            {SKILLS.map(({ label, percent }) => (
              <SkillBar key={label} label={label} percent={percent} />
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

// ─── SECTION 4: CTA ──────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section id="cta" className="py-32 px-8 text-center relative overflow-hidden">
      {/* Radial bottom glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at bottom, rgba(204,0,0,0.10) 0%, transparent 50%)' }}
      />

      <div className="relative z-10">
        <FadeUp>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tighter uppercase mb-8">
            Ready to<br />Execute?
          </h2>
          <button
            id="cta-initiate-contact"
            className="
              px-12 py-5
              bg-on-surface text-background
              font-headline font-black text-sm tracking-[0.3em] uppercase
              hover:bg-primary-container hover:text-white
              transition-all duration-300
              cursor-pointer
            "
          >
            INITIATE_CONTACT
          </button>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── HOME PAGE (composed) ─────────────────────────────────────────────────────

export default function Home({ onNav }) {
  return (
    <>
      <HeroSection onNav={onNav} />
      <TechnicalProficiencySection />
      <CTASection />
    </>
  );
}
