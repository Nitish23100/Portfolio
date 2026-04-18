// === FOOTER ===
// Matches HomeReference.html:
// bg #0e0e0e, border-t white/5
// Left: ARCHITECT bold white
// Center: © copyright in JetBrains Mono white/40
// Right: GITHUB · LINKEDIN · EMAIL links
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] w-full border-t border-white/5 relative flex flex-col items-center justify-center px-12 py-8 gap-6 md:gap-0 min-h-[100px]">
      {/* Logo */}
      <div className="md:absolute left-12 text-lg font-black text-white uppercase font-headline">
        ARCHITECT
      </div>

      {/* Copyright Removed */}

      {/* Social Links */}
      <div className="flex items-center space-x-8">
        {[
          { label: 'GITHUB',   href: 'https://github.com/Nitish23100' },
          { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/nitishdubey26' },
          { label: 'EMAIL',    href: 'mailto:rishukanha.spr@gmail.com' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-white/70 hover:text-[#CC0000] transition-colors duration-300 hover:opacity-100"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
