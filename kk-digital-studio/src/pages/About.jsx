import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { fadeUp, scaleReveal, stagger, viewportOnce } from '../utils/motion.js';

const img = (id, w = 900, h = 1100) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const VALUES = [
  { title: 'Emotion First', desc: 'We wait for the real moment — never force it. The best frame is the one you forgot was being taken.' },
  { title: 'Editorial Craft', desc: 'Every gallery is curated and graded like a magazine story, image by image, by hand.' },
  { title: 'Heirloom Quality', desc: 'From capture to print, we use archival processes so your photographs outlive trends.' },
  { title: 'Quiet Professionalism', desc: 'We blend into your celebration. Present everywhere, noticed nowhere.' }
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Studio"
        title="Stories told in light"
        lead="Twelve years, eight hundred weddings, and one obsession — the honest, beautiful moment."
        image={img('photo-1492691527719-9d1e07e534b4', 1920, 1080)}
      />

      <section className="section">
        <div className="container grid-2">
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img
              src={img('photo-1502920917128-1aa500764cbd')}
              alt="Photographer reviewing portraits in the studio"
              loading="lazy"
              style={{ borderRadius: 'var(--radius)', aspectRatio: '4/5', objectFit: 'cover', width: '100%' }}
            />
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span className="eyebrow" variants={fadeUp}>Our Story</motion.span>
            <motion.h2 className="display-2" variants={fadeUp} style={{ marginTop: '1rem' }}>
              A studio built on <em className="gold">trust and timing.</em>
            </motion.h2>
            <motion.p className="lead" variants={fadeUp} style={{ marginTop: '1.4rem' }}>
              KK DIGITAL STUDIO began with a single camera and a simple belief: families deserve
              photographs as carefully made as the memories themselves. Today our team covers
              weddings, portraits, and events across the region — and our in-house framing lab
              turns those images into pieces that live on your walls for generations.
            </motion.p>
            <motion.p className="lead" variants={fadeUp} style={{ marginTop: '1rem' }}>
              We are small by choice. Every client works directly with the artists who will
              stand beside them on the day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading center eyebrow="What Guides Us" title="Four quiet promises" />
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {VALUES.map((v) => (
              <motion.article key={v.title} className="service-card" variants={fadeUp}>
                <h3 className="service-card__title">{v.title}</h3>
                <p className="service-card__desc">{v.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section center">
        <div className="container">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.h2 className="display-2" variants={fadeUp}>Let us tell yours.</motion.h2>
            <motion.div variants={fadeUp} style={{ marginTop: '2rem', display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/booking" className="btn btn--gold">Book Your Session</Link>
              <Link to="/portfolio" className="btn btn--outline">See Our Work</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
