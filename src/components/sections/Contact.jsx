// === CONTACT / RESUME PAGE ===
// Based on contactRef.html layout.
// Sections: Hero header → Download → Operational History (Samsung only)
// Removed: Classified badge, Doc.Ref, copyright, Education, Skills Matrix
// Added: GitHub / LinkedIn / Email with SVG icons
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Shared FadeUp ────────────────────────────────────────────────────────────
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

// ─── Social link icon SVGs ────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: 'GITHUB',
    href: 'https://github.com/Nitish23100',
    Icon: GithubIcon,
    desc: 'VIEW SOURCE CODE & REPOSITORIES',
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/nitishdubey26',
    Icon: LinkedInIcon,
    desc: 'PROFESSIONAL NETWORK & ENDORSEMENTS',
  },
  {
    label: 'EMAIL',
    href: 'mailto:rishukanha.spr@gmail.com',
    Icon: EmailIcon,
    desc: 'DIRECT LINE: rishukanha.spr@gmail.com',
  },
];

// ─── CONTACT / RESUME SECTION ──────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto relative">

      {/* Decorative background glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-container/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-primary-container/10 blur-[100px] -z-10 pointer-events-none" />

      {/* ── Hero Header ── */}
      <FadeUp>
        <header className="mb-20 border-l-4 border-primary-container pl-8">
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface uppercase leading-none">
            INTEL /{' '}
            <span className="text-primary-container">RESUME</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-white/60 max-w-2xl">
            High-level architectural overview of technical expertise and operational history.
          </p>
        </header>
      </FadeUp>

      <div className="space-y-24">

        {/* ── Download ── */}
        <FadeUp delay={0.1}>
          <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-surface-container-lowest border-l-2 border-primary-container relative overflow-hidden group"
            style={{ boxShadow: '0 0 40px rgba(204,0,0,0.15)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-transparent pointer-events-none" />
            <div className="relative z-10 mb-6 md:mb-0">
              <h3 className="font-headline text-2xl font-bold tracking-tight text-white mb-1">
                PORTABLE DOCUMENT FORMAT
              </h3>
              <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
                NitishResume4.pdf
              </p>
            </div>
            <a
              href="/Doc/NitishResume4.pdf"
              download
              className="relative z-10 bg-primary-container text-white px-10 py-5 font-headline font-black tracking-widest uppercase text-sm hover:bg-on-primary-fixed-variant hover:drop-shadow-[0_0_20px_rgba(204,0,0,0.6)] transition-all duration-300 active:scale-95 flex items-center gap-3"
            >
              DOWNLOAD_RESUME.PDF
              <span className="material-symbols-outlined" data-icon="download">download</span>
            </a>
          </section>
        </FadeUp>

        {/* ── Operational History ── */}
        <FadeUp delay={0.15}>
          <section>
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="font-headline text-3xl font-black tracking-tighter uppercase text-white">
                OPERATIONAL_HISTORY
              </h2>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            {/* Samsung Prism entry */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="font-mono text-xs text-primary tracking-widest uppercase py-1">
                2025 — 2026
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-white mb-1">
                  R&D Intern
                </h3>
                <p className="text-primary-container font-medium mb-4 uppercase tracking-widest text-xs font-headline">
                  Samsung // Remote
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Developed "Guide Weave," an AI-powered system that transforms unstructured instructions
                  into structured, step-by-step visual guides. Built pipelines for task decomposition,
                  automated image retrieval, and region annotation to improve clarity, usability, and
                  workflow efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'RAG', 'LLM', 'React'].map((tag) => (
                    <span key={tag} className="bg-surface-container-highest px-3 py-1 font-mono text-[10px] text-white/70 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* ── Social / Connect ── */}
        <FadeUp delay={0.2}>
          <section>
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="font-headline text-3xl font-black tracking-tighter uppercase text-white">
                ESTABLISH_LINK
              </h2>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {SOCIAL_LINKS.map(({ label, href, Icon, desc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-4 p-8 bg-surface hover:bg-surface-container-highest transition-all duration-300"
                >
                  {/* Icon */}
                  <span className="text-white/40 group-hover:text-primary-container transition-colors duration-300">
                    <Icon />
                  </span>

                  {/* Label */}
                  <span className="font-headline font-black text-xl tracking-widest uppercase text-white group-hover:text-primary transition-colors duration-300">
                    {label}
                  </span>

                  {/* Desc */}
                  <span className="font-mono text-[10px] text-white/30 tracking-widest group-hover:text-white/50 transition-colors duration-300">
                    {desc}
                  </span>

                  {/* Bottom arrow hint */}
                  <span className="font-mono text-[10px] text-primary-container opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 mt-auto">
                    OPEN →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </FadeUp>

      </div>
    </section>
  );
}
