'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Static imports let next/image infer intrinsic dimensions and generate a
// blur-up placeholder at build time, so the logos show instantly instead of
// popping in. Paired with sizes="36px" the optimizer also serves a tiny
// variant rather than the full 225px source.
import pixxelLogo from '../public/about/pixxel.png';
import ripplingLogo from '../public/about/rippling.png';
import gojekLogo from '../public/about/gojek.png';
import infoclotLogo from '../public/about/infoclot.png';

const work = [
  { company: 'Pixxel', role: 'Head of Design', dates: '2023 - Present', logo: pixxelLogo },
  { company: 'Rippling', role: 'Principal Designer', dates: '2022 - 2023', logo: ripplingLogo },
  { company: 'Gojek', role: 'Head of Design - Data Products', dates: '2017 - 2022', logo: gojekLogo },
  { company: 'Infoclot', role: 'Co-Founder', dates: '2012 - 2017', logo: infoclotLogo },
];

const writing = [
  { title: 'The silent killers of good design', date: 'Jan 10, 2025', href: '/writing/the-silent-killers-of-good-design' },
  { title: 'The soul of good design', date: 'Jan 5, 2025', href: '/writing/the-soul-of-good-design' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/p4suhag/' },
  { label: 'Twitter', href: 'https://x.com/p4suhag' },
  { label: 'Instagram', href: 'https://instagram.com/p4suhag' },
  { label: 'Email', href: 'mailto:praveen@pixxel.co.in' },
];

// The pencil draw runs over 3s; content blocks fade up on load, staggered 300ms.
const DRAW_DURATION = 3;
const SECTION_STAGGER = 0.3;

// Module-level flag: persists across client-side (SPA) navigations but resets on
// a full page reload. So the entrance animation plays only on first load, not
// when returning to home via in-app navigation (e.g. back from a writing post).
let hasAnimated = false;

export default function AboutContent({ symbolPath }) {
  const reduce = useReducedMotion();

  // Captured once at mount so the value is stable for this mount's lifetime.
  const [animateOnLoad] = useState(() => !hasAnimated);
  useEffect(() => {
    hasAnimated = true;
  }, []);

  // Skip the entrance choreography when reduced motion is requested or this is
  // a revisit — render everything in its final, settled state.
  const skipAnimation = reduce || !animateOnLoad;

  // Each content block rises into place. Index drives the 300ms cascade.
  const rise = (index) =>
    skipAnimation
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * SECTION_STAGGER, ease: 'easeOut' },
        };

  return (
    <div className="about_page about_serif">
      <main className="about_container">
        <section className="about_intro">
          <div className="about_title">
            <span className="about_symbol" role="img" aria-label="Praveen Suhag">
              <PencilSymbol d={symbolPath} reduce={skipAnimation} />
            </span>
            <motion.p className="about_name about_name_lg" {...rise(0)}>
              Praveen Suhag.
            </motion.p>
          </div>

          <motion.div className="about_bio_group" {...rise(0)}>
            <p className="about_bio">I design products that help people see what matters.</p>
            <p className="about_bio">
              Today, I lead Design at <span className="about_pixxel">Pixxel</span>, where we’re transforming
              planetary data into understanding, helping people make sense of our changing planet.
            </p>
            <p className="about_bio">
              Over the last decade, I’ve worked across consumer products, business systems, data platforms,
              and scientific tools, transforming complex technologies into experiences that feel effortless.
            </p>
            <p className="about_bio">
              I believe great design doesn’t simplify products. It simplifies understanding.
            </p>
            <p className="about_bio">
              Lately, I’ve become increasingly interested in life sciences and the opportunity to design
              technologies that improve both human and planetary health.
            </p>
          </motion.div>
        </section>

        <motion.section className="about_work" {...rise(1)}>
          <p className="about_work_label">History.</p>
          {work.map((item) => (
            <div className="about_tile" key={`${item.company}-${item.role}`}>
              <div className="about_tile_logo">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={36}
                  height={36}
                  sizes="36px"
                  placeholder="blur"
                />
              </div>
              <div className="about_tile_text">
                <p className="about_tile_company">{item.company}</p>
                <p className="about_tile_role">{item.role}</p>
              </div>
              <p className="about_tile_date">{item.dates}</p>
            </div>
          ))}
        </motion.section>

        <motion.section className="about_writing" {...rise(2)}>
          <p className="about_work_label">Writing.</p>
          <div className="about_writing_list">
            {writing.map((item) => {
              const row = (
                <div className="about_writing_row">
                  <p className="about_writing_title">{item.title}</p>
                  <p className="about_writing_date">{item.date}</p>
                </div>
              );
              return item.href ? (
                <Link className="about_writing_tile" key={item.title} href={item.href}>
                  {row}
                </Link>
              ) : (
                <div className="about_writing_tile" key={item.title}>
                  {row}
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section className="about_social" {...rise(3)}>
          <p className="about_work_label">Social.</p>
          <div className="about_social_links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

const STROKE_DRAW = 0.45; // how long a single scribble stroke takes to lay down

// Deterministic PRNG (mulberry32) so the scribble is identical on server and
// client — Math.random() would desync hydration.
function makeRng(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Random multi-directional scribble over the 40×28 box. Strokes are placed on a
// jittered grid so the whole glyph is guaranteed to be covered by the end (we no
// longer have a fade pass to fill gaps), but each gets a random angle, length
// and start time — so it reads as a hand scribbling all over, not a tidy hatch.
const SCRIBBLE = (() => {
  const rng = makeRng(0x9e3779b9);
  const COLS = 6;
  const ROWS = 5;
  const PER_CELL = 2;
  const cellW = 40 / COLS;
  const cellH = 28 / ROWS;
  const out = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      for (let k = 0; k < PER_CELL; k++) {
        const cx = (c + rng()) * cellW;
        const cy = (r + rng()) * cellH;
        const angle = rng() * Math.PI; // any direction
        const half = 7 + rng() * 5; // length ~14–24: overlaps neighbouring cells
        const dx = Math.cos(angle) * half;
        const dy = Math.sin(angle) * half;
        out.push({
          x1: cx - dx,
          y1: cy - dy,
          x2: cx + dx,
          y2: cy + dy,
          w: 3 + rng() * 1.6,
          delay: rng() * (DRAW_DURATION - STROKE_DRAW),
        });
      }
    }
  }
  return out;
})();

// Draws the symbol like a designer rapidly scribbling with a soft 2B pencil:
// overlapping strokes in every direction land all over the glyph within ~3s,
// each drawn with Framer Motion's pathLength. A grain filter roughens the edges
// (soft pencil tooth). The scribble masks the final solid fill and covers it
// completely by the end, so the glyph resolves to the clean design symbol.
function PencilSymbol({ d, reduce }) {
  if (reduce) {
    return (
      <svg
        viewBox="0 0 40 28"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} fill="black" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 40 28"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="about-pencil-grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85 0.65" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.1" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <mask id="about-symbol-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="28">
          <g filter="url(#about-pencil-grain)">
            {SCRIBBLE.map((s, i) => (
              <motion.line
                key={i}
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke="white"
                strokeWidth={s.w}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: STROKE_DRAW, delay: s.delay, ease: 'easeOut' }}
              />
            ))}
          </g>
        </mask>
      </defs>
      <path d={d} fill="black" mask="url(#about-symbol-reveal)" />
    </svg>
  );
}
