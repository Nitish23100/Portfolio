// === PROJECTS PAGE ===
// Built from projectRef.html
// Replaces placeholders with real projects and links.
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'WANDERLUST',
    version: 'v1.0.0',
    desc: 'A full-stack Airbnb inspired travel platform for listing, discovering, and booking stays with dynamic CRUD functionality and scalable backend architecture.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    link: 'https://wander-lust-pied.vercel.app?_vercel_share=WHHffIO3JwIlcXOFtcQWEtv4QhbEfvaR',
    img: '/media/images/WanderLust.png',
  },
  {
    title: 'GOLF CHARITY',
    version: 'v1.0.0',
    desc: 'Golf charity platform that connects tournaments, donors, and causes, enabling seamless fundraising, event management, and transparent contribution tracking.',
    tags: ['PostgreSQL', 'NextJS', 'JWT'],
    link: 'https://golf-charity-platform-6a22q0j46-rishu12349875-5371s-projects.vercel.app/',
    img: '/media/images/GolfCharity.png',
  },
  {
    title: 'FAKE NEWS VERIFIER',
    version: 'v1.0.0',
    desc: 'Fake news verifier platform that analyzes online content using AI to detect misinformation, assess credibility, and help users make informed decisions.',
    tags: ['LLM', 'SERP API', 'React'],
    link: 'https://fake-news-verifier-t58y.vercel.app/',
    img: '/media/images/fake-news-verifier.png',
  },
  {
    title: 'COMING SOON',
    version: 'vX.X.X',
    desc: 'Currently classified. Protocol parameters are being established for the next deployment phase. System architecture pending.',
    tags: ['CLASSIFIED', 'ENCRYPTED'],
    link: '#',
    img: null,
    isComingSoon: true,
  },
];

// ─── Project Card Component ─────────────────────────────────────────────────
function ProjectCard({ title, version, desc, tags, link, img, isComingSoon, index }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className={`group relative bg-surface p-8 md:p-12 transition-all duration-500 hover:scale-[1.01] hover:z-10 hover:bg-surface-container-highest cursor-crosshair h-full flex flex-col ${!isComingSoon ? 'hover:shadow-[0_0_40px_rgba(204,0,0,0.15)]' : ''}`}>
        
        {/* Image Box as Link */}
        <a 
          href={isComingSoon ? undefined : link}
          target={isComingSoon ? undefined : '_blank'}
          rel="noopener noreferrer"
          onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
          className={`aspect-video w-full overflow-hidden mb-8 relative bg-surface-container-lowest border border-white/5 flex items-center justify-center ${isComingSoon ? '' : 'cursor-pointer'}`}
        >
          <div className="absolute inset-0 bg-primary-container/10 z-10 mix-blend-overlay pointer-events-none" />
          
          {img ? (
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          ) : (
            <div className="font-mono text-white/20 text-lg uppercase tracking-widest">
              LOCKED_
            </div>
          )}
        </a>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-headline text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span className="font-mono text-xs text-white/40">{version}</span>
          </div>

          <p className="text-on-surface-variant font-light mb-8 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Footer info (tags & link) */}
        <div>
          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] py-1 px-3 bg-surface-container-low text-on-surface-variant border border-white/5">
                [ {tag} ]
              </span>
            ))}
          </div>
        </div>

      </div>
    </FadeUp>
  );
}

// ─── PROJECTS SECTION ──────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="pt-32 pb-24 px-8 md:px-24">
      
      {/* ── Header ── */}
      <FadeUp>
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-primary-container" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
              DIRECTORY_SUB_04
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface uppercase mb-4">
            THE ARCHIVES
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-light leading-relaxed">
            A curated selection of technical maneuvers, digital infrastructures, and low-level system orchestrations. Each entry represents a unique solution to a complex engineering paradox.
          </p>
        </header>
      </FadeUp>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 relative">
        {PROJECTS.map((proj, idx) => (
          <ProjectCard key={proj.title} {...proj} index={idx} />
        ))}
      </div>

      {/* ── Terminal Status Bar (Decorative) ── */}
      <FadeUp delay={0.4}>
        <section className="mt-24 p-6 bg-surface-container-lowest border-l-2 border-primary-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            <div className="flex gap-6 items-center">
              <span className="material-symbols-outlined text-primary-container" data-icon="sensors">
                sensors
              </span>
              <div>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  System_Status
                </p>
                <p className="font-mono text-xs text-on-surface">
                  ALL_NODES_OPERATIONAL
                </p>
              </div>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Total_Builds
                </p>
                <p className="font-mono text-xs text-on-surface">
                  142_COMMITS
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Uptime
                </p>
                <p className="font-mono text-xs text-on-surface">
                  99.98%
                </p>
              </div>
            </div>

          </div>
        </section>
      </FadeUp>
      
    </section>
  );
}
