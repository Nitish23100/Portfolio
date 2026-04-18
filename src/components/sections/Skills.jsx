// === SKILLS PAGE ===
// Built from SkillsRef.html, clean React + Tailwind + Framer Motion.
// Layout: ARSENAL hero header → 4-col skills grid → Technical Edge panel
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Animated skill bar ───────────────────────────────────────────────────────
function SkillBar({ label, percent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-end mb-2">
        <span className="font-mono text-[11px] uppercase tracking-tighter text-on-surface/80">
          {label}
        </span>
        <span className="font-mono text-[10px] text-primary">{percent}%</span>
      </div>
      <div className="h-[2px] w-full bg-surface-container-highest">
        <motion.div
          className="h-full bg-primary-container"
          style={{ boxShadow: '0 0 15px 2px rgba(204,0,0,0.3)' }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
        />
      </div>
    </div>
  );
}

// ─── Skill category column ────────────────────────────────────────────────────
function SkillCategory({ index, title, skills, tags }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.section
      ref={ref}
      className="bg-surface p-8 border-r border-white/5 last:border-r-0"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      {/* Category header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-headline text-lg font-bold tracking-widest text-on-surface uppercase">
          {title}
        </h2>
        <span className="font-mono text-[10px] text-primary-container">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Skill bars */}
      <div className="space-y-10">
        {skills.map((s) => (
          <SkillBar key={s.label} label={s.label} percent={s.percent} />
        ))}
      </div>

      {/* Tag pills */}
      <div className="mt-12 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-surface-container-highest px-3 py-1 font-mono text-[9px] text-on-surface/60 hover:text-primary-container transition-colors duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { label: 'React / Next.js', percent: 94 },
      { label: 'Tailwind CSS',    percent: 98 },
      { label: 'TypeScript',      percent: 90 },
    ],
    tags: ['FRAMER MOTION', 'WEBGL', 'GSAP'],
  },
  {
    title: 'Backend',
    skills: [
      { label: 'Node.js / Go',   percent: 88 },
      { label: 'PostgreSQL',     percent: 85 },
      { label: 'GraphQL / REST', percent: 92 },
    ],
    tags: ['REDIS', 'DOCKER', 'AWS'],
  },
  {
    title: 'Tools',
    skills: [
      { label: 'CI / CD',          percent: 82 },
      { label: 'Git Architecture', percent: 96 },
      { label: 'Unit Testing',     percent: 89 },
    ],
    tags: ['JEST', 'TERRAFORM', 'FIGMA'],
  },
  {
    title: 'Logic',
    skills: [
      { label: 'Architecture',    percent: 95 },
      { label: 'Optimization',    percent: 91 },
      { label: 'Algorithm Design',percent: 87 },
    ],
    tags: ['SCALABILITY', 'PATTERNS', 'REFACTORING'],
  },
];

const STATS = [
  { value: '11+', label: 'Deployments' },
  { value: '99.9%', label: 'Uptime Target' },
  { value: '0ms',  label: 'Ideal Latency' },
  { value: '∞',    label: 'Iterative Growth' },
];

// ─── SKILLS SECTION ───────────────────────────────────────────────────────────
export default function Skills() {
  const edgeRef = useRef(null);
  const edgeInView = useInView(edgeRef, { once: true, margin: '-60px' });

  return (
    <section id="skills">
      {/* ── ARSENAL Hero Header ─────────────────────────────────────── */}
      <header
        className="relative pt-32 pb-20 px-8 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(204,0,0,0.15) 0%, rgba(19,19,19,0) 70%)',
        }}
      >
        {/* Circuit board background texture */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMJH55095sRoMZQQW5NVyrvYISRaqpso-rjaQf9089CyIssgqTlF6be99VXXYzhabIJPR0AyJhKBU6L3odtmRDm-DwRnICU1qEPLK9VmgOlh30F7hKGwr80wTnO78drfSjmCgJeTt5ZlcR0mar94Op7ot_7J0E5G2oUDawYCgwjTxia2YtfYQqKvj67LVjYAYGvQHHMDYg_WheDrwFQ3MQW7dJJ467-k2ZjJBBEdzxDxCBLIrI5uYWxBxAvFNXmSKhZgWh9Am8mEQ')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Title */}
        <div className="relative z-10 text-center">
          <motion.p
            className="font-mono text-[10px] tracking-[0.5em] text-primary-container mb-4 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            System Capabilities
          </motion.p>
          <motion.h1
            className="font-headline text-7xl md:text-9xl font-black text-on-surface tracking-tighter uppercase mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ARSENAL
          </motion.h1>
          <motion.div
            className="h-px w-24 bg-primary-container mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </header>

      {/* ── 4-Column Skills Grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {CATEGORIES.map((cat, i) => (
            <SkillCategory
              key={cat.title}
              index={i}
              title={cat.title}
              skills={cat.skills}
              tags={cat.tags}
            />
          ))}
        </div>

        {/* ── Technical Edge Panel ─────────────────────────────────── */}
        <motion.div
          ref={edgeRef}
          className="mt-24 bg-surface-container-lowest p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={edgeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Decorative icon */}
          <div className="absolute top-0 right-0 p-4 select-none pointer-events-none">
            <span
              className="font-mono text-[80px] leading-none font-black"
              style={{ color: 'rgba(204,0,0,0.08)', letterSpacing: '-0.05em' }}
            >
              {'</>'}
            </span>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h3 className="font-headline text-3xl font-black uppercase tracking-tight text-white mb-6 leading-none">
                The Technical Edge
              </h3>
              <p className="text-on-surface/60 text-sm leading-relaxed max-w-md">
                Every skill in this arsenal is honed for performance. We don't just build
                interfaces we architect systems that survive the pressure of scale while
                maintaining cinematic precision in every pixel.
              </p>
            </div>

            {/* Right: stats 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="border-l-2 border-primary-container pl-4 py-2">
                  <div className="font-mono text-xl text-white font-bold">{value}</div>
                  <div className="font-mono text-[10px] uppercase text-primary-container tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
