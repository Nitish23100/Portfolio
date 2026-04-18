// === EXPERIENCE PAGE ===
// Built from ExperienceRef.html — alternating timeline layout.
// Real data: 5 entries from 2024–2026.
// Removed: "Technical Arsenal" ENGINE grid, copyright footer line.
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Timeline entry data ──────────────────────────────────────────────────────
// side: 'left' = content on left (text-right), 'right' = content on right
const TIMELINE = [
  {
    year: '2026',
    side: 'left',
    type: 'Internship',
    title: 'R&D @ Samsung Prism',
    desc: 'Developing "Guide Weave," an AI system that transforms unstructured instructions into structured, step-by-step visual guides.',
    tags: ['AI', 'React', 'Python'],
  },
  {
    year: '2026',
    side: 'right',
    type: 'Achievement',
    title: 'Big Code — Google',
    desc: "Placed under top 1500 students nationwide in Google's Big Code challenge.",
    tags: [],
  },
  {
    year: '2025',
    side: 'left',
    type: 'Certification',
    title: 'Apna College',
    desc: 'Full Stack Developer Certification from Apna College covering end-to-end web development with modern tools and frameworks.',
    tags: [],
  },
  {
    year: '2024',
    side: 'right',
    type: 'Certification',
    title: 'ALGO University',
    desc: 'Qualified under top 2000 students nationwide in algorithmic problem solving assessment.',
    tags: [],
  },
  {
    year: '2024',
    side: 'left',
    type: 'Hackathon',
    title: 'Runner Up @ E-Cell',
    desc: 'Built a real-time disaster management platform enabling multiple NGOs to coordinate relief efforts, share live needs data, and streamline response during emergencies.',
    tags: [],
  },
];

// ─── Single timeline entry ────────────────────────────────────────────────────
function TimelineEntry({ year, side, type, title, desc, tags, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const isLeft = side === 'left';

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-between"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
    >
      {/* Left column */}
      <div
        className={`w-full md:w-[45%] order-2 md:order-1 mt-4 md:mt-0
          ${isLeft ? 'text-right pr-0 md:pr-12' : ''}`}
      >
        {isLeft ? (
          <EntryContent type={type} title={title} desc={desc} tags={tags} align="right" />
        ) : (
          <div className="h-px w-full bg-white/5 mt-8 hidden md:block" />
        )}
      </div>

      {/* Year badge — center */}
      <div className="z-10 order-1 md:order-2 flex-shrink-0">
        <div
          className="w-16 h-16 bg-[#0e0e0e] border border-[#CC0000]/30 flex items-center justify-center font-headline font-bold text-xl text-[#CC0000]"
          style={index === 0 ? { boxShadow: '0 0 40px rgba(204,0,0,0.15)' } : {}}
        >
          {year}
        </div>
      </div>

      {/* Right column */}
      <div className="w-full md:w-[45%] pl-0 md:pl-12 order-3 mt-4 md:mt-0">
        {!isLeft ? (
          <EntryContent type={type} title={title} desc={desc} tags={tags} align="left" />
        ) : (
          <div className="h-px w-full bg-white/5 mt-8 hidden md:block" />
        )}
      </div>
    </motion.div>
  );
}

function EntryContent({ type, title, desc, tags, align }) {
  return (
    <>
      <div className="font-mono text-[#CC0000] text-sm mb-1 uppercase tracking-widest">
        {type}
      </div>
      <h3 className="text-white font-headline text-2xl font-bold tracking-tight">
        {title}
      </h3>
      <p className="text-on-surface/60 text-sm mt-2 leading-relaxed">{desc}</p>
      {tags.length > 0 && (
        <div className={`flex gap-2 mt-4 ${align === 'right' ? 'justify-end' : ''}`}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] bg-surface-variant px-2 py-1 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

// ─── EXPERIENCE SECTION ───────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen pt-32 pb-24 overflow-hidden">

      {/* Red eclipse background glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10 blur-[150px]"
        style={{ background: 'rgba(204,0,0,0.10)' }}
      />

      {/* ── Header ── */}
      <header className="px-8 md:px-24 mb-20 relative">
        {/* Ghost watermark */}
        <h1
          className="font-headline text-8xl md:text-9xl font-black text-on-surface tracking-widest uppercase opacity-10 absolute -top-4 left-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          JOURNEY
        </h1>
        <motion.h2
          className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter uppercase relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TIMELINE<span className="text-[#CC0000]">.</span>
        </motion.h2>
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-on-surface/40 mt-4 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Systematic archive of professional growth, technical milestones, and architectural achievements.
        </motion.p>
      </header>

      {/* ── Timeline ── */}
      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#CC0000]/30 -translate-x-1/2" />

        <div className="space-y-32">
          {TIMELINE.map((entry, i) => (
            <TimelineEntry key={`${entry.year}-${entry.type}-${i}`} {...entry} index={i} />
          ))}
        </div>
      </div>


    </section>
  );
}
